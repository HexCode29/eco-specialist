// Firestore service for saving form data to Firebase collections
import { db } from './config';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from 'firebase/firestore';

// Collections
const COLLECTIONS = {
  CONTACT_MESSAGES: 'eco4contactMessages',
  QUOTE_REQUESTS: 'eco4quoteRequests',
  GRANT_APPLICATIONS: 'grantApplications',
  SERVICES: 'services',
  LEADS: 'leads',
  NEWSLETTER_SUBSCRIBERS: 'eco4newsletterSubscribers'
};

// Helper function to save to Firestore
const saveToFirestore = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString()
    });
    
    console.log(`✅ Document saved to ${collectionName} with ID: ${docRef.id}`);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error(`❌ Error saving to ${collectionName}:`, error.message);
    
    // Fallback to localStorage if Firestore fails
    try {
      const existingData = JSON.parse(localStorage.getItem(collectionName) || '[]');
      const newItem = {
        ...data,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        fallback: true
      };
      existingData.push(newItem);
      localStorage.setItem(collectionName, JSON.stringify(existingData));
      console.log(`💾 Fallback: Saved to localStorage`);
      return { success: true, id: newItem.id, fallback: true };
    } catch (fallbackError) {
      console.error('❌ Fallback failed:', fallbackError.message);
      return { success: false, error: error.message };
    }
  }
};

// Contact Form Service
export const saveContactMessage = async (formData) => {
  try {
    const result = await saveToFirestore(COLLECTIONS.CONTACT_MESSAGES, {
      ...formData,
      status: 'new',
      source: 'contact_page',
      formType: 'contact'
    });
    
    // Also log to console for debugging
    console.log('Contact message saved:', formData);
    
    return result;
  } catch (error) {
    console.error('Error saving contact message:', error);
    return { success: false, error: error.message };
  }
};

// Quote Request Service
export const saveQuoteRequest = async (formData) => {
  try {
    const result = await saveToFirestore(COLLECTIONS.QUOTE_REQUESTS, {
      ...formData,
      status: 'pending',
      source: 'quote_page',
      formType: 'quote',
      estimatedSavings: calculateEstimatedSavings(formData)
    });
    
    // Also log to console for debugging
    console.log('Quote request saved:', formData);
    
    return result;
  } catch (error) {
    console.error('Error saving quote request:', error);
    return { success: false, error: error.message };
  }
};

// Grant Application Service
export const saveGrantApplication = async (formData, grantType) => {
  try {
    const result = await saveToFirestore(COLLECTIONS.GRANT_APPLICATIONS, {
      ...formData,
      grantType,
      status: 'submitted',
      source: 'grant_page',
      formType: 'grant_application'
    });
    
    // Also log to console for debugging
    console.log('Grant application saved:', formData, grantType);
    
    return result;
  } catch (error) {
    console.error('Error saving grant application:', error);
    return { success: false, error: error.message };
  }
};

// Services fetching helper (for eligibility / widgets etc.)
export const getServices = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.SERVICES));
    const services = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      services.push({
        id: doc.id,
        name: data.name,
        price: data.price,
        ...data
      });
    });

    return { success: true, services };
  } catch (error) {
    console.error('Error fetching services from Firestore:', error);
    return { success: false, error: error.message, services: [] };
  }
};

// Lead / Eligibility Form Service
export const saveLead = async (leadData) => {
  try {
    const {
      certificateType = 'Boiler Service',
      additionalDetails = '',
      selectedServices = [],
      estimatedValue,
      priority = 'Medium',
      urgency = 'Normal',
      source = 'Website Widget',
      ...rest // keep all other fields from the form (postcode, ownership, etc.)
    } = leadData;

    // If estimatedValue not provided, derive it from selected services prices
    const derivedEstimatedValue =
      typeof estimatedValue === 'number'
        ? estimatedValue
        : selectedServices.reduce(
            (total, svc) => total + (Number(svc.price) || 0),
            0
          );

    const payload = {
      ...rest, // includes postcode, ownership, currentHeating, bedrooms, EPC, benefits, etc.
      certificateType,
      additionalDetails,
      selectedServices,
      estimatedValue: derivedEstimatedValue,
      converted: false,
      priority,
      urgency,
      status: 'New',
      source,
      formType: 'lead'
    };

    const result = await saveToFirestore(COLLECTIONS.LEADS, payload);

    console.log('Lead saved:', payload);

    return result;
  } catch (error) {
    console.error('Error saving lead:', error);
    return { success: false, error: error.message };
  }
};

// Newsletter Subscription Service
export const saveNewsletterSubscription = async (email, preferences = {}) => {
  try {
    const result = await saveToFirestore(COLLECTIONS.NEWSLETTER_SUBSCRIBERS, {
      email,
      preferences,
      status: 'active',
      source: 'newsletter_signup',
      formType: 'newsletter'
    });
    
    // Also log to console for debugging
    console.log('Newsletter subscription saved:', email, preferences);
    
    return result;
  } catch (error) {
    console.error('Error saving newsletter subscription:', error);
    return { success: false, error: error.message };
  }
};

// Helper function to calculate estimated savings
const calculateEstimatedSavings = (formData) => {
  let savings = 0;
  
  // Basic savings based on property type and current heating
  if (formData.propertyType === 'House') savings += 200;
  if (formData.bedrooms === '4+') savings += 150;
  if (formData.currentHeating === 'Gas Boiler') savings += 300;
  if (formData.insulation === 'Poor') savings += 250;
  
  return savings;
};

// Get recent submissions (for admin purposes)
export const getRecentSubmissions = async (collectionName, limitCount = 10) => {
  try {
    const q = query(
      collection(db, collectionName),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const submissions = [];
    
    querySnapshot.forEach((doc) => {
      submissions.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return submissions;
  } catch (error) {
    console.error('Error getting recent submissions from Firestore:', error);
    
    // Fallback to localStorage
    try {
      const data = JSON.parse(localStorage.getItem(collectionName) || '[]');
      return data
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, limitCount);
    } catch (fallbackError) {
      console.error('Fallback to localStorage also failed:', fallbackError);
      return [];
    }
  }
};

export { COLLECTIONS };