/** @type {import('next').NextConfig} */
const nextConfig = {
        // productionBrowserSourceMaps: true,  
        images: {
                remotePatterns: [
                  {
                    protocol: "http",
                    hostname: "localhost",
                    port: "5000",
                    pathname: "/images/blog_img/**",
                  },
                  {
                    protocol: "http",
                    hostname: "localhost",
                    port: "5000",
                    pathname: "/images/certificate_img/**",
                  },
                  {
                    protocol: "http",
                    hostname: "localhost",
                    port: "5000",
                    pathname: "/images/gallery_img/**",
                  },
                  {
                    protocol: "http",
                    hostname: "localhost",
                    port: "5000",
                    pathname: "/images/service_img/**",
                  },
                ],
              },
};

export default nextConfig;

