// Minimal reusable API utilities and Lead types

export type LeadType = 'Personal' | 'Business';

// Base API URL: future-friendly (env override) but hard-coded fallback per request
const API_BASE = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_BASE_URL) || 'http://localhost:8000';

export interface LeadCreate {
  First_Name?: string;
  Last_Name: string;
  Company?: string;
  Email?: string;
  Phone?: string;
  Street?: string;
  City?: string;
  State?: string;
  Zip_Code?: string;
  Country?: string;
  Lead_Source?: string;
  Lead_Type?: LeadType;
  Description?: string;
}

export interface LeadCreateResponse {
  success: boolean;
  zoho: unknown;
}

// Join relative path to API_BASE
function buildUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path; // already absolute
  const base = API_BASE.replace(/\/$/, '');
  const rel = path.startsWith('/') ? path : `/${path}`;
  return base + rel;
}

// Generic JSON request helper
async function requestJson<TResponse>(path: string, init?: RequestInit): Promise<TResponse> {
  const url = buildUrl(path);
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    ...init,
  });

  const isJson = (res.headers.get('content-type') || '').includes('application/json');
  const payload = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const detail = typeof payload === 'string' ? payload : (payload as any)?.detail ?? res.statusText;
    const err = new Error(detail);
    (err as any).status = res.status;
    (err as any).data = payload;
    throw err;
  }

  return payload as TResponse;
}

// Specific API call: Create Lead
export function createLead(body: LeadCreate) {
  return requestJson<LeadCreateResponse>('/leads', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

// Export the generic helper for light reuse elsewhere if needed
export const api = { requestJson };
