import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "St. Joseph's Girls' School",
    short_name: "SJGS Nugegoda",
    description: "Official App of St. Joseph's Girls' School Nugegoda",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#800000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png", 
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png", 
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}