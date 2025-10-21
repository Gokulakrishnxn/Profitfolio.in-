"use client";

import { useState, useEffect } from 'react';

interface PortfolioData {
  holdings: Array<{
    symbol: string;
    name: string;
    shares: number;
    price: number;
    value: number;
    change: number;
    changePercent: number;
    quarter: string;
  }>;
  quarterlyData: Array<{
    quarter: string;
    investment: number;
    return: number;
    returnPercent: number;
    status: string;
    topPick: string;
    worstPick: string;
  }>;
  summary: {
    initialCapital: number;
    currentValue: number;
    totalReturn: number;
    winRate: number;
  };
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/portfolio');
        
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        
        const portfolioData = await response.json();
        setData(portfolioData);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, refetch: () => {
    setLoading(true);
    fetch('/api/portfolio')
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }};
}
