import { ArrowLeft } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

const IMG = "/images/articles/interface-problem";

function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-lg border border-slate-800"
      />
      <figcaption className="mt-3 text-sm text-slate-400 italic text-center leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function TheInterfaceProblem() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ResponsiveNav currentPage="articles" />

      <Helmet>
        <title>The Interface Problem Nobody Is Talking About | Ryan Winzenburg</title>
        <meta
          name="description"
          content="Enterprise AI adoption keeps stalling at the prompt box. Nine interface patterns from Canva, Notion, Glean, Abridge, and others that work for non-technical users."
        />
        <meta property="og:title" content="The Interface Problem Nobody Is Talking About" />
        <meta
          property="og:description"
          content="Enterprise AI adoption keeps stalling at the prompt box. Nine interface patterns that work for non-technical users."
        />
        <meta property="og:url" content="https://winzenburg.com/articles/interface-problem-ai-ux" />
        <meta property="og:image" content="https://winzenburg.com/images/articles/interface-problem-hero.png" />
        <link rel="canonical" href="https://winzenburg.com/articles/interface-problem-ai-ux" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The Interface Problem Nobody Is Talking About",
          description:
            "Enterprise AI adoption keeps stalling at the prompt box. Nine interface patterns that work for non-technical users.",
          author: { "@type": "Person", name: "Ryan Winzenburg", url: "https://winzenburg.com" },
          datePublished: "2026-06-03",
          url: "https://winzenburg.com/articles/interface-problem-ai-ux",
          image: "https://winzenburg.com/images/articles/interface-problem-hero.png",
        })}</script>
      </Helmet>

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/articles/interface-problem-hero.png"
              alt="The Interface Problem Nobody Is Talking About"
              className="w-full h-auto"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
            <span>June 3, 2026</span>
            <span>•</span>
            <span>16 min read</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Interface Problem Nobody Is Talking About
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              We built the most powerful AI tools in history. Then we handed them to people who have no idea what to type.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_blockquote]:my-8 [&_blockquote:last-child]:mb-0">

            <ArticleFigure
              src={`${IMG}/canva-homepage.png`}
              alt="Canva homepage with design actions that hide AI complexity behind familiar creative tasks"
              caption="Canva: AI is in the product, but the user is just designing."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              The people who need these tools most — office managers, claims adjusters, social workers, small business owners — are staring at a blinking cursor. A lot of them have already stopped trying. That's a design failure, not a model failure, and our industry has been slow to own it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The blank box problem
            </h2>

            <ArticleFigure
              src={`${IMG}/perplexity-answer.jpg`}
              alt="Perplexity AI answer with numbered citations and a plain-language response"
              caption="Perplexity replaces the empty prompt with a structured answer you can scan and trust."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              A company buys an AI platform, rolls it out, runs training, sends the tips email, and watches adoption flatline. The model usually works fine. The interface is a text box and a cursor. For designers, PMs, and engineers, that's an invitation — we know what to ask. For a dental office manager or a nonprofit program director, it's a wall. They don't know what the system can do, what happens when they hit enter, or whether they'll have to explain the result to their boss.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              We built that box for ourselves. I've spent the last couple of years looking at products that get past it and products that don't. Nine patterns keep showing up.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Nine patterns that hold up in the field
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Outcome-first language
            </h3>

            <ArticleFigure
              src={`${IMG}/notion-ai-inline.png`}
              alt="Notion AI inline menu with Improve writing, Fix spelling, Make longer, and Change tone options"
              caption="Notion labels actions by what you get, not what the model is doing."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Most teams describe the machine: "IVR Flow #3: RUNNING. Intent classification active." The better version describes the user's world: "Your appointment line is active. Handling calls automatically." Same backend, different copy — and the second one only works if every label, status, and notification is written from the user's job, not the engineering diagram. We slip into system-speak constantly. If a non-technical user can't read a line of UI and know what it means for their afternoon, rewrite it.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Approve before action
            </h3>

            <ArticleFigure
              src={`${IMG}/claude-computer-use.webp`}
              alt="Claude computer use preparing a calendar action for user confirmation"
              caption="Claude shows the planned action and waits for approval before executing."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Non-technical users often aren't blocked by capability. They're blocked by not knowing what the AI will do next. The architecture that fixes that: draft the email, book the slot, queue the message — then wait for explicit approval before anything runs. Trust builds in repetition. The first approved appointment confirmation is nervous; the tenth is routine. Let people reject an action with a reason ("I'd rather call this patient myself") so the system can learn, not just log a denial.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              The setup interview
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Enterprise onboarding is still mostly a form you fill out before you understand why the fields matter. Replace it with a short conversation: preferences, context, how you actually work. "When you review a contract, what do you look at first?" beats "select jurisdiction from the dropdown." The interview configures the system and teaches the user what the product can do — without a manual. We already run good intakes in discovery; we rarely run them at signup.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Show the work in plain English
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              When an agent is searching records or checking calendars, people need to see progress without reading API logs. "Checking your calendar for the next seven days… found three open slots… sending confirmation to the patient" beats "Processing…" Keep a plain summary visible; put routing scores and classification detail behind a disclosure for the few who want it. Progressive disclosure isn't new — we just haven't applied it consistently to agent transparency.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Plain-language output first
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Models emit intent labels, confidence scores, entity tags. Helpful in a debug view. Useless on a call log a front desk manager has to act on. Lead with something like: "Maria called to reschedule her cleaning. She's flexible on timing, prefers mornings, has been a patient for twelve years." Put the structured fields behind "show system detail." Write for whoever has to do the next human step.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Permissions the user already has
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              The assistant should only reach what the logged-in user can reach. That's table-stakes security, but it's also UX: the AI isn't a backdoor, it's a faster version of the same role. Say that on the screen where work happens, not only in the privacy policy. It costs little and changes how willing people are to try the tool.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Delegate like a colleague
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Frame the interaction as delegation, not configuration: "Handle appointment confirmations for the next two days," "Flag calls where someone mentioned pain," "Draft a reply to this billing complaint." People already know how to give instructions to another person; the trust model and definition of "done" are familiar. Get the metaphor right before you polish the chrome.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Toggle-on workflows
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              The worst moment is the first one, before anything has worked. Pre-built domain workflows — appointment reminders on, emergency calls routed to on-call, Friday billing summaries to the practice manager — let someone flip a switch instead of inventing a prompt. Ship a win before you ask for setup depth. Configuration can come after trust.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Explain the boundaries up front
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Before someone touches the product, three minutes of plain conversation: what runs on its own, what always asks permission, what it will never do. "Appointment calls get handled; billing disputes get flagged for you." Skip that and you buy months of support tickets and adoption charts nobody can explain. Teaching the mental model is part of the product, not onboarding fluff.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Where these patterns show up
            </h2>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Canva
            </h3>

            <ArticleFigure
              src={`${IMG}/canva-homepage.png`}
              alt="Canva design canvas with embedded AI tools"
              caption="No separate AI mode — expand an image, resize for Instagram, improve copy from actions you already know."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Canva puts AI inside tasks people already understand: expand a photo, reflow a layout for Instagram, tighten copy from a highlight menu. The mental model stays "I'm making a design," not "I'm operating an AI tool." That's outcome-first language and toggle workflows at consumer scale.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Duolingo
            </h3>

            <ArticleFigure
              src={`${IMG}/duolingo-max.jpg`}
              alt="Duolingo Max AI roleplay conversation"
              caption="Max adjusts tone and pacing based on how the session is going."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Duolingo Max changes how it coaches depending on whether you're flying through a lesson or stuck. Enterprise software rarely does that — same error copy for a frustrated user and a curious one. If someone has rejected three AI suggestions in a row, the UI should notice.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Khan Academy (Khanmigo)
            </h3>

            <ArticleFigure
              src={`${IMG}/khanmigo-tutor.png`}
              alt="Khanmigo tutor responding with a guiding question"
              caption="Khanmigo answers a question with a question — on purpose."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Khanmigo won't hand over the solution. It asks what you've tried, what you already know, and keeps guiding. That choice matters anywhere the goal is judgment, not just completion. Capability-building and dependency-building need different interfaces; most teams haven't picked which they're building.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Glean
            </h3>

            <ArticleFigure
              src={`${IMG}/glean-assistant.webp`}
              alt="Glean surfacing documents and people relevant to the user"
              caption="Glean pushes context before you search."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Most assistants wait for a question. Glean surfaces weekend changes against your projects when you open the laptop Monday. Proactive AI lives or dies on calibration — too much feels surveillance, too little is search with extra steps — and nobody has nailed the middle yet.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Salesforce Agentforce
            </h3>

            <ArticleFigure
              src={`${IMG}/salesforce-agentforce.png`}
              alt="Salesforce Agentforce builder using familiar CRM components"
              caption="Agentforce renders AI output with the same components reps already use."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Agentforce renders AI answers as lead cards and action buttons, not a separate chat skin. When you introduce AI to a non-technical org, reuse the visual language they already live in. Asking them to learn a new UI and a new technology at once is a tax you don't have to collect.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              ServiceNow
            </h3>

            <ArticleFigure
              src={`${IMG}/servicenow-now-assist.png`}
              alt="ServiceNow Now Assist summarizing an incident with next steps"
              caption="Now Assist: describe the task, skip the menu tree."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Now Assist lets people say "submit a hardware request" or "show open tickets on my team" instead of hunting through menus. For users who never memorized the hierarchy, that's a real reduction in friction — and any product with deep navigation could borrow the pattern.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
              Abridge
            </h3>

            <ArticleFigure
              src={`${IMG}/abridge-ambient.webp`}
              alt="Abridge generating a clinical note inside Epic from the visit audio"
              caption="The note appears after the visit. The doctor didn't operate a separate AI screen."
            />

            <p className="text-slate-300 leading-relaxed mb-6">
              Abridge listens to the visit and produces the note. The clinician doesn't prompt it; the patient may not know it's running. For some jobs, the right interface is none — worth asking which steps in your product could disappear the same way.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What actually matters
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The point isn't to make AI easier to operate. It's to make the user's job easier, with AI as infrastructure. Canva wants a design finished. Glean wants an answer found. Abridge wants documentation off the doctor's plate. The office manager should think "phones are handled," not "I'm on an AI phone system."
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Start from the outcome someone needs today and work backward. Invest in trust — approval flows, readable output, visible permissions — before you stack features. Spend real time on the first three minutes of mental model. Write UI copy in the user's domain language. Hide the AI wherever you can.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              We over-built the engine. The work now is the vehicle non-technical people can actually drive.
            </p>

            <h3 className="text-xl font-bold text-white mt-12 mb-4">
              References
            </h3>

            <ol className="text-slate-400 text-sm space-y-2 list-decimal pl-6">
              <li>Smashing Magazine. "Practical Interface Patterns For AI Transparency." May 2026.</li>
              <li>Nielsen Norman Group. "State of UX 2026: Design Deeper to Differentiate." January 2026.</li>
              <li>Gothelf, J., &amp; Seiden, J. <em>Lean UX: Designing Great Products with Agile Teams.</em> O'Reilly Media, 2016.</li>
              <li>Raskin, J. <em>The Humane Interface: New Directions for Designing Interactive Systems.</em> Addison-Wesley, 2000.</li>
            </ol>

          </div>

          <NewsletterSignup />
        </div>
      </article>
    </div>
  );
}
