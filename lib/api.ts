export async function fetchFromAPI(endpoint: string, options: RequestInit = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(\`\${baseUrl}\${endpoint}\`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(\`API Error: \${res.status} - \${err}\`);
  }

  return res.json();
}
