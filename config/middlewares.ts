module.exports = [
  {
    name: `strapi::security`,
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self", 'https:'],
          'img-src': [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://harshad-swaminarayan-mandir.s3.ap-south-1.amazonaws.com"
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            "https://harshad-swaminarayan-mandir.s3.ap-south-1.amazonaws.com"
          ],
          upgradeInsecureRequests: null,
        }
      }
    }
  },
  // 'global::rate-limiter',
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]