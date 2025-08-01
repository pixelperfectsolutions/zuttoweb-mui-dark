import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title = "ZUTTO - Your Gateway to Premium Airport Experiences",
  description = "ZUTTO is a comprehensive solution for accessing lounge eligibility at domestic and international airports in India, eliminating confusion.",
  keywords = "airport lounge, travel, India, lounge access, premium travel, ZUTTO, airport lounge access, credit card benefits, travel companion",
  image = "https://zutto.in/heroimage.png",
  url = "https://zutto.in",
  type = "website",
  structuredData
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update canonical link
    const updateCanonicalLink = (href: string) => {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      
      canonical.setAttribute('href', href);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical URL
    updateCanonicalLink(url);

    // Add structured data if provided
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured-data', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const dynamicScript = document.querySelector('script[data-seo-structured-data]');
      if (dynamicScript) {
        dynamicScript.remove();
      }
    };
  }, [title, description, keywords, image, url, type, structuredData]);

  return null; // This component doesn't render anything
};

export default SEO;