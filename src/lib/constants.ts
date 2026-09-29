export const SITE_URL = 'https://aipolyintelligence.com';
export const SITE_NAME = 'aipolyintelligence.com';
export const BRAND = 'Desert Rich Domains';
export const DOMAIN_NAME = 'aipolyintelligence.com';
export const DOMAIN_PRICE = 199999;
export const DOMAIN_PRICE_DISPLAY = '$199,999';
export const DOMAIN_CURRENCY = 'USD';
export const ACQUISITION_EMAIL = 'sales@desertrich.com';

/** Canonical URL for a pathname (trailing slash, apex HTTPS). */
export function getCanonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (path.endsWith('/index.html')) {
    path = path.slice(0, -'index.html'.length) || '/';
  }
  if (path !== '/' && !path.endsWith('/')) {
    path = `${path}/`;
  }
  return new URL(path, SITE_URL).href;
}

/** Cloudflare Images CDN — hero / OG */
export const HERO_IMAGE_URL =
  'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/2f985f0a-5ad0-4a83-f532-bff82af2bd00/public';

export const DISCLAIMER =
  'This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of the date shown and are subject to change.';

export const SEO = {
  title: `${DOMAIN_NAME} | Premium Domain for Sale | ${BRAND}`,
  description: `${DOMAIN_NAME} is available for acquisition at ${DOMAIN_PRICE_DISPLAY} USD. Escrow-protected premium AI domain for polyintelligence, AGI research, and multi-agent platforms. Buy now or make an offer.`,
  keywords:
    'buy .com domains, domain marketplace, aipolyintelligence.com for sale, premium domain names, investment domains, AI domain for sale, polyintelligence domain, brandable AI domains',
};

export function acquisitionMailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  params.set(
    'subject',
    subject ?? `Domain acquisition inquiry: ${DOMAIN_NAME}`,
  );
  if (body) params.set('body', body);
  return `mailto:${ACQUISITION_EMAIL}?${params.toString()}`;
}

export function buyNowMailto(): string {
  return acquisitionMailto(
    `Buy Now: ${DOMAIN_NAME} — ${DOMAIN_PRICE_DISPLAY}`,
    [
      `I would like to purchase ${DOMAIN_NAME} at the listed price of ${DOMAIN_PRICE_DISPLAY} USD.`,
      '',
      'Preferred transfer method: Escrow.com',
      'Timeline: Immediate',
      '',
      'Name:',
      'Organization:',
      'Phone:',
    ].join('\n'),
  );
}

export function makeOfferMailto(offer?: string): string {
  return acquisitionMailto(
    `Offer for ${DOMAIN_NAME}`,
    [
      `I would like to submit an offer for ${DOMAIN_NAME}.`,
      '',
      `Offer amount (USD): ${offer ?? '[your offer]'}`,
      'Timeline:',
      'Name:',
      'Organization:',
      'Notes:',
    ].join('\n'),
  );
}

export function contactAgentMailto(): string {
  return acquisitionMailto(
    `Contact agent about ${DOMAIN_NAME}`,
    [
      `I would like to speak with an agent about acquiring ${DOMAIN_NAME}.`,
      '',
      'Name:',
      'Organization:',
      'Preferred contact method:',
      'Questions:',
    ].join('\n'),
  );
}
