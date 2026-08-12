import brandFactsJson from "@shared/brand-facts.json";

export type BrandLocation = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
};

export type BrandVenture = {
  name: string;
  url: string;
  "@id": string;
  role: string;
  status: string;
  started: string;
  oneLiner: string;
  category: string;
  caseStudyUrl?: string;
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
    "@id": string;
    jobTitle: string;
    linkedInHeadline: string;
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

function isBrandVenture(value: unknown): value is BrandVenture {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const v = value as {
    name?: unknown;
    url?: unknown;
    "@id"?: unknown;
    role?: unknown;
    oneLiner?: unknown;
  };
  return (
    typeof v.name === "string" &&
    typeof v.url === "string" &&
    typeof v["@id"] === "string" &&
    typeof v.role === "string" &&
    typeof v.oneLiner === "string"
  );
}

function isBrandFacts(value: unknown): value is BrandFacts {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as {
    person?: unknown;
    organization?: unknown;
    ventures?: unknown;
  };
  if (typeof record.person !== "object" || record.person === null) {
    return false;
  }
  const person = record.person as { legalName?: unknown; "@id"?: unknown };
  if (typeof person.legalName !== "string" || person.legalName.length === 0) {
    return false;
  }
  if (typeof person["@id"] !== "string") {
    return false;
  }
  if (!Array.isArray(record.ventures) || !record.ventures.every(isBrandVenture)) {
    return false;
  }
  return true;
}

if (!isBrandFacts(brandFactsJson)) {
  throw new Error("Invalid shared/brand-facts.json shape");
}

export const brandFacts: BrandFacts = brandFactsJson;

/** Canonical Person @id — use everywhere articles/orgs cross-reference. */
export const PERSON_ID = brandFacts.person["@id"];
export const ORGANIZATION_ID = "https://winzenburg.com/#organization";

export function ventureId(name: string): string | undefined {
  return brandFacts.ventures.find((v) => v.name === name)?.["@id"];
}
