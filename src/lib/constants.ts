export const SITE_URL = 'https://aipolyintelligence.com';
export const SITE_NAME = 'aipolyintelligence.com';
export const ACQUISITION_EMAIL = 'sales@desertrich.com';

/** Cloudflare Images CDN — hero / OG */
export const HERO_IMAGE_URL =
  'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/2f985f0a-5ad0-4a83-f532-bff82af2bd00/public';

export const DISCLAIMER =
  'This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of the date shown and are subject to change.';

export function acquisitionMailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  params.set(
    'subject',
    subject ?? 'Domain acquisition inquiry: aipolyintelligence.com',
  );
  if (body) params.set('body', body);
  return `mailto:${ACQUISITION_EMAIL}?${params.toString()}`;
}
