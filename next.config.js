/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com', 'https://res.cloudinary.com', 'https://streettweets.vercel.app'], // tanpa spasi atau karakter aneh
    },
};

module.exports = nextConfig;