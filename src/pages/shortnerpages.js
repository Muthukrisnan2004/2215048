import { useState, useEffect } from "react";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";
import { saveUrl, getUrls } from "../utils/storage";
import Logger from "../utils/loggerMiddle";

export default function ShortenerPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(getUrls());
  }, []);

  const handleShorten = (data) => {
    const shortUrl = generateShortUrl(data.customAlias);
    const newEntry = {
      originalUrl: data.url,
      shortUrl,
      expiry: parseInt(data.expiry) || 30,
    };

    saveUrl(newEntry);
    Logger({ message: `New URL shortened: ${shortUrl}` });
    setUrls(getUrls());
  };

  const generateShortUrl = (customAlias) => {
    const baseUrl = window.location.origin + "/";
    return baseUrl + (customAlias || Math.random().toString(36).substr(2, 6));
  };

  return (
    <div className="shortener-container">
      <h1 className="page-title">URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
}
