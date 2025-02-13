

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v2.exercisedb.io',  // Add the domain of your GIF URLs
      },
    ],
    unoptimized: true, // Add this for GIF support
  },
}

export default nextConfig