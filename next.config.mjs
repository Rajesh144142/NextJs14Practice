/** @type {import('next').NextConfig} */
const nextConfig = {
    // server: {
    //     proxy: { '/api': 'http://localhost:3000' }
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }
        ]
    }
};

export default nextConfig;
