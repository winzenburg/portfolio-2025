import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

export default function MonetizationStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <a className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                Ryan Winzenburg
              </a>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/work">
                <a className="text-slate-300 hover:text-white transition-colors">Work</a>
              </Link>
              <Link href="/methodology">
                <a className="text-slate-300 hover:text-white transition-colors">Methodology</a>
              </Link>
              <Link href="/about">
                <a className="text-slate-300 hover:text-white transition-colors">About</a>
              </Link>
              <Link href="/services">
                <a className="text-slate-300 hover:text-white transition-colors">Services</a>
              </Link>
              <Link href="/articles">
                <a className="text-white font-semibold">Articles</a>
              </Link>
              <Link href="/contact">
                <a className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Contact
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link href="/articles">
            <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </a>
          </Link>

          {/* Hero Image */}
          <div className="mb-12 -mx-6 md:mx-0 md:rounded-lg overflow-hidden">
            <img 
              src="/images/articles/monetization-hero.png" 
              alt="Monetization Strategy" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 18, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Monetization Strategy: How to Generate Revenue from Day One
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Monetization is not an afterthought. It's a critical component of your product strategy that should be considered from the very beginning.
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              As Greg Isenberg advises, you should be thinking about how you're going to make money before you even start building your product. In this article, I'll share my framework for developing a monetization strategy that allows you to generate revenue from day one.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Modular Pricing Framework
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              One of the most effective monetization strategies is the modular pricing framework. This is about offering different pricing tiers that cater to different segments of your target audience. The goal is to provide a range of options that allow users to choose the plan that best fits their needs and budget.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              Here's how to implement a modular pricing framework:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li><strong className="text-white">Identify Your Customer Segments:</strong> Start by identifying the different segments of your target audience. What are their different needs, budgets, and willingness to pay?</li>
              <li><strong className="text-white">Create Different Tiers:</strong> Create different pricing tiers that cater to each of your customer segments. Each tier should offer a different level of features, support, and value.</li>
              <li><strong className="text-white">Offer a Free Tier (Optional):</strong> A free tier can be a powerful way to attract new users and to give them a taste of your product. However, it's important to have a clear path to conversion from the free tier to a paid plan.</li>
              <li><strong className="text-white">Price Based on Value:</strong> Your pricing should be based on the value that your product provides to your users. Don't just price based on your costs or what your competitors are charging.</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The Pre-Selling Strategy
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              The pre-selling strategy is about selling your product <em>before</em> it's even built. This is a powerful way to validate demand, generate revenue, and fund your development. It's also a great way to build a community of early adopters who are invested in your success.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              Here's how to implement a pre-selling strategy:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-3 mb-6 ml-4">
              <li><strong className="text-white">Create a Compelling Offer:</strong> Create a compelling offer for your pre-sale customers. This could be a lifetime deal, a significant discount, or some other exclusive perk.</li>
              <li><strong className="text-white">Build a Landing Page:</strong> Create a landing page that clearly communicates the value of your product and the details of your pre-sale offer.</li>
              <li><strong className="text-white">Drive Traffic to Your Landing Page:</strong> Use your go-to-market strategy to drive traffic to your landing page and to generate leads for your pre-sale.</li>
              <li><strong className="text-white">Communicate with Your Pre-Sale Customers:</strong> Keep your pre-sale customers updated on your progress and involve them in the development process. This will not only build trust but also turn them into evangelists for your product.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">
              By combining a modular pricing framework with a pre-selling strategy, you can generate revenue from day one and build a sustainable business model. This will not only provide you with the resources you need to grow but also give you the confidence to continue building a product that your customers love.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              In my final article in this series, I'll discuss how to scale your business and build a portfolio of complementary products. Stay tuned!
            </p>
          </div>

          {/* Next Article */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-400 mb-4">Next Article</p>
            <Link href="/articles/scaling-strategy">
              <a className="group">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  Scaling Strategy: How to Build a Portfolio of AI-Powered Businesses
                </h3>
                <p className="text-slate-300">
                  Learn the portfolio approach to building a complementary ecosystem of businesses powered by AI and automation.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900/50 border-t border-slate-700/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accelerate Your Product Development?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how I can help you deliver enterprise-grade UX 4-6x faster.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
              Get in Touch
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

