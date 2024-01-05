/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/about',
            destination: '/',
            permanent: false,
        },
        {
            source: '/about/:contact',
            destination: '/',
            permanent: false,
        }
    ]
}

module.exports = nextConfig
