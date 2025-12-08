const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function apiPost(endpoint, body) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // add tenant header if you use multi-tenant
      "x-tenant": body.tenant || "smartech"
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "API request failed");
  }

  return res.json();
}