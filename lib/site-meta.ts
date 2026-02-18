export const siteMeta = {
  title: 'Patrick Morris | Data Leader & Analytics Professional',
  siteName: 'Patrick Morris',
  description:
    'Patrick Morris is a data analytics leader with over 12 years of experience at companies like Disney and The New York Times. Specializing in sports streaming analytics and data strategy.',
  shortDescription:
    'Patrick Morris is a data analytics leader with over 12 years of experience at companies like Disney and The New York Times.',
  siteUrl: 'https://patrickjmorris.com',
  path: '/',
  locale: 'en_US',
  language: 'en-US',
  keywords:
    'Patrick Morris, Data Analytics, ESPN+, Disney, New York Times, Sports Analytics, Data Strategy, Product Management',
  headshotImage: '/images/patrick_morris_headshot.jpg',
  socialImage: '/images/patrick-og-card.jpg',
  socialImageWidth: 1200,
  socialImageHeight: 630,
  socialImageType: 'image/jpeg',
  twitterHandle: '@patrickjmorris',
  twitterUrl: 'https://x.com/patrickjmorris',
  themeColor: '#F3EFE0',
  name: 'Patrick Morris',
  jobTitle: 'Data Analytics Leader',
  location: 'Brooklyn, New York, United States',
  region: 'US-NY',
  email: 'patrickjohnmorris@gmail.com',
  phone: '+15169935873',
  githubUrl: 'https://github.com/patrickjmorris',
  linkedinUrl: 'https://linkedin.com/in/patrickjohnmorris'
};

export const toAbsoluteUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteMeta.siteUrl}${normalizedPath}`;
};

const profileUrl = toAbsoluteUrl(siteMeta.path);
const personId = `${profileUrl}#person`;
const websiteId = `${siteMeta.siteUrl}#website`;
const webpageId = `${profileUrl}#webpage`;
const breadcrumbId = `${profileUrl}#breadcrumb`;

export const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteMeta.siteUrl,
      name: siteMeta.siteName,
      inLanguage: siteMeta.language
    },
    {
      '@type': 'ProfilePage',
      '@id': webpageId,
      url: profileUrl,
      name: siteMeta.title,
      description: siteMeta.description,
      inLanguage: siteMeta.language,
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
      breadcrumb: { '@id': breadcrumbId }
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: siteMeta.name,
      url: siteMeta.siteUrl,
      image: toAbsoluteUrl(siteMeta.headshotImage),
      description: siteMeta.shortDescription,
      jobTitle: siteMeta.jobTitle,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Brooklyn',
        addressRegion: 'NY',
        addressCountry: 'US'
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Previously at Disney'
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Boston College'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'professional inquiries',
          email: siteMeta.email,
          telephone: siteMeta.phone,
          availableLanguage: ['English'],
          areaServed: 'US'
        }
      ],
      knowsAbout: [
        'Subscription analytics',
        'Retention strategy',
        'Product analytics',
        'Experimentation',
        'Data strategy'
      ],
      sameAs: [siteMeta.githubUrl, siteMeta.linkedinUrl, siteMeta.twitterUrl]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: profileUrl
        }
      ]
    }
  ]
};
