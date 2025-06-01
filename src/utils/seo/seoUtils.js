/**
 * SEO utility functions for the pottery website
 */

/**
 * Generates a canonical URL
 * @param {string} path - Path segment after the domain
 * @returns {string} Full canonical URL
 */
export const getCanonicalUrl = (path) => {
  const baseUrl = "https://kanaskraft.github.io/website";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Creates JSON-LD structured data for product
 * @param {object} product - Product data
 * @returns {object} JSON-LD structured data object
 */
export const createProductJsonLd = (product) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "KanasKraft",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: getCanonicalUrl(`/products/${product.slug}`),
    },
  };
};

/**
 * Creates JSON-LD structured data for local business
 * @returns {object} JSON-LD structured data object for the pottery studio
 */
export const createLocalBusinessJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KanasKraft Pottery Studio",
    image: "https://kanaskraft.github.io/website/images/studio.jpg",
    "@id": "https://kanaskraft.github.io/website",
    url: "https://kanaskraft.github.io/website",
    telephone: "+1-555-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Pottery Lane",
      addressLocality: "Craftsville",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "11:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/kanaskraft",
      "https://www.instagram.com/kanaskraft_pottery",
      "https://pinterest.com/kanaskraft",
    ],
  };
};

/**
 * Creates JSON-LD structured data for an article/blog post
 * @param {object} article - Article data
 * @returns {object} JSON-LD structured data object
 */
export const createArticleJsonLd = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: article.image,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "KanasKraft",
      logo: {
        "@type": "ImageObject",
        url: "https://kanaskraft.github.io/website/logo.png",
      },
    },
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getCanonicalUrl(`/blog/${article.slug}`),
    },
  };
};

/**
 * Creates meta tags for social sharing
 * @param {object} data - Page data
 * @returns {object} Meta tags for social sharing
 */
export const createSocialTags = (data) => {
  const { title, description, image, url, type = "website" } = data;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type,
      image:
        image || "https://kanaskraft.github.io/website/images/og-default.jpg",
      site_name: "KanasKraft Pottery",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image:
        image ||
        "https://kanaskraft.github.io/website/images/twitter-default.jpg",
    },
  };
};
