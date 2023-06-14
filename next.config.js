/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 's1.1zoom.me',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
