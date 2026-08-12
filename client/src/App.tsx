import { Suspense, lazy, type ComponentType } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Methodology from "./pages/Methodology";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Unsubscribe from "./pages/Unsubscribe";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import { usePageTracking } from "./hooks/usePageTracking";
import { useArticleEngagement } from "./hooks/useArticleEngagement";

const CaseStudySaas = lazy(() => import("./pages/CaseStudySaas"));
const CaseStudyComcast = lazy(() => import("./pages/CaseStudyComcast"));
const CaseStudyBuildout = lazy(() => import("./pages/CaseStudyBuildout"));
const CaseStudyCvs = lazy(() => import("./pages/CaseStudyCvs"));
const CaseStudyKinlet = lazy(() => import("./pages/CaseStudyKinlet"));
const CaseStudyUndercurrent = lazy(() => import("./pages/CaseStudyUndercurrent"));
const CaseStudyWinzinvest = lazy(() => import("./pages/CaseStudyWinzinvest"));
const CaseStudyCultivate = lazy(() => import("./pages/CaseStudyCultivate"));

const AIAugmentedWorkflow = lazy(() => import("./pages/articles/AIAugmentedWorkflow"));
const AiPoweredMarketValidation = lazy(() => import("./pages/articles/AiPoweredMarketValidation"));
const AudienceFirstGoToMarket = lazy(() => import("./pages/articles/AudienceFirstGoToMarket"));
const MVPStrategy = lazy(() => import("./pages/articles/MVPStrategy"));
const MonetizationStrategy = lazy(() => import("./pages/articles/MonetizationStrategy"));
const ScalingStrategy = lazy(() => import("./pages/articles/ScalingStrategy"));
const DesignSystem4Weeks = lazy(() => import("./pages/articles/DesignSystem4Weeks"));
const AITechStack = lazy(() => import("./pages/articles/AITechStack"));
const DesignSystemsFail = lazy(() => import("./pages/articles/DesignSystemsFail"));
const EightyPercentFasterCreativesHowWeUseGlifToBatchGenerateAssets = lazy(
  () => import("./pages/articles/EightyPercentFasterCreativesHowWeUseGlifToBatchGenerateAssets"),
);
const FromManualToAutomatedHowWeUseLindyToExecuteValidation = lazy(
  () => import("./pages/articles/FromManualToAutomatedHowWeUseLindyToExecuteValidation"),
);
const NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs = lazy(
  () => import("./pages/articles/NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs"),
);
const TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow = lazy(
  () => import("./pages/articles/TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow"),
);
const TheAiToolStackCoordinatingSevenAisWithoutChaos = lazy(
  () => import("./pages/articles/TheAiToolStackCoordinatingSevenAisWithoutChaos"),
);
const TheBrandFirstValidationDesigningIdentityBeforeCode = lazy(
  () => import("./pages/articles/TheBrandFirstValidationDesigningIdentityBeforeCode"),
);
const TheCompleteWorkflowDiscoveryToDeploymentIn2025 = lazy(
  () => import("./pages/articles/TheCompleteWorkflowDiscoveryToDeploymentIn2025"),
);
const TheDevQualityAssistantTestPlanningBeforeCode = lazy(
  () => import("./pages/articles/TheDevQualityAssistantTestPlanningBeforeCode"),
);
const TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable = lazy(
  () => import("./pages/articles/TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable"),
);
const TheGamificationThatDoesntManipulateHabitLoopsDoneRight = lazy(
  () => import("./pages/articles/TheGamificationThatDoesntManipulateHabitLoopsDoneRight"),
);
const TheHubAMetaProjectForManagingYourProductPortfolio = lazy(
  () => import("./pages/articles/TheHubAMetaProjectForManagingYourProductPortfolio"),
);
const TheHubEvolutionFromStaticDocsToDecisionDashboard = lazy(
  () => import("./pages/articles/TheHubEvolutionFromStaticDocsToDecisionDashboard"),
);
const TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality = lazy(
  () => import("./pages/articles/TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality"),
);
const TheMicroInteractionsAppleStyleMotionThatGuides = lazy(
  () => import("./pages/articles/TheMicroInteractionsAppleStyleMotionThatGuides"),
);
const TheOpenSourceVisionBuildingACommunityAroundProductCreation = lazy(
  () => import("./pages/articles/TheOpenSourceVisionBuildingACommunityAroundProductCreation"),
);
const ThePersonalizationWithPrivacyAdaptiveUxWithConsent = lazy(
  () => import("./pages/articles/ThePersonalizationWithPrivacyAdaptiveUxWithConsent"),
);
const ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue = lazy(
  () => import("./pages/articles/ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue"),
);
const TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart = lazy(
  () => import("./pages/articles/TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart"),
);
const TheResultsWhatWeVeLearnedBuildingThisSystem = lazy(
  () => import("./pages/articles/TheResultsWhatWeVeLearnedBuildingThisSystem"),
);
const TheRuleConsolidationHowWeKept40PlusRulesManageable = lazy(
  () => import("./pages/articles/TheRuleConsolidationHowWeKept40PlusRulesManageable"),
);
const TheRulesAndAgentsSystemMakingTheProcessRepeatable = lazy(
  () => import("./pages/articles/TheRulesAndAgentsSystemMakingTheProcessRepeatable"),
);
const TheSecurityAndBugGateTwoTierCodeReviewForAi = lazy(
  () => import("./pages/articles/TheSecurityAndBugGateTwoTierCodeReviewForAi"),
);
const TheSolutionADualFilterValidationFramework = lazy(
  () => import("./pages/articles/TheSolutionADualFilterValidationFramework"),
);
const TheSupabaseMcpProductionBackendsInMinutes = lazy(
  () => import("./pages/articles/TheSupabaseMcpProductionBackendsInMinutes"),
);
const TheTechnicalStackModernWebStandardsForProductCreationPlatforms = lazy(
  () => import("./pages/articles/TheTechnicalStackModernWebStandardsForProductCreationPlatforms"),
);
const BusinessOperatingSystem = lazy(() => import("./pages/articles/BusinessOperatingSystem"));
const WeeklyRhythm = lazy(() => import("./pages/articles/WeeklyRhythm"));
const RocksNotTasks = lazy(() => import("./pages/articles/RocksNotTasks"));
const DocsAsSystemOfRecord = lazy(() => import("./pages/articles/DocsAsSystemOfRecord"));
const MakerVsManager = lazy(() => import("./pages/articles/MakerVsManager"));
const AICostControl = lazy(() => import("./pages/articles/AICostControl"));
const QualityGatesForAI = lazy(() => import("./pages/articles/QualityGatesForAI"));
const DebuggingAIWorkflows = lazy(() => import("./pages/articles/DebuggingAIWorkflows"));
const AutonomousAICoding = lazy(() => import("./pages/articles/AutonomousAICoding"));
const AICodingEconomics = lazy(() => import("./pages/articles/AICodingEconomics"));
const ChoosingAICodingMode = lazy(() => import("./pages/articles/ChoosingAICodingMode"));
const WritingPRDsForAI = lazy(() => import("./pages/articles/WritingPRDsForAI"));
const SelfValidatingAIAgents = lazy(() => import("./pages/articles/SelfValidatingAIAgents"));
const FreshContextPerIteration = lazy(() => import("./pages/articles/FreshContextPerIteration"));
const CompoundIntelligence = lazy(() => import("./pages/articles/CompoundIntelligence"));
const IntegrationDocsThatWork = lazy(() => import("./pages/articles/IntegrationDocsThatWork"));
const AskingBetterStrategicQuestions = lazy(
  () => import("./pages/articles/AskingBetterStrategicQuestions"),
);
const AIIsntAFeature = lazy(() => import("./pages/articles/AIIsntAFeature"));
const AIUxMaturityLevel3 = lazy(() => import("./pages/articles/AIUxMaturityLevel3"));
const TheInterfaceProblem = lazy(() => import("./pages/articles/TheInterfaceProblem"));
const TheAgentLayerBusinessLayer = lazy(
  () => import("./pages/articles/TheAgentLayerBusinessLayer"),
);

