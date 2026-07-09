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
};

export default nextConfig;
