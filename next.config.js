/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'swewoocommerce.dfweb.no', pathname: '**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '**' },
      // ADD YOUR WP staging host
      { protocol: 'https', hostname: 'staging-f302-justcosmeticscy.wpcomstaging.com/', pathname: '**' },
    ],
  },
};

module.exports = nextConfig;
