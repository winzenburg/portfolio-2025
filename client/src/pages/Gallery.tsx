import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import PageHero from "@/components/PageHero";
import FactRow, { type Fact } from "@/components/FactRow";
import Reveal from "@/components/Reveal";
import SiteLayout from "@/components/SiteLayout";
import { Section, SectionHeading, SectionTitle } from "@/components/Section";

interface Illustration {
  name: string;
  file: string;
  category: string;
}

const ALL_CATEGORIES = "All";

// All illustrations with cleaned-up names
const illustrations: Illustration[] = [
  { name: "AI as Co-Architect 1", file: "ryanwinzenburg_76877_AI_as_Co-Architect_of_the_Future_Concept_a4776f28-6708-40a2-b432-9f81f66a70da_1.webp", category: "AI Concepts" },
  { name: "AI as Co-Architect 2", file: "ryanwinzenburg_76877_AI_as_Co-Architect_of_the_Future_Concept_a4776f28-6708-40a2-b432-9f81f66a70da_2.webp", category: "AI Concepts" },
  { name: "AI as Co-Architect 3", file: "ryanwinzenburg_76877_AI_as_Co-Architect_of_the_Future_Concept_a4776f28-6708-40a2-b432-9f81f66a70da_3.webp", category: "AI Concepts" },
  { name: "AI Market Validation 1", file: "ryanwinzenburg_76877_AI-Powered_Market_Validation_Finding_Und_63aea9b0-821e-422e-8703-06510e5b99c6_0.webp", category: "Strategy" },
  { name: "AI Market Validation 2", file: "ryanwinzenburg_76877_AI-Powered_Market_Validation_Finding_Und_63aea9b0-821e-422e-8703-06510e5b99c6_3.webp", category: "Strategy" },
  { name: "Audience-First GTM 1", file: "ryanwinzenburg_76877_Audience-First_Go-to-Market_Strategy_Bui_97fd1193-cfc1-42ff-b2b8-c2cf6934374b_1.webp", category: "Strategy" },
  { name: "Audience-First GTM 2", file: "ryanwinzenburg_76877_Audience-First_Go-to-Market_Strategy_Bui_97fd1193-cfc1-42ff-b2b8-c2cf6934374b_3.webp", category: "Strategy" },
  { name: "Conceptual Architecture 1", file: "ryanwinzenburg_76877_Conceptual_architectural_illustration_re_9a415892-2583-4be1-9fd2-6e2a1304dff7_0.webp", category: "Architecture" },
  { name: "Conceptual Architecture 2", file: "ryanwinzenburg_76877_Conceptual_architectural_illustration_re_9a415892-2583-4be1-9fd2-6e2a1304dff7_2.webp", category: "Architecture" },
  { name: "Conceptual Architecture 3", file: "ryanwinzenburg_76877_Conceptual_architectural_illustration_re_9a415892-2583-4be1-9fd2-6e2a1304dff7_3.webp", category: "Architecture" },
  { name: "Editorial Architecture 1", file: "ryanwinzenburg_76877_Editorial_architectural_illustration_sym_8d4bcf2f-ed38-4db9-8038-4099cefd73e3_1.webp", category: "Architecture" },
  { name: "Editorial Architecture 2", file: "ryanwinzenburg_76877_Editorial_architectural_illustration_sym_8d4bcf2f-ed38-4db9-8038-4099cefd73e3_2.webp", category: "Architecture" },
  { name: "Hand-Drawn Conceptual 1", file: "ryanwinzenburg_76877_Hand-drawn_conceptual_illustration_of_a__bc53ebd6-2f00-44c1-bd8c-cfdaa536e489_0.webp", category: "Conceptual" },
  { name: "Hand-Drawn Conceptual 2", file: "ryanwinzenburg_76877_Hand-drawn_conceptual_illustration_of_a__bc53ebd6-2f00-44c1-bd8c-cfdaa536e489_1.webp", category: "Conceptual" },
  { name: "Hand-Drawn Conceptual 3", file: "ryanwinzenburg_76877_Hand-drawn_conceptual_illustration_of_a__bc53ebd6-2f00-44c1-bd8c-cfdaa536e489_3.webp", category: "Conceptual" },
  { name: "Enterprise Design System 1", file: "ryanwinzenburg_76877_How_I_Built_an_Enterprise_Design_System__1faf1ceb-0fb0-4c2d-8f5d-ef935e8c5031_0 (1).webp", category: "Design Systems" },
  { name: "Enterprise Design System 2", file: "ryanwinzenburg_76877_How_I_Built_an_Enterprise_Design_System__1faf1ceb-0fb0-4c2d-8f5d-ef935e8c5031_3.webp", category: "Design Systems" },
  { name: "Human-Machine Collaboration 1", file: "ryanwinzenburg_76877_Human__Machine_Collaboration_Playful_arc_a0abde8c-612c-4196-878f-0cda007cf728_1.webp", category: "AI Concepts" },
  { name: "Human-Machine Collaboration 2", file: "ryanwinzenburg_76877_Human__Machine_Collaboration_Playful_arc_a0abde8c-612c-4196-878f-0cda007cf728_2.webp", category: "AI Concepts" },
  { name: "Human-Machine Collaboration 3", file: "ryanwinzenburg_76877_Human__Machine_Collaboration_Playful_arc_a0abde8c-612c-4196-878f-0cda007cf728_3.webp", category: "AI Concepts" },
  { name: "Monetization Strategy 1", file: "ryanwinzenburg_76877_Monetization_Strategy_Generating_Revenue_8664858e-3ab5-4507-b53e-228b2638d5ab_2.webp", category: "Strategy" },
  { name: "Monetization Strategy 2", file: "ryanwinzenburg_76877_Monetization_Strategy_Generating_Revenue_8664858e-3ab5-4507-b53e-228b2638d5ab_3.webp", category: "Strategy" },
  { name: "Playful Architecture 1", file: "ryanwinzenburg_76877_Playful_architectural_illustration_repre_c8eafff5-fcbd-49d1-ad0b-a5f848f52e11_0 (1).webp", category: "Architecture" },
  { name: "Playful Architecture 2", file: "ryanwinzenburg_76877_Playful_architectural_illustration_repre_c8eafff5-fcbd-49d1-ad0b-a5f848f52e11_1.webp", category: "Architecture" },
  { name: "Playful Architecture 3", file: "ryanwinzenburg_76877_Playful_architectural_illustration_repre_c8eafff5-fcbd-49d1-ad0b-a5f848f52e11_2.webp", category: "Architecture" },
  { name: "Playful Symbolic Architecture 1", file: "ryanwinzenburg_76877_Playful_architectural_illustration_symbo_3cc3ec21-c9f6-4c59-853a-522746aca71a_2.webp", category: "Architecture" },
  { name: "Playful Symbolic Architecture 2", file: "ryanwinzenburg_76877_Playful_architectural_illustration_symbo_3cc3ec21-c9f6-4c59-853a-522746aca71a_3 (1).webp", category: "Architecture" },
  { name: "Scaling Portfolio 1", file: "ryanwinzenburg_76877_Scaling_Strategy_Building_a_Portfolio_of_162b7154-f579-4b04-b78e-fa8aff7aa652_2.webp", category: "Strategy" },
  { name: "Scaling Portfolio 2", file: "ryanwinzenburg_76877_Scaling_Strategy_Building_a_Portfolio_of_162b7154-f579-4b04-b78e-fa8aff7aa652_3.webp", category: "Strategy" },
  { name: "Scaling Systems", file: "ryanwinzenburg_76877_Scaling_Systems_Intelligently_Stacked_ho_94f1e856-9506-42f5-987c-1f1a70b8b384_3.webp", category: "Architecture" },
  { name: "AI Design Tech Stack 1", file: "ryanwinzenburg_76877_The_AI-Powered_Design_Tech_Stack_My_Exac_75a50a7f-bcca-49a5-b870-2b4134110917_0.webp", category: "AI Concepts" },
  { name: "AI Design Tech Stack 2", file: "ryanwinzenburg_76877_The_AI-Powered_Design_Tech_Stack_My_Exac_75a50a7f-bcca-49a5-b870-2b4134110917_3.webp", category: "AI Concepts" },
  { name: "MVP Strategy 1", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_0.webp", category: "Strategy" },
  { name: "MVP Strategy 2", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_1.webp", category: "Strategy" },
  { name: "MVP Strategy 3", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_2.webp", category: "Strategy" },
  { name: "MVP Strategy 4", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_3.webp", category: "Strategy" },
  { name: "Design Systems Fail 1", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_dd03af91-3c52-45d9-9f67-c98bb4b38cf6_0.webp", category: "Design Systems" },
  { name: "Design Systems Fail 2", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_dd03af91-3c52-45d9-9f67-c98bb4b38cf6_1.webp", category: "Design Systems" },
  { name: "Design Systems Fail 3", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_e0eacb79-dbbf-4e1d-9110-e590de2bf446_2.webp", category: "Design Systems" },
  { name: "Design Systems Fail 4", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_e0eacb79-dbbf-4e1d-9110-e590de2bf446_3.webp", category: "Design Systems" },
  { name: "Design Systems Solutions", file: "ryanwinzenburg_76877_Why_Most_Design_Systems_Fail_And_How_to__243e40d9-678a-4bbc-b5b2-e06b303634eb_2.webp", category: "Design Systems" },
];

const categories: string[] = [
  ALL_CATEGORIES,
  ...Array.from(new Set(illustrations.map((item) => item.category))),
];

const heroFacts: Fact[] = [
  { label: "Illustrations", value: `${String(illustrations.length)} in the set` },
  { label: "Categories", value: String(categories.length - 1) },
  { label: "Made for", value: "Articles and product storytelling" },
  { label: "Style", value: "Hand-drawn, editorial" },
];

function filterPillClass(active: boolean): string {
  return active
    ? "rounded-full border border-primary/60 bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary transition-colors"
    : "rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-primary/50 hover:text-white";
}

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const filteredIllustrations = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return illustrations.filter((illustration) => {
      const matchesSearch =
        query.length === 0 || illustration.name.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategory === ALL_CATEGORIES ||
        illustration.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const isFiltered =
    searchTerm.trim().length > 0 || selectedCategory !== ALL_CATEGORIES;

  function resetFilters(): void {
    setSearchTerm("");
    setSelectedCategory(ALL_CATEGORIES);
  }

  return (
    <SiteLayout currentPage="gallery">
      <PageSeo
        title="Illustration Gallery | Ryan Winzenburg"
        description="Selected editorial and conceptual illustrations created for articles and product storytelling."
        path="/gallery"
        ogImage="/images/articles-hero.webp"
      />

      <PageHero
        titleId="gallery-hero-title"
        eyebrow="Gallery"
        media={{
          // The gallery fronts itself with one of its own pieces rather than
          // borrowing the Articles hero art.
          src: "/images/gallery/ryanwinzenburg_76877_Editorial_architectural_illustration_sym_8d4bcf2f-ed38-4db9-8038-4099cefd73e3_1.webp",
          position: "object-center",
        }}
        title="Illustration library"
        lede={
          <>
            Custom hand-drawn architectural and conceptual illustrations created
            for the portfolio. The recurring themes are AI collaboration,
            strategic architecture, and systems thinking.
          </>
        }
        actions={
          <Button size="lg" variant="outline" asChild>
            <a href="#library">Browse the set</a>
          </Button>
        }
        meta={<FactRow facts={heroFacts} />}
      />

      <Section id="library" labelledBy="library-heading">
        <SectionHeading
          id="library-heading"
          eyebrow="Browse"
          title="Filter by theme, or search by name"
          lede="Every image here was drawn for a specific article or case study on this site."
        />

        <div className="flex flex-col gap-6 border-y border-border/60 py-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:w-80">
            <label
              htmlFor="gallery-search"
              className="mb-2 block text-xs uppercase tracking-[0.16em] text-slate-400"
            >
              Search by name
            </label>
            <input
              id="gallery-search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Design systems, MVP, architecture…"
              className="w-full rounded-lg border border-slate-600 bg-slate-900/60 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 outline-none transition-colors focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/50"
            />
          </div>

          <div>
            <p
              id="gallery-filter-label"
              className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400"
            >
              Category
            </p>
            <div
              role="group"
              aria-labelledby="gallery-filter-label"
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedCategory(category)}
                    className={filterPillClass(active)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p aria-live="polite" className="mt-6 text-sm text-slate-400">
          Showing {filteredIllustrations.length} of {illustrations.length}{" "}
          illustrations
        </p>

        {filteredIllustrations.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredIllustrations.map((illustration, index) => (
              <li key={illustration.file}>
                <Reveal delay={Math.min(index, 5) * 70} className="h-full">
                  <figure className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-background/40 transition-colors hover:border-primary/50 hover:bg-background/70">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={`/images/gallery/${illustration.file}`}
                        alt={`${illustration.name}, ${illustration.category.toLowerCase()} illustration`}
                        className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="flex flex-1 flex-col gap-1 border-t border-border/60 p-5">
                      <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        {illustration.category}
                      </span>
                      <span className="font-semibold leading-snug text-slate-100">
                        {illustration.name}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-xl border border-border/60 bg-background/40 p-10 text-center">
            <h3 className="text-lg font-semibold text-white">
              Nothing matches that yet
            </h3>
            <p className="mx-auto mt-2 max-w-md leading-relaxed text-slate-300">
              Try a shorter search term, or clear the filters to see all{" "}
              {illustrations.length} illustrations.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-6"
              onClick={resetFilters}
              disabled={!isFiltered}
            >
              Clear filters
            </Button>
          </div>
        )}
      </Section>

      <Section tone="muted" compact labelledBy="gallery-closing-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionTitle
              id="gallery-closing-heading"
              className="text-2xl md:text-3xl"
            >
              These were drawn to carry an argument
            </SectionTitle>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
              Each one belongs to a piece of writing or a case study. The
              writing is where the reasoning lives.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button variant="outline" asChild>
              <Link href="/articles">Read the articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/work">See the case studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
