export default function UrlList({ urls }) {
  return (
    <div className="url-list">
      <h2 className="url-list-title">Shortened URLs</h2>
      {urls.length === 0 ? (
        <p className="no-urls">No URLs shortened yet.</p>
      ) : (
        <ul className="url-items">
          {urls.map((item, idx) => (
            <li key={idx} className="url-item">
              <a 
                href={item.shortUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="short-url-link"
              >
                {item.shortUrl}
              </a>
              <span className="expiry-text">
                Expires in {item.expiry} mins
              </span>
              <button 
                onClick={() => navigator.clipboard.writeText(item.shortUrl)} 
                className="copy-button"
              >
                Copy
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
