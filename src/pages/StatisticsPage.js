import { useState, useEffect } from "react";
import UrlStats from "../components/UrlStats";
import { getStats } from "../utils/storage";
import Logger from "../utils/loggerMiddle";

export default function StatisticsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const urlStats = getStats();
    setStats(urlStats);
    Logger({ message: "Statistics page viewed" });
  }, []);

  return (
    <div className="stats-container">
      <h1 className="page-title">URL Statistics</h1>
      <UrlStats stats={stats} />
    </div>
  );
}
