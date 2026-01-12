import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://parxgroup.co.uk/sitemap.xml

# Parx Group - Real Estate Insurance Specialist
# https://parxgroup.co.uk
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
