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
      {
        // Closed-testing sample BOQs (/test-files). Forcing a download stops
        // mobile browsers opening an in-browser preview, so the file lands in
        // Downloads where the BOQ+ file picker can find it.
        source: "/samples/:file*.xls",
        headers: [
          { key: "Content-Type", value: "application/vnd.ms-excel" },
          { key: "Content-Disposition", value: "attachment" },
        ],
      },
    ];
  },

  async redirects() {
    // The store consoles hold .html versions of these URLs — Play's declared
    // privacy policy URL is /privacy.html, which 404'd. A store listing cannot
    // be edited retroactively for every reviewer who already has the old link,
    // and a 404 on a declared privacy policy is a rejection, so the site
    // answers both spellings. Permanent: the extensionless route is canonical.
    const legal = ["privacy", "terms", "refund", "delete-account", "support"];
    // App Store Connect's Support URL was /contact.html, a page that never
    // existed on this site; /support is the contact page.
    const contact = ["/contact", "/contact.html"];
    return [
      ...legal.map((page) => ({
        source: `/${page}.html`,
        destination: `/${page}`,
        permanent: true,
      })),
      ...contact.map((source) => ({
        source,
        destination: "/support",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