function PageTracker() {
  usePageTracking();
  useArticleEngagement();
  return null;
}

function RouteFallback() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-slate-400 text-sm">Loading…</div>
    </div>
  );
}

function LazyRoute({ component: Component }: { component: ComponentType }) {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Component />
    </Suspense>
  );
}

function Router() {
  // Omit base="/" — wouter joins base+href and turns "/articles" into "//articles".
  return (
    <WouterRouter>
      <PageTracker />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/methodology" component={Methodology} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/articles" component={Articles} />
        <Route path="/articles/ai-augmented-workflow">
          {() => <LazyRoute component={AIAugmentedWorkflow} />}
        </Route>
        <Route path="/articles/ai-powered-market-validation">
          {() => <LazyRoute component={AiPoweredMarketValidation} />}
        </Route>
        <Route path="/articles/audience-first-go-to-market">
          {() => <LazyRoute component={AudienceFirstGoToMarket} />}
        </Route>
        <Route path="/articles/mvp-strategy">
          {() => <LazyRoute component={MVPStrategy} />}
        </Route>
        <Route path="/articles/monetization-strategy">
          {() => <LazyRoute component={MonetizationStrategy} />}
        </Route>
        <Route path="/articles/scaling-strategy">
          {() => <LazyRoute component={ScalingStrategy} />}
        </Route>
        <Route path="/articles/design-system-4-weeks">
          {() => <LazyRoute component={DesignSystem4Weeks} />}
        </Route>
        <Route path="/articles/ai-tech-stack">
          {() => <LazyRoute component={AITechStack} />}
        </Route>
        <Route path="/articles/design-systems-fail">
          {() => <LazyRoute component={DesignSystemsFail} />}
        </Route>
        <Route path="/articles/glif-batch-creatives">
          {() => <LazyRoute component={EightyPercentFasterCreativesHowWeUseGlifToBatchGenerateAssets} />}
        </Route>
        <Route path="/articles/lindy-automated-validation">
          {() => <LazyRoute component={FromManualToAutomatedHowWeUseLindyToExecuteValidation} />}
        </Route>
        <Route path="/articles/context7-live-docs">
          {() => <LazyRoute component={NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs} />}
        </Route>
        <Route path="/articles/ai-orchestration">
          {() => <LazyRoute component={TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow} />}
        </Route>
        <Route path="/articles/ai-tool-stack">
          {() => <LazyRoute component={TheAiToolStackCoordinatingSevenAisWithoutChaos} />}
        </Route>
        <Route path="/articles/brand-first-validation">
          {() => <LazyRoute component={TheBrandFirstValidationDesigningIdentityBeforeCode} />}
        </Route>
        <Route path="/articles/complete-workflow-2025">
          {() => <LazyRoute component={TheCompleteWorkflowDiscoveryToDeploymentIn2025} />}
        </Route>
        <Route path="/articles/dev-quality-assistant">
          {() => <LazyRoute component={TheDevQualityAssistantTestPlanningBeforeCode} />}
        </Route>
        <Route path="/articles/documentation-system">
          {() => <LazyRoute component={TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable} />}
        </Route>
        <Route path="/articles/gamification-done-right">
          {() => <LazyRoute component={TheGamificationThatDoesntManipulateHabitLoopsDoneRight} />}
        </Route>
        <Route path="/articles/the-hub">
          {() => <LazyRoute component={TheHubAMetaProjectForManagingYourProductPortfolio} />}
        </Route>
        <Route path="/articles/hub-evolution">
          {() => <LazyRoute component={TheHubEvolutionFromStaticDocsToDecisionDashboard} />}
        </Route>
        <Route path="/articles/kill-greenlight-ritual">
          {() => <LazyRoute component={TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality} />}
        </Route>
        <Route path="/articles/micro-interactions">
          {() => <LazyRoute component={TheMicroInteractionsAppleStyleMotionThatGuides} />}
        </Route>
        <Route path="/articles/open-source-vision">
          {() => <LazyRoute component={TheOpenSourceVisionBuildingACommunityAroundProductCreation} />}
        </Route>
        <Route path="/articles/personalization-privacy">
          {() => <LazyRoute component={ThePersonalizationWithPrivacyAdaptiveUxWithConsent} />}
        </Route>
        <Route path="/articles/portfolio-approach">
          {() => <LazyRoute component={ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue} />}
        </Route>
        <Route path="/articles/saas-problem">
          {() => <LazyRoute component={TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart} />}
        </Route>
        <Route path="/articles/system-results">
          {() => <LazyRoute component={TheResultsWhatWeVeLearnedBuildingThisSystem} />}
        </Route>
        <Route path="/articles/rule-consolidation">
          {() => <LazyRoute component={TheRuleConsolidationHowWeKept40PlusRulesManageable} />}
        </Route>
        <Route path="/articles/rules-and-agents">
          {() => <LazyRoute component={TheRulesAndAgentsSystemMakingTheProcessRepeatable} />}
        </Route>
        <Route path="/articles/security-bug-gate">
          {() => <LazyRoute component={TheSecurityAndBugGateTwoTierCodeReviewForAi} />}
        </Route>
        <Route path="/articles/dual-filter-validation">
          {() => <LazyRoute component={TheSolutionADualFilterValidationFramework} />}
        </Route>
        <Route path="/articles/supabase-mcp-blueprint">
          {() => <LazyRoute component={TheSupabaseMcpProductionBackendsInMinutes} />}
        </Route>
        <Route path="/articles/technical-stack">
          {() => <LazyRoute component={TheTechnicalStackModernWebStandardsForProductCreationPlatforms} />}
        </Route>
        <Route path="/articles/business-operating-system">
          {() => <LazyRoute component={BusinessOperatingSystem} />}
        </Route>
        <Route path="/articles/weekly-rhythm">
          {() => <LazyRoute component={WeeklyRhythm} />}
        </Route>
        <Route path="/articles/rocks-not-tasks">
          {() => <LazyRoute component={RocksNotTasks} />}
        </Route>
        <Route path="/articles/docs-as-system-of-record">
          {() => <LazyRoute component={DocsAsSystemOfRecord} />}
        </Route>
        <Route path="/articles/maker-vs-manager">
          {() => <LazyRoute component={MakerVsManager} />}
        </Route>
        <Route path="/articles/ai-cost-control">
          {() => <LazyRoute component={AICostControl} />}
        </Route>
        <Route path="/articles/quality-gates-for-ai">
          {() => <LazyRoute component={QualityGatesForAI} />}
        </Route>
        <Route path="/articles/debugging-ai-workflows">
          {() => <LazyRoute component={DebuggingAIWorkflows} />}
        </Route>
        <Route path="/articles/autonomous-ai-coding">
          {() => <LazyRoute component={AutonomousAICoding} />}
        </Route>
        <Route path="/articles/ai-coding-economics">
          {() => <LazyRoute component={AICodingEconomics} />}
        </Route>
        <Route path="/articles/choosing-ai-coding-mode">
          {() => <LazyRoute component={ChoosingAICodingMode} />}
        </Route>
        <Route path="/articles/writing-prds-for-ai-agents">
          {() => <LazyRoute component={WritingPRDsForAI} />}
        </Route>
        <Route path="/articles/self-validating-ai-agents">
          {() => <LazyRoute component={SelfValidatingAIAgents} />}
        </Route>
        <Route path="/articles/fresh-context-per-iteration">
          {() => <LazyRoute component={FreshContextPerIteration} />}
        </Route>
        <Route path="/articles/compound-intelligence">
          {() => <LazyRoute component={CompoundIntelligence} />}
        </Route>
        <Route path="/articles/integration-docs-that-work">
          {() => <LazyRoute component={IntegrationDocsThatWork} />}
        </Route>
        <Route path="/articles/strategic-questions-ai-product-design">
          {() => <LazyRoute component={AskingBetterStrategicQuestions} />}
        </Route>
        <Route path="/articles/ai-isnt-a-feature-workflow">
          {() => <LazyRoute component={AIIsntAFeature} />}
        </Route>
        <Route path="/articles/ai-ux-maturity-level-3">
          {() => <LazyRoute component={AIUxMaturityLevel3} />}
        </Route>
        <Route path="/articles/interface-problem-ai-ux">
          {() => <LazyRoute component={TheInterfaceProblem} />}
        </Route>
        <Route path="/articles/the-agent-layer-is-becoming-the-business-layer">
          {() => <LazyRoute component={TheAgentLayerBusinessLayer} />}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/unsubscribe" component={Unsubscribe} />
        <Route path="/case-study/saas-design-system">
          {() => <LazyRoute component={CaseStudySaas} />}
        </Route>
        <Route path="/case-study/comcast-design-system">
          {() => <LazyRoute component={CaseStudyComcast} />}
        </Route>
        <Route path="/case-study/buildout">
          {() => <LazyRoute component={CaseStudyBuildout} />}
        </Route>
        <Route path="/case-study/cvs-aetna">
          {() => <LazyRoute component={CaseStudyCvs} />}
        </Route>
        <Route path="/case-study/kinlet">
          {() => <LazyRoute component={CaseStudyKinlet} />}
        </Route>
        <Route path="/case-study/undercurrent">
          {() => <LazyRoute component={CaseStudyUndercurrent} />}
        </Route>
        <Route path="/case-study/winzinvest">
          {() => <LazyRoute component={CaseStudyWinzinvest} />}
        </Route>
        <Route path="/case-study/cultivate">
          {() => <LazyRoute component={CaseStudyCultivate} />}
        </Route>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
