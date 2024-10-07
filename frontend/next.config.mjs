/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        // domains: ['placehold.co','images.unsplash.com'], // deprecated. 
        dangerouslyAllowSVG: true, // Enable SVG support
    
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'placehold.co',
              port: '',
              // pathname: '/account123/**',
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              // pathname: '/account123/**',
            },
        ],
      },
    
};

export default nextConfig;
