import brandFactsJson from "@shared/brand-facts.json";

export type BrandLocation = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
};

export type BrandVenture = {
  name: string;
  url: string;
  caseStudyUrl: string;
  role: string;
  status: string;
  started: string;
  oneLiner: string;
  category: string;
};

export type BrandFlagshipArticle = {
  title: string;
  url: string;
  note: string;
};

export type BrandFacts = {
  updated: string;
  person: {
    legalName: string;
    url: string;
    brandHubUrl: string;
    jobTitle: string;
    shortBio: string;
    location: BrandLocation;
    experienceYears: number;
    experienceSummary: string;
    roles: string[];
    knowsAbout: string[];
    sameAs: string[];
  };
  organization: {
    name: string;
    type: string;
    url: string;
    description: string;
  };
  ventures: BrandVenture[];
  flagshipArticles: BrandFlagshipArticle[];
};

function isBrandFacts(value: unknown): value is BrandFacts {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as { person?: unknown; organization?: unknown };
  if (typeof record.person !== "object" || record.person === null) {
    return false;
  }
  const person = record.person as { legalName?: unknown };
  return typeof person.legalName === "string" && person.legalName.length > 0;
}

if (!isBrandFacts(brandFactsJson)) {
  throw new Error("Invalid shared/brand-facts.json shape");
}

export const brandFacts: BrandFacts = brandFactsJson;

export const PERSON_ID = "https://winzenburg.com/#person";
export const ORGANIZATION_ID = "https://winzenburg.com/#organization";
export const WINZINVEST_ID = "https://winzenburg.com/#winzinvest";
