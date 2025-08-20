import { useState } from "react";
import validateUrl from "../utils/validateUrl";

export default function UrlForm({ onShorten })
{
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [expiry, setExpiry] = useState("");
    const [customAlias, setCustomAlias] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!validateUrl(url)) {
            setError("Please enter a valid URL.");
            return;
        }

        if (expiry && isNaN(expiry)) {
            setError("Expiry must be a number.");
            return;
        }

        onShorten({ url, expiry, customAlias });
        setUrl("");
        setExpiry("");
        setCustomAlias("");
    };
    return (
        <form onSubmit={handleSubmit} className="url-form">
            <input type="text" placeholder="Enter a URL" value={url} onChange={(e) => setUrl(e.target.value)} className="" />

            <input type="number" placeholder="expiry(minutes" value={expiry} onChange={(e) => setExpiry(e.target.value)} className="" />

            <input type="text"  placeholder="Custom Alias (optional)" value={customAlias} onChange={(e) => setCustomAlias(e.target.value)} className="" />

            {error && <p className="error">{error}</p>}

            <button type="submit" className="shorten-button">Shorten URL</button>
        </form>
    );

}