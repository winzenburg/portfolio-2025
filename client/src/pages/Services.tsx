import ResponsiveNav from "@/components/ResponsiveNav";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNav currentPage="services" theme="light" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Strategic Engagement Models
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From VP-level strategic leadership to high-impact consulting—flexible engagement models designed for VCs transforming portfolio companies and executives building competitive advantage.
            <br />
            Choose the approach that matches your strategic objectives.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build Competitive Moats</h3>
              <p className="text-gray-600">
                4-6x velocity gains create defensible competitive advantages—extending runway 6-12 months and establishing market leadership before competitors catch up.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Board-Ready Results</h3>
              <p className="text-gray-600">
                $3M+ portfolio value per engagement. Proven at Fortune 50 and Series B-D scale. Predictable strategic outcomes, not experiments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Organizational Transformation</h3>
              <p className="text-gray-600">
                AI-native capabilities that outlast the engagement. Your team becomes permanently faster, your organization gains sustainable competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Sheet Selection */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Which Rate Sheet Is Right for You?
            </h2>
            <p className="text-xl text-gray-600">
              I offer two pricing structures optimized for different organizational types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Startup Rate Sheet */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Startup Rate Sheet
                </h3>
                <p className="text-gray-600 mb-4">
                  For well-funded startups (Series B-D)
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  Starting at $35K
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">Best for companies with:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Series B-D funding, $5M-$100M revenue</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">20-500 employees, fast decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Agile processes, modern tech stack</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Simple contracts, flexible payment terms</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <a
                  href="/portfolio-2025/winzenburg_rate_sheet_startup.pdf"
                  download
                  className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Startup Rate Sheet
                </a>
                <div className="text-sm text-gray-500 text-center">
                  Includes: Hourly ($225), Day Rate ($2,000), Projects ($35K-$200K), Retainers ($18K-$40K/mo)
                </div>
              </div>
            </div>

            {/* Enterprise Rate Sheet */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise Rate Sheet
                </h3>
                <p className="text-gray-600 mb-4">
                  For Fortune 500/1000 companies
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  Starting at $75K
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">Best for organizations with:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">1000+ employees, $100M+ revenue</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multiple stakeholders, approval layers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Compliance requirements (HIPAA, GDPR, SOC 2)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Formal procurement, MSAs, NET 30 terms</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <a
                  href="/portfolio-2025/winzenburg_rate_sheet_enterprise.pdf"
                  download
                  className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Enterprise Rate Sheet
                </a>
                <div className="text-sm text-gray-500 text-center">
                  Includes: Advisory ($300/hr), Workshops ($3,000/day), Projects ($75K-$400K+), Retainers ($35K-$80K+/mo)
                </div>
              </div>
            </div>
          </div>

          {/* Not Sure Section */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Not sure which is right for you?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Schedule a complimentary discovery call and I'll help you determine the best engagement model for your organization.
            </p>
            <a
              href="/portfolio-2025/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Discovery Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Engagement Models Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-600">
              From quick consultations to long-term strategic partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hourly Consulting</h3>
              <p className="text-gray-600 mb-4">
                Quick consultations, design critiques, and UX audits.
              </p>
              <div className="text-sm text-gray-500">
                10-hour minimum
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Day Rate</h3>
              <p className="text-gray-600 mb-4">
                Intensive workshops, design sprints, and strategy sessions.
              </p>
              <div className="text-sm text-gray-500">
                2-day minimum
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project-Based</h3>
              <p className="text-gray-600 mb-4">
                End-to-end UX strategy and design for fixed scope and timeline.
              </p>
              <div className="text-sm text-gray-500">
                2-24 weeks typical
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Retainer</h3>
              <p className="text-gray-600 mb-4">
                Ongoing strategic partnership for continuous improvement.
              </p>
              <div className="text-sm text-gray-500">
                3-6 month minimum
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Included in Every Engagement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Strategic Discovery</h3>
                <p className="text-gray-600">Understanding your users, business goals, and competitive landscape</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">UX Strategy & IA</h3>
                <p className="text-gray-600">Information architecture and strategic foundation for exceptional experiences</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">High-Fidelity Design</h3>
                <p className="text-gray-600">Production-ready designs and interactive prototypes using modern tools</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Revision Rounds</h3>
                <p className="text-gray-600">2-3 rounds of revisions to ensure we get it right</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Complete Documentation</h3>
                <p className="text-gray-600">Everything your team needs for successful implementation</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Post-Launch Support</h3>
                <p className="text-gray-600">30-60 days of support to ensure smooth implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Strategic Competitive Advantage?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're seeking VP-level strategic leadership or high-impact consulting, let's discuss opportunities that deliver board-level impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio-2025/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Explore Strategic Opportunities
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/portfolio-2025/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              View Strategic Impact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

