export const msalConfig = {
    auth: {
      clientId: "9041cc30-4be8-4ea4-a013-a164d84906e0",
      authority: "https://login.microsoftonline.com/b3b380f7-4c00-4b2e-b115-ad701add980a", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://app.powerbi.com/groups/b9001cc0-1075-4eaf-a1f6-be82145704a3/reports/9041cc30-4be8-4ea4-a013-a164d84906e0/ReportSection",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
  };