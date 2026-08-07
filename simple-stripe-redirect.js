/**
 * Simple Stripe Redirect Handler
 * 
 * This script checks if the current URL contains Stripe-related parameters
 * and stores them in local storage for the React app to access when it loads.
 */

(function() {
  // Parse the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check if this is a Stripe redirect (presence of specific params)
  const isStripeRedirect = urlParams.has('payment_intent') || 
                         urlParams.has('setup_intent') || 
                         urlParams.has('payment_intent_client_secret') || 
                         urlParams.has('setup_intent_client_secret');
  
  // If this is a Stripe redirect
  if (isStripeRedirect) {
    // Store the entire query string for the app to process
    const queryString = window.location.search.substring(1); // Remove the leading '?'
    localStorage.setItem('stripeRedirectQuery', queryString);
    
    // Store payment_intent or setup_intent specifically if present
    if (urlParams.has('payment_intent')) {
      localStorage.setItem('stripePaymentIntent', urlParams.get('payment_intent'));
    }
    
    if (urlParams.has('setup_intent')) {
      localStorage.setItem('stripeSetupIntent', urlParams.get('setup_intent'));
    }
    
    // Store the timestamp to detect stale data
    localStorage.setItem('stripeRedirectTime', Date.now().toString());
    
    // Clean up the URL by removing the query parameters to prevent double processing
    if (window.history && window.history.replaceState) {
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }
})();
