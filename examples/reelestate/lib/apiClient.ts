import { config } from './config';

export const apiClient = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const url = `${config.apiUrl}/${endpoint}`;

  // Remove 'Content-Type' header if body is FormData
  const headers = {
    ...(options?.body instanceof FormData
      ? {}
      : { 'Content-Type': 'application/json' }),
    ...(options?.headers || {})
  };

  const response = await fetch(url, {
    headers,
    ...options
  });

  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }

  const data: T = await response.json();
  return data;
};
