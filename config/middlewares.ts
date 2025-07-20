export default [
  'strapi::logger',
  'strapi::errors',
  // {
  //   name: 'strapi::body',
  //   config: {
  //     formLimit: '10mb',
  //     jsonLimit: '10mb',
  //     textLimit: '10mb',
  //     formidable: {
  //       // ✅ Set your custom temp directory here:
  //       uploadDir: 'C:/strapi-temp',
  //       keepExtensions: true,
  //     },
  //   },
  // },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
