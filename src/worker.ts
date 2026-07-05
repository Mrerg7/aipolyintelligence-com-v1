const CANONICAL_HOST = 'aipolyintelligence.com';

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let changed = false;

    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      changed = true;
    }

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      changed = true;
    }

    if (changed) {
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
