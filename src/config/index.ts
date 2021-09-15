const { NODE_ENV } = process.env;

const CONFIG = {
  env: NODE_ENV,
  isProduction: NODE_ENV !== 'test' && NODE_ENV !== 'development',
  isTest: NODE_ENV === 'test',
  isDevelopment: NODE_ENV === 'development',

  siteName: 'Next-Boiler',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
} as const;

export default CONFIG;
