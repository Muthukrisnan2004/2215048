export const saveUrl = (urlObj) => {
  const urls = getUrls();
  const newUrl = {
    ...urlObj,
    created: new Date().toISOString(),
  };
  urls.push(newUrl);
  localStorage.setItem("urls", JSON.stringify(urls));
  
  // Initialize stats for the new URL
  const stats = getStats();
  stats.push({
    shortUrl: urlObj.shortUrl,
    clicks: 0,
    lastClick: null,
    source: [],
    location: []
  });
  localStorage.setItem("stats", JSON.stringify(stats));
};

export const getUrls = () => {
  return JSON.parse(localStorage.getItem("urls") || "[]");
};

export const getStats = () => {
  return JSON.parse(localStorage.getItem("stats") || "[]");
};

export const updateUrlStats = (shortUrl, source, location) => {
  const stats = getStats();
  const statIndex = stats.findIndex(stat => stat.shortUrl === shortUrl);
  
  if (statIndex !== -1) {
    stats[statIndex].clicks += 1;
    stats[statIndex].lastClick = new Date().toISOString();
    stats[statIndex].source.push(source);
    stats[statIndex].location.push(location);
    localStorage.setItem("stats", JSON.stringify(stats));
  }
};
