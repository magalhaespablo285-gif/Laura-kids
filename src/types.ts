export interface SocialLink {
  name: string;
  url: string;
  title: string;
  description: string;
  badge?: string;
  actionText: string;
}

export const OFFICIAL_LINKS = {
  whatsapp: 'https://wa.link/70g4fl',
  instagram: 'https://www.instagram.com/laurakidsloja00?stkn=MTh6Znl3eWxuYXF5ZA==',
  logoUrl: 'https://i.postimg.cc/8c8g1TgJ/57A867E7-A7BD-4739-B25A-7EAAE2B19611.png',
} as const;

export interface BrandPillar {
  title: string;
  description: string;
  pastelBg: string;
  accentColor: string;
  badge: string;
}
