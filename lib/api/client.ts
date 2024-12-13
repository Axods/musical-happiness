export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Get session from localStorage
  let session = null;
  if (typeof window !== 'undefined') {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      session = JSON.parse(storedSession);
    }
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  });

  // Add authorization header if session exists
  if (session?.access_token) {
    headers.set('Authorization', `Bearer ${session.access_token}`);
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    // Clear session if unauthorized
    if (response.status === 401) {
      localStorage.removeItem('session');
    }
    throw new Error(data.error || 'An error occurred');
  }

  return data;
}