// Minimal reusable API utilities and Lead types

export type LeadType = 'Personal' | 'Club';

// Base API URL: future-friendly (env override) but hard-coded fallback per request
// const API_BASE = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_BASE_URL) || 'http://localhost:8000';
// const API_BASE = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_BASE_URL) || 'https://hearthero-api.bluemushroom-e8217cd9.eastus.azurecontainerapps.io';
const API_BASE = 'https://hearthero-api.bluemushroom-e8217cd9.eastus.azurecontainerapps.io';



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
  Lead_Source?: string;
  Lead_Type?: LeadType;
  Opt_Out_SMS?: boolean;
  Opt_Out_Email?: boolean;
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
  const start = performance.now?.() ?? Date.now();
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    ...init,
  });
  const end = performance.now?.() ?? Date.now();
  const durMs = Math.round(end - start);
  if (path.includes('/leads')) {
    // Lightweight timing instrumentation for client-side visibility
    console.debug(`[API] ${init?.method || 'GET'} ${url} in ${durMs}ms`);
  }

  const isJson = (res.headers.get('content-type') || '').includes('application/json');
  const payload = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const detail = typeof payload === 'string' ? payload : (payload as any)?.detail ?? res.statusText;
    const err = new Error(detail);
    (err as any).status = res.status;
    (err as any).data = payload;
    if (path.includes('/leads')) {
      console.warn(`[API] /leads error ${res.status} after ${durMs}ms`, payload);
    }
    throw err;
  }

  return payload as TResponse;
}

// Specific API call: Create Lead
export function createLead(body: LeadCreate) {
  return requestJson<LeadCreateResponse>('/leads/', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

// Export the generic helper for light reuse elsewhere if needed
export const api = { requestJson };
