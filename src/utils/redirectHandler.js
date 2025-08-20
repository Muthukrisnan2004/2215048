import { updateUrlStats } from "./storage";

export const handleRedirect = async (shortUrl) => {
  try {
    // Get user location (you might want to use a geolocation service)
    const location = "Unknown";
    // Get browser info
    const source = navigator.userAgent;
    
    // Update stats
    updateUrlStats(shortUrl, source, location);
    
    // Get original URL from storage and redirect
    const urls = JSON.parse(localStorage.getItem("urls") || "[]");
    const urlData = urls.find(u => u.shortUrl === shortUrl);
    
    if (urlData) {
      window.location.href = urlData.originalUrl;
    }
  } catch (error) {
    console.error("Redirect failed:", error);
  }
};