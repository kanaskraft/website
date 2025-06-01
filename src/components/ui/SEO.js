import React from "react";
import { Helmet } from "react-helmet";

// SEO component for consistent meta tags across all pages
const SEO = ({
  title,
  description,
  keywords,
  ogImage = "/images/pottery-studio-og.jpg",
  ogType = "website",
  canonical,
}) => {
  const siteTitle = "Kanas Kraft Pottery";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription =
    "Handcrafted pottery and ceramic art pieces with unique designs. Traditional techniques with modern aesthetics.";
  const fullDescription = description || defaultDescription;
  const defaultKeywords =
    "pottery, ceramics, handcrafted, clay art, handmade pottery, ceramic bowls, pottery gifts";
  const fullKeywords = keywords
    ? `${defaultKeywords}, ${keywords}`
    : defaultKeywords;
  const siteUrl = "https://kanaskraft.github.io/website";
  const canonicalLink = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalLink} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalLink} />

      {/* Structured Data for Rich Results */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "${siteTitle}",
            "url": "${siteUrl}",
            "description": "${defaultDescription}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${siteUrl}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
