/**
 * Canonical host + HTTPS enforcement, security headers, path aliases.
 *
 * Host variants (www / http) 301 to the apex HTTPS URL.
 * Path aliases (/sitemap.xml, /404*) are rewritten for Search Console hygiene.
 */
const CANONICAL_HOST = 'aipolyintelligence.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

interface Env {
  ASSETS: Fetcher;
}

const SECURITY_HEADERS: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'X-DNS-Prefetch-Control': 'on',
};

function isAlternateHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return host === `www.${CANONICAL_HOST}`;
}

function assetRequest(request: Request, pathname: string): Request {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url.toString(), request);
}

function withHeaders(
  response: Response,
  extra: Record<string, string>,
  status?: number,
): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries({ ...SECURITY_HEADERS, ...extra })) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: status ?? response.status,
    statusText: status && status !== response.status ? '' : response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const needsHttps = url.protocol === 'http:';
    const needsHostRedirect = isAlternateHost(url.hostname);

    if (needsHttps || needsHostRedirect) {
      const canonical = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
      return Response.redirect(canonical.toString(), 301);
    }

    const path = url.pathname;

    if (path === '/sitemap.xml') {
      const response = await env.ASSETS.fetch(
        assetRequest(request, '/sitemap-index.xml'),
      );
      return withHeaders(response, {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      });
    }

    if (path === '/404' || path === '/404/' || path === '/404.html') {
      const response = await env.ASSETS.fetch(
        assetRequest(request, '/404.html'),
      );
      return withHeaders(
        response,
        { 'X-Robots-Tag': 'noindex, follow' },
        404,
      );
    }

    const response = await env.ASSETS.fetch(request);
    return withHeaders(response, {});
  },
} satisfies ExportedHandler<Env>;
