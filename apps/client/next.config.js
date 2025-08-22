/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@shared/ui', '@shared/styles', '@shared/utils'],
}

module.exports = nextConfig
