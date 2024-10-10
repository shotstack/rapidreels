const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export const config = {
  apiUrl: isProduction
    ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000/'
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000/'
};
