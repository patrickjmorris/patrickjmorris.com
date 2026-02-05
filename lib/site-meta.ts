export const siteMeta = {
  title: 'Patrick Morris | Data Leader & Analytics Professional',
  description:
    'Patrick Morris is a data analytics leader with over 12 years of experience at companies like Disney and The New York Times. Specializing in sports streaming analytics and data strategy.',
  shortDescription:
    'Patrick Morris is a data analytics leader with over 12 years of experience at companies like Disney and The New York Times.',
  siteUrl: 'https://patrickjmorris.com',
  path: '/',
  keywords:
    'Patrick Morris, Data Analytics, ESPN+, Disney, New York Times, Sports Analytics, Data Strategy, Product Management',
  headshotImage: '/images/patrick_morris_headshot.jpg',
  socialImage: '/images/patrick-og-card.jpg',
  socialImageWidth: 1200,
  socialImageHeight: 630,
  socialImageType: 'image/jpeg',
  twitterHandle: '@patrickjmorris',
  themeColor: '#F3EFE0',
  name: 'Patrick Morris',
  jobTitle: 'Data Analytics Leader',
  email: 'patrickjohnmorris@gmail.com',
  phone: '+15169935873',
  githubUrl: 'https://github.com/patrickjmorris',
  linkedinUrl: 'https://linkedin.com/in/patrickjohnmorris'
};

export const toAbsoluteUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteMeta.siteUrl}${normalizedPath}`;
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteMeta.name,
  url: siteMeta.siteUrl,
  image: toAbsoluteUrl(siteMeta.headshotImage),
  jobTitle: siteMeta.jobTitle,
  worksFor: {
    '@type': 'Organization',
    name: 'Previously at Disney'
  },
  description: siteMeta.shortDescription,
  sameAs: [siteMeta.githubUrl, siteMeta.linkedinUrl]
};
