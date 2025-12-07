import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ResponsiveNav from "@/components/ResponsiveNav";

// All illustrations with cleaned-up names
const illustrations = [
  { name: "AI as Co-Architect 1", file: "ryanwinzenburg_76877_AI_as_Co-Architect_of_the_Future_Concept_a4776f28-6708-40a2-b432-9f81f66a70da_1.png", category: "AI Concepts" },
  { name: "AI as Co-Architect 2", file: "ryanwinzenburg_76877_AI_as_Co-Architect_of_the_Future_Concept_a4776f28-6708-40a2-b432-9f81f66a70da_2.png", category: "AI Concepts" },
  { name: "AI as Co-Architect 3", file: "ryanwinzenburg_76877_AI_as_Co-Architect_of_the_Future_Concept_a4776f28-6708-40a2-b432-9f81f66a70da_3.png", category: "AI Concepts" },
  { name: "AI Market Validation 1", file: "ryanwinzenburg_76877_AI-Powered_Market_Validation_Finding_Und_63aea9b0-821e-422e-8703-06510e5b99c6_0.png", category: "Strategy" },
  { name: "AI Market Validation 2", file: "ryanwinzenburg_76877_AI-Powered_Market_Validation_Finding_Und_63aea9b0-821e-422e-8703-06510e5b99c6_3.png", category: "Strategy" },
  { name: "Audience-First GTM 1", file: "ryanwinzenburg_76877_Audience-First_Go-to-Market_Strategy_Bui_97fd1193-cfc1-42ff-b2b8-c2cf6934374b_1.png", category: "Strategy" },
  { name: "Audience-First GTM 2", file: "ryanwinzenburg_76877_Audience-First_Go-to-Market_Strategy_Bui_97fd1193-cfc1-42ff-b2b8-c2cf6934374b_3.png", category: "Strategy" },
  { name: "Conceptual Architecture 1", file: "ryanwinzenburg_76877_Conceptual_architectural_illustration_re_9a415892-2583-4be1-9fd2-6e2a1304dff7_0.png", category: "Architecture" },
  { name: "Conceptual Architecture 2", file: "ryanwinzenburg_76877_Conceptual_architectural_illustration_re_9a415892-2583-4be1-9fd2-6e2a1304dff7_2.png", category: "Architecture" },
  { name: "Conceptual Architecture 3", file: "ryanwinzenburg_76877_Conceptual_architectural_illustration_re_9a415892-2583-4be1-9fd2-6e2a1304dff7_3.png", category: "Architecture" },
  { name: "Editorial Architecture 1", file: "ryanwinzenburg_76877_Editorial_architectural_illustration_sym_8d4bcf2f-ed38-4db9-8038-4099cefd73e3_1.png", category: "Architecture" },
  { name: "Editorial Architecture 2", file: "ryanwinzenburg_76877_Editorial_architectural_illustration_sym_8d4bcf2f-ed38-4db9-8038-4099cefd73e3_2.png", category: "Architecture" },
  { name: "Hand-Drawn Conceptual 1", file: "ryanwinzenburg_76877_Hand-drawn_conceptual_illustration_of_a__bc53ebd6-2f00-44c1-bd8c-cfdaa536e489_0.png", category: "Conceptual" },
  { name: "Hand-Drawn Conceptual 2", file: "ryanwinzenburg_76877_Hand-drawn_conceptual_illustration_of_a__bc53ebd6-2f00-44c1-bd8c-cfdaa536e489_1.png", category: "Conceptual" },
  { name: "Hand-Drawn Conceptual 3", file: "ryanwinzenburg_76877_Hand-drawn_conceptual_illustration_of_a__bc53ebd6-2f00-44c1-bd8c-cfdaa536e489_3.png", category: "Conceptual" },
  { name: "Enterprise Design System 1", file: "ryanwinzenburg_76877_How_I_Built_an_Enterprise_Design_System__1faf1ceb-0fb0-4c2d-8f5d-ef935e8c5031_0 (1).png", category: "Design Systems" },
  { name: "Enterprise Design System 2", file: "ryanwinzenburg_76877_How_I_Built_an_Enterprise_Design_System__1faf1ceb-0fb0-4c2d-8f5d-ef935e8c5031_3.png", category: "Design Systems" },
  { name: "Human-Machine Collaboration 1", file: "ryanwinzenburg_76877_Human__Machine_Collaboration_Playful_arc_a0abde8c-612c-4196-878f-0cda007cf728_1.png", category: "AI Concepts" },
  { name: "Human-Machine Collaboration 2", file: "ryanwinzenburg_76877_Human__Machine_Collaboration_Playful_arc_a0abde8c-612c-4196-878f-0cda007cf728_2.png", category: "AI Concepts" },
  { name: "Human-Machine Collaboration 3", file: "ryanwinzenburg_76877_Human__Machine_Collaboration_Playful_arc_a0abde8c-612c-4196-878f-0cda007cf728_3.png", category: "AI Concepts" },
  { name: "Monetization Strategy 1", file: "ryanwinzenburg_76877_Monetization_Strategy_Generating_Revenue_8664858e-3ab5-4507-b53e-228b2638d5ab_2.png", category: "Strategy" },
  { name: "Monetization Strategy 2", file: "ryanwinzenburg_76877_Monetization_Strategy_Generating_Revenue_8664858e-3ab5-4507-b53e-228b2638d5ab_3.png", category: "Strategy" },
  { name: "Playful Architecture 1", file: "ryanwinzenburg_76877_Playful_architectural_illustration_repre_c8eafff5-fcbd-49d1-ad0b-a5f848f52e11_0 (1).png", category: "Architecture" },
  { name: "Playful Architecture 2", file: "ryanwinzenburg_76877_Playful_architectural_illustration_repre_c8eafff5-fcbd-49d1-ad0b-a5f848f52e11_1.png", category: "Architecture" },
  { name: "Playful Architecture 3", file: "ryanwinzenburg_76877_Playful_architectural_illustration_repre_c8eafff5-fcbd-49d1-ad0b-a5f848f52e11_2.png", category: "Architecture" },
  { name: "Playful Symbolic Architecture 1", file: "ryanwinzenburg_76877_Playful_architectural_illustration_symbo_3cc3ec21-c9f6-4c59-853a-522746aca71a_2.png", category: "Architecture" },
  { name: "Playful Symbolic Architecture 2", file: "ryanwinzenburg_76877_Playful_architectural_illustration_symbo_3cc3ec21-c9f6-4c59-853a-522746aca71a_3 (1).png", category: "Architecture" },
  { name: "Scaling Portfolio 1", file: "ryanwinzenburg_76877_Scaling_Strategy_Building_a_Portfolio_of_162b7154-f579-4b04-b78e-fa8aff7aa652_2.png", category: "Strategy" },
  { name: "Scaling Portfolio 2", file: "ryanwinzenburg_76877_Scaling_Strategy_Building_a_Portfolio_of_162b7154-f579-4b04-b78e-fa8aff7aa652_3.png", category: "Strategy" },
  { name: "Scaling Systems", file: "ryanwinzenburg_76877_Scaling_Systems_Intelligently_Stacked_ho_94f1e856-9506-42f5-987c-1f1a70b8b384_3.png", category: "Architecture" },
  { name: "AI Design Tech Stack 1", file: "ryanwinzenburg_76877_The_AI-Powered_Design_Tech_Stack_My_Exac_75a50a7f-bcca-49a5-b870-2b4134110917_0.png", category: "AI Concepts" },
  { name: "AI Design Tech Stack 2", file: "ryanwinzenburg_76877_The_AI-Powered_Design_Tech_Stack_My_Exac_75a50a7f-bcca-49a5-b870-2b4134110917_3.png", category: "AI Concepts" },
  { name: "MVP Strategy 1", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_0.png", category: "Strategy" },
  { name: "MVP Strategy 2", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_1.png", category: "Strategy" },
  { name: "MVP Strategy 3", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_2.png", category: "Strategy" },
  { name: "MVP Strategy 4", file: "ryanwinzenburg_76877_The_MVP_Strategy_Launching_Products_That_5218dc6f-01d2-4948-bff4-f7950c2a1b77_3.png", category: "Strategy" },
  { name: "Design Systems Fail 1", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_dd03af91-3c52-45d9-9f67-c98bb4b38cf6_0.png", category: "Design Systems" },
  { name: "Design Systems Fail 2", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_dd03af91-3c52-45d9-9f67-c98bb4b38cf6_1.png", category: "Design Systems" },
  { name: "Design Systems Fail 3", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_e0eacb79-dbbf-4e1d-9110-e590de2bf446_2.png", category: "Design Systems" },
  { name: "Design Systems Fail 4", file: "ryanwinzenburg_76877_Why_Design_Systems_Fail_Playful_architec_e0eacb79-dbbf-4e1d-9110-e590de2bf446_3.png", category: "Design Systems" },
  { name: "Design Systems Solutions", file: "ryanwinzenburg_76877_Why_Most_Design_Systems_Fail_And_How_to__243e40d9-678a-4bbc-b5b2-e06b303634eb_2.png", category: "Design Systems" },
];

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(illustrations.map(i => i.category)))];

  const filteredIllustrations = illustrations.filter(illustration => {
    const matchesSearch = illustration.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || illustration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <ResponsiveNav currentPage="gallery" />

      {/* Hero */}
      <section className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Illustration Library
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
          A collection of custom hand-drawn architectural and conceptual illustrations created for the portfolio. Each illustration represents themes of AI collaboration, strategic architecture, and systems thinking.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <Input
            type="text"
            placeholder="Search illustrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-8">
          Showing {filteredIllustrations.length} of {illustrations.length} illustrations
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIllustrations.map((illustration, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={`/images/gallery/${illustration.file}`}
                  alt={illustration.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{illustration.name}</h3>
                <div className="text-sm text-muted-foreground">{illustration.category}</div>
              </div>
            </Card>
          ))}
        </div>

        {filteredIllustrations.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No illustrations found matching your search.
          </div>
        )}
      </section>
    </div>
  );
}
