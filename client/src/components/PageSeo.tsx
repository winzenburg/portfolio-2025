import { Helmet } from "react-helmet-async";

export type PageSeoProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_ORIGIN = "https://winzenburg.com";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/about-hero.webp`;

function absoluteUrl(path: string): string {
  if (path === "/" || path === "") {
    return `${SITE_ORIGIN}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized.replace(/\/$/, "")}`;
}

function absoluteImage(src: string | undefined): string {
  if (!src) {
    return DEFAULT_OG_IMAGE;
  }
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return `${SITE_ORIGIN}${src.startsWith("/") ? src : `/${src}`}`;
}

/**
 * Canonical page SEO tags for indexable routes (and noindex for private ones).
 * Keep paths without trailing slashes except home (`/`).
 */
export default function PageSeo({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  noIndex = false,
  jsonLd,
}: PageSeoProps) {
  const url = absoluteUrl(path);
  const image = absoluteImage(ogImage);
  const robots = noIndex ? "noindex, nofollow" : "index, follow";
  const jsonLdBlocks = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Ryan Winzenburg" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rwinzenburg" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      {jsonLdBlocks.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}

export { SITE_ORIGIN, DEFAULT_OG_IMAGE, absoluteUrl };
