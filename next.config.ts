import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vxszdgabqnsscmqniwfi.supabase.co', // ඔයාගේ Supabase URL එක
        port: '',
        pathname: '/storage/v1/object/public/**', // Storage bucket එකට අදාළ path එක
      },
    ],
  },
};

export default nextConfig;