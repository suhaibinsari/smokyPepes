/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'gateway.pinata.cloud',
            },
            {
                protocol: 'https',
                hostname: 'gateway.ipfscdn.io',
            },
        ],
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        domains: [
            'firebasestorage.googleapis.com',
            'lh3.googleusercontent.com',
            'gateway.pinata.cloud',
            'gateway.ipfscdn.io',
            'bafybeih5dnjoda4qc7csvd5hizn7dnccc7ppvxzotubbtut5z7f7ijgqxu',
        ],
        formats: ['image/avif', 'image/webp'],
    },
}

module.exports = nextConfig
