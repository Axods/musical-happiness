"use client";

import { fetchApi } from './api/client';

export type AuthError = {
  message: string;
};

interface AuthResponse {
  data: {
    user: any;
    session: any;
  };
}

// Store session in localStorage with expiration
const storeSession = (session: any) => {
  if (typeof window !== 'undefined') {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 1); // Set expiration to 24 hours from now
    
    const sessionData = {
      ...session,
      expiresAt: expiresAt.toISOString(),
    };
    
    localStorage.setItem('session', JSON.stringify(sessionData));
  }
};

// Get session from localStorage and check expiration
const getStoredSession = () => {
  if (typeof window !== 'undefined') {
    const sessionStr = localStorage.getItem('session');
    if (!sessionStr) return null;

    const session = JSON.parse(sessionStr);
    const now = new Date();
    const expiresAt = new Date(session.expiresAt);

    if (now > expiresAt) {
      localStorage.removeItem('session');
      return null;
    }

    return session;
  }
  return null;
};

// Clear session from localStorage
const clearSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('session');
  }
};

export async function signUp(email: string, password: string) {
  const response = await fetchApi<AuthResponse>('/api/auth', {
    method: 'POST',
    body: JSON.stringify({ action: 'signUp', email, password }),
  });
  if (response.data?.session) {
    storeSession(response.data.session);
  }
  return response.data;
}

export async function signIn(email: string, password: string) {
  const response = await fetchApi<AuthResponse>('/api/auth', {
    method: 'POST',
    body: JSON.stringify({ action: 'signIn', email, password }),
  });
  if (response.data?.session) {
    storeSession(response.data.session);
  }
  return response.data;
}

export async function signOut() {
  await fetchApi('/api/auth/signout', { method: 'POST' });
  clearSession();
}

export async function getSession() {
  // First try to get from localStorage
  const storedSession = getStoredSession();
  if (storedSession) {
    return storedSession;
  }

  // If not in localStorage, try to get from API
  try {
    const response = await fetchApi<{ data: { session: any } }>('/api/auth/session');
    if (response.data?.session) {
      storeSession(response.data.session);
      return response.data.session;
    }
  } catch (error) {
    clearSession();
    return null;
  }
  return null;
}