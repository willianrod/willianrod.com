/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['localhost', 'willianrod.s3.sa-east-1.amazonaws.com'],
  },
}
