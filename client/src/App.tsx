import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Methodology from "./pages/Methodology";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudySaas from "./pages/CaseStudySaas";
import CaseStudyIsc from "./pages/CaseStudyIsc";
import CaseStudyComcast from "./pages/CaseStudyComcast";
import CaseStudyBuildout from "./pages/CaseStudyBuildout";
import CaseStudyCvs from "./pages/CaseStudyCvs";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import AIAugmentedWorkflow from "./pages/articles/AIAugmentedWorkflow";
import AIMarketValidation from "./pages/articles/AIMarketValidation";
import AudienceFirstGoToMarket from "./pages/articles/AudienceFirstGoToMarket";
import MVPStrategy from "./pages/articles/MVPStrategy";
import MonetizationStrategy from "./pages/articles/MonetizationStrategy";
import ScalingStrategy from "./pages/articles/ScalingStrategy";
import DesignSystem4Weeks from "./pages/articles/DesignSystem4Weeks";
import AITechStack from "./pages/articles/AITechStack";
import DesignSystemsFail from "./pages/articles/DesignSystemsFail";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <WouterRouter base="/portfolio-2025">
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/methodology" component={Methodology} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/articles" component={Articles} />
      <Route path="/articles/ai-augmented-workflow" component={AIAugmentedWorkflow} />
      <Route path="/articles/ai-powered-market-validation" component={AIMarketValidation} />
      <Route path="/articles/audience-first-go-to-market" component={AudienceFirstGoToMarket} />
      <Route path="/articles/mvp-strategy" component={MVPStrategy} />
      <Route path="/articles/monetization-strategy" component={MonetizationStrategy} />
      <Route path="/articles/scaling-strategy" component={ScalingStrategy} />
      <Route path="/articles/design-system-4-weeks" component={DesignSystem4Weeks} />
      <Route path="/articles/ai-tech-stack" component={AITechStack} />
      <Route path="/articles/design-systems-fail" component={DesignSystemsFail} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-study/saas-design-system" component={CaseStudySaas} />
      <Route path="/case-study/isc-portal" component={CaseStudyIsc} />
      <Route path="/case-study/comcast-design-system" component={CaseStudyComcast} />
      <Route path="/case-study/buildout" component={CaseStudyBuildout} />
      <Route path="/case-study/cvs-aetna" component={CaseStudyCvs} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
