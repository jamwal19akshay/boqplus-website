/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // No file extension — Next/Vercel would otherwise serve this as
        // application/octet-stream, which iOS's AASA fetcher rejects.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },

  async redirects() {
    // The store consoles hold .html versions of these URLs — Play's declared
    // privacy policy URL is /privacy.html, which 404'd. A store listing cannot
    // be edited retroactively for every reviewer who already has the old link,
    // and a 404 on a declared privacy policy is a rejection, so the site
    // answers both spellings. Permanent: the extensionless route is canonical.
    const legal = ["privacy", "terms", "refund", "delete-account"];
    return legal.map((page) => ({
      source: `/${page}.html`,
      destination: `/${page}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
