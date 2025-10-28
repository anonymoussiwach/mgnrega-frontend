'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center' }}>Loading data from FastAPI backend...</h2>;

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>MGNREGA District Dashboard</h1>
      <p>Data fetched from FastAPI backend hosted on Render:</p>
      <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
