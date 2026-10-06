import { ArrowLeft } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ArticleAuthorBio from "@/components/ArticleAuthorBio";
import ArticleFaq from "@/components/ArticleFaq";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import HeroImage from "@/components/HeroImage";

export default function MapTheWorkBeforeYouAutomate() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNav currentPage="articles" />

      <Helmet>
        <title>Map the Work Before You Automate It | Ryan Winzenburg</title>
        <meta
          name="description"
          content="AI projects stall when teams automate a process nobody has mapped. Find the real workflow, sort every step, and design the human decisions."
        />
        <meta property="og:title" content="Map the Work Before You Automate It" />
        <meta
          property="og:description"
          content="AI projects stall when teams automate a process nobody has mapped. Find the real workflow, sort every step, and design the human decisions."
        />
        <meta property="og:url" content="https://winzenburg.com/articles/map-the-work-before-you-automate-it" />
        <meta property="og:image" content="https://winzenburg.com/images/articles/map-the-work-before-you-automate-it-hero.webp" />
        <meta property="og:image:alt" content="Four surveyors in long coats plant red flags along a winding path that loops past benches and gates, while an idle conveyor machine waits at the edge of the valley." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://winzenburg.com/images/articles/map-the-work-before-you-automate-it-hero.webp" />
        <link rel="canonical" href="https://winzenburg.com/articles/map-the-work-before-you-automate-it" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Map the Work Before You Automate It",
          description: "AI projects stall when teams automate a process nobody has mapped. Find the real workflow, sort every step, and design the human decisions.",
          author: { "@type": "Person", name: "Ryan Winzenburg", url: "https://winzenburg.com" },
          datePublished: "2026-10-05",
          url: "https://winzenburg.com/articles/map-the-work-before-you-automate-it",
          image: "https://winzenburg.com/images/articles/map-the-work-before-you-automate-it-hero.webp",
        })}</script>
      </Helmet>

      <article className="pt-10 pb-16 md:pt-14">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/articles" className="inline-flex items-center gap-2 text-primary hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
          </Link>

          <div className="mb-12 rounded-lg overflow-hidden">
            <HeroImage
              src="/images/articles/map-the-work-before-you-automate-it-hero.webp"
              alt="Four surveyors in long coats plant red flags along a winding path that loops past benches and gates, while an idle conveyor machine waits at the edge of the valley."
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>October 5, 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Map the Work Before You Automate It
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              AI projects stall when teams automate a process nobody has mapped. Find the real workflow, sort every step, and design the human decisions.
            </p>
          </div>

          <div className="prose prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0">

            <p className="text-muted-foreground leading-relaxed mb-6">
              Most AI projects I see start with a tool. Someone has a license, a demo, or a mandate from leadership, and the question becomes where to point it. The workflow it's supposed to improve gets described in a sentence or two and then left alone.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              That's where things go wrong. Teams automate the process on the slide, and the process on the slide is rarely the one people run.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I recently watched an episode of Greg Isenberg's Startup Ideas Podcast with Vasuman Moza, CEO of Varick Agents, about how his team deploys agents inside large companies (<a href="https://www.youtube.com/watch?v=1a5HxU52vCQ" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80">watch it here</a>). He comes at the problem as a builder. I come at it from product experience. We end up in the same place. Most of the hard work in an AI project happens before anyone builds an agent.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              The documented process is a draft
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Every organization has a written version of how work moves. A quote gets built, reviewed, approved, sent and signed. Five tidy boxes.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Then you sit with the people doing it. The quote goes back to the start when a discount is off. Legal sends it back. Someone keeps a spreadsheet because the CRM can't handle one contract type, and now that spreadsheet holds up the whole process. The exceptions that "rarely happen" happen every week.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Moza's team finds the real process three ways: interviews with the people who do the work, data from the systems they already use, and whatever documentation exists. Each source misses something on its own. In the interviews, he says, you're trying to learn why things are done the way they are and who really decides. One line from the episode stuck with me: "Which step is theater? Which step is legitimate?"
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              That is research work. UX researchers and service designers have done it for years with contextual inquiry and service blueprints. The question has grown. We used to ask where people get stuck. Now we also have to ask which steps a machine could take over and which ones it shouldn't touch. I've written about this as a <Link href="/articles/ai-isnt-a-feature-workflow" className="text-primary underline underline-offset-4 hover:text-primary/80">workflow problem, not a feature problem</Link>. This piece is about what to do once you decide to map the work.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I've had my own version of that gap. We had AI-generated access rules that looked clean in review. The policy checked that someone had been a member of an organization. It did not check that the membership was still active. During a routine security pass, we found users could read data from organizations they had already left. On paper, the rule was "members only." In the code, it was "anyone who was ever a member." That is the kind of gap mapping is supposed to catch before anyone scales the automation.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Sort every step into four buckets
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Once you have the real workflow, every step goes into one of four buckets. Moza's team uses this sort with clients. It's simple, and it holds up.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed mb-6">

              <li><strong className="text-foreground">Delete it.</strong> Some steps exist only because of an old system, an old policy, or one person's habit. Automating them makes waste run faster.</li>

              <li><strong className="text-foreground">Turn it into rules.</strong> If the step is "when this happens, do that" with no judgment involved, write plain code or a configured rule. Rules are cheap, testable and predictable. An agent here adds cost and new ways to fail.</li>

              <li><strong className="text-foreground">Give it to an agent.</strong> Agents earn their place where judgment is needed and there's enough history to judge from. Categorizing a messy invoice line. Drafting a first-pass quote from similar past deals. Routing a request that doesn't fit a template.</li>

              <li><strong className="text-foreground">Keep it as a human decision.</strong> Approvals, payments, negotiations, and anything where a wrong call is expensive or hard to undo. These stay with a named person.</li>

            </ul>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Don't be surprised if the delete and rules buckets fill up first. Cleaning those up can help before any model is involved.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              The human decisions are a design problem
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              This is the bucket I care about most, and it usually gets the least design attention.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              When an agent does the work up to a decision, the person making that decision changes jobs. They used to build the thing. Now they review it. Reviewing well needs a different interface. They need to see what the agent did, what it was unsure about, what evidence it used, and what happens if they say no. A bare approve button with a wall of generated text behind it will get rubber-stamped within a few weeks.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A good decision point answers a handful of questions on one screen. What am I deciding? What did the system check, and what did it skip? What changed since the last version? What does it cost if I get this wrong? Who sees it if I push back?
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Those are UX questions about hierarchy, trust, error recovery and accountability. If a team puts all its effort into the agent and none into the moment a person signs off, the riskiest step in the workflow ends up as the least designed one.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              After that near miss, I stopped treating "someone will look at it" as a control. I built a two-tier review for AI-generated code: a short checklist before a commit, and a fuller gate before production. The short list forces a clear verdict, safe to commit or fix first. The fuller gate ends with a risk score and an explicit ship or no-ship call. That is a designed decision surface. It aims review where a wrong call is expensive, instead of asking someone to rubber-stamp a wall of generated text.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Put the work where people already are
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Moza's team builds agents inside the systems a company already runs on, like the CRM, the ERP and Slack, instead of asking anyone to adopt a new AI tool. Companies have spent years and a lot of money getting onto those systems. A pitch that starts with "first, switch platforms" loses the room.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              From a UX view, this is about adoption. A new surface means new logins and one more place to check. If the agent's output shows up as a record update in the CRM, and the approval arrives where the approver already works, people get the benefit without changing how they spend their day. Before designing any new AI screen, ask whether the work could land somewhere people already look. Often the new dashboard is the expensive option.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Most of the time is lost between steps
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              When people picture a slow process, they picture slow steps. Usually each step is quick. The time goes into the gaps: sitting in a queue, waiting on an approver who's out, waiting for someone to notice a handoff, coming back because a field was missing.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Michael Hammer made this point in 1990, in his Harvard Business Review article "Reengineering Work: Don't Automate, Obliterate." Writing about insurance applications at Mutual Benefit Life, he noted that most of the time went to passing information from one department to the next. He also cited another insurer's estimate that an application spent 22 days in process and was worked on for 17 minutes.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The trap hasn't changed. Make each step faster with AI and the end-to-end time may barely move, because the waiting was never inside the steps.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              So when you map a workflow, measure the gaps as well as the steps. Mark every handoff. Note how long work sits there and why. Count how often it loops back to an earlier step. Those numbers usually point to the real fix, and sometimes the fix is removing a handoff rather than adding an agent.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Where to start
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Pick one workflow that matters and that someone owns. Map how it runs today, using the people, the system data and the documents. Mark the handoffs and the waits. Sort every step into the four buckets. Write down a baseline before anyone builds anything, so you can tell later whether it worked. Then give the human decision points the same design care you give the agents.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If you're about to fund an AI build and nobody has mapped the workflow yet, that's the decision I help product leaders work through. The <Link href="/consulting" className="text-primary underline underline-offset-4 hover:text-primary/80">Consulting</Link> page explains how that works. I review fit before we book time.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-12 mb-4">
              References
            </h3>

            <ol className="text-muted-foreground text-sm space-y-2 list-decimal pl-6">
              <li>Isenberg, G. (host), with Vasuman Moza. Startup Ideas Podcast. October 2026. <a href="https://www.youtube.com/watch?v=1a5HxU52vCQ" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80">YouTube</a>.</li>
              <li>Hammer, M. "Reengineering Work: Don't Automate, Obliterate." <em>Harvard Business Review</em>, July-August 1990, pp. 104-112.</li>
            </ol>

            <ArticleFaq
              items={[
                {
                  question: "Why do AI projects stall before they scale?",
                  answer:
                    "Teams often automate the documented process, and the documented process is rarely the one people run. Exceptions, rework loops and side spreadsheets only show up when you watch the work and check the system data.",
                },
                {
                  question: "What are the four buckets for sorting workflow steps?",
                  answer:
                    "Delete the step, turn it into rules, give it to an agent, or keep it as a human decision. Rules handle steps with no judgment. Agents fit steps that need judgment and have enough history. Approvals, payments and costly calls stay with a named person.",
                },
                {
                  question: "Where does the time go in a slow process?",
                  answer:
                    "Usually between steps: queues, approvers who are out, handoffs nobody notices, and rework when a field is missing. Making each step faster with AI may barely move end-to-end time if the waiting stays.",
                },
              ]}
            />
          </div>

          <ArticleAuthorBio />
          <NewsletterSignup />
        </div>
      </article>
    </div>
  );
}
