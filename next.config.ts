import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "covers.openlibrary.org" },
      { protocol: "https", hostname: "cdn.myanimelist.net" },
      { protocol: "https", hostname: "books.google.com" },
      { protocol: "https", hostname: "books.googleusercontent.com" },
      { protocol: "https", hostname: "s4.anilist.co" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "www.give.vt.edu" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "encrypted-tbn1.gstatic.com" },
      { protocol: "https", hostname: "encrypted-tbn2.gstatic.com" },
      { protocol: "https", hostname: "encrypted-tbn3.gstatic.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "img2.animatetimes.com" },
    ],
  },
};

export default nextConfig;
