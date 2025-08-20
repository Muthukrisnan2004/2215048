import { useState } from 'react';

export default function UrlStats({ stats }) {
  const [sortField, setSortField] = useState('clicks');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedStats = [...stats].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">URL Statistics</h2>
      {stats.length === 0 ? (
        <p>No statistics available.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th onClick={() => handleSort('shortUrl')} className="p-2 cursor-pointer">
                Short URL {sortField === 'shortUrl' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('clicks')} className="p-2 cursor-pointer">
                Clicks {sortField === 'clicks' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('lastClick')} className="p-2 cursor-pointer">
                Last Click {sortField === 'lastClick' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('source')} className="p-2 cursor-pointer">
                Source {sortField === 'source' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('location')} className="p-2 cursor-pointer">
                Location {sortField === 'location' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStats.map((item, idx) => (
              <tr key={idx} className="text-center border-t">
                <td className="table-cell">{item.shortUrl}</td>
                <td className="table-cell">{item.clicks}</td>
                <td className="table-cell">{item.lastClick}</td>
                <td className="table-cell">{item.source}</td>
                <td className="table-cell">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
