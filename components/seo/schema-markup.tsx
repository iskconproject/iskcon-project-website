import React from 'react';

const SchemaMarkup = () => {
  const baseUrl = 'https://iskconproject.com';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'ISKCON Asansol',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logo/iskcon-asansol-logo.svg`,
      width: '512',
      height: '512'
    },
    sameAs: [
      'https://www.facebook.com/people/Iskcon-Asansol/100072286610743/',
      'https://www.youtube.com/@ISKCON699/',
      'https://www.instagram.com/iskconasansol/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94333-20314',
      contactType: 'customer service',
      email: 'iskconasansol@gmail.com',
      availableLanguage: ['English', 'Hindi', 'Bengali']
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'ISKCON Asansol',
    publisher: {
      '@id': `${baseUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HinduTemple',
    '@id': `${baseUrl}/#temple`,
    name: 'ISKCON Asansol - Sri Sri Jagannath Temple',
    url: baseUrl,
    parentOrganization: {
      '@id': `${baseUrl}/#organization`
    },
    image: `${baseUrl}/images/jagannath_deity.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'NH2 Bye-Pass, Garui',
      addressLocality: 'Asansol',
      addressRegion: 'West Bengal',
      postalCode: '713341',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.6845', 
      longitude: '86.9535'
    },
    telephone: '+91-94333-20314',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '04:30',
        closes: '13:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '16:00',
        closes: '20:30'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
