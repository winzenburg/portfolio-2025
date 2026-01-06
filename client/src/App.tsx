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
import CaseStudyKinlet from "./pages/CaseStudyKinlet";
import CaseStudyCultivate from "./pages/CaseStudyCultivate";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import Gallery from "./pages/Gallery";
import AIAugmentedWorkflow from "./pages/articles/AIAugmentedWorkflow";
import AiPoweredMarketValidation from "./pages/articles/AiPoweredMarketValidation";
import AudienceFirstGoToMarket from "./pages/articles/AudienceFirstGoToMarket";
import MVPStrategy from "./pages/articles/MVPStrategy";
import MonetizationStrategy from "./pages/articles/MonetizationStrategy";
import ScalingStrategy from "./pages/articles/ScalingStrategy";
import DesignSystem4Weeks from "./pages/articles/DesignSystem4Weeks";
import AITechStack from "./pages/articles/AITechStack";
import DesignSystemsFail from "./pages/articles/DesignSystemsFail";
import EightyPercentFasterCreativesHowWeUseGlifToBatchGenerateAssets from "./pages/articles/EightyPercentFasterCreativesHowWeUseGlifToBatchGenerateAssets";
import FromManualToAutomatedHowWeUseLindyToExecuteValidation from "./pages/articles/FromManualToAutomatedHowWeUseLindyToExecuteValidation";
import NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs from "./pages/articles/NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs";
import TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow from "./pages/articles/TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow";
import TheAiToolStackCoordinatingSevenAisWithoutChaos from "./pages/articles/TheAiToolStackCoordinatingSevenAisWithoutChaos";
import TheBrandFirstValidationDesigningIdentityBeforeCode from "./pages/articles/TheBrandFirstValidationDesigningIdentityBeforeCode";
import TheCompleteWorkflowDiscoveryToDeploymentIn2025 from "./pages/articles/TheCompleteWorkflowDiscoveryToDeploymentIn2025";
import TheDevQualityAssistantTestPlanningBeforeCode from "./pages/articles/TheDevQualityAssistantTestPlanningBeforeCode";
import TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable from "./pages/articles/TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable";
import TheGamificationThatDoesntManipulateHabitLoopsDoneRight from "./pages/articles/TheGamificationThatDoesntManipulateHabitLoopsDoneRight";
import TheHubAMetaProjectForManagingYourProductPortfolio from "./pages/articles/TheHubAMetaProjectForManagingYourProductPortfolio";
import TheHubEvolutionFromStaticDocsToDecisionDashboard from "./pages/articles/TheHubEvolutionFromStaticDocsToDecisionDashboard";
import TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality from "./pages/articles/TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality";
import TheMicroInteractionsAppleStyleMotionThatGuides from "./pages/articles/TheMicroInteractionsAppleStyleMotionThatGuides";
import TheOpenSourceVisionBuildingACommunityAroundProductCreation from "./pages/articles/TheOpenSourceVisionBuildingACommunityAroundProductCreation";
import ThePersonalizationWithPrivacyAdaptiveUxWithConsent from "./pages/articles/ThePersonalizationWithPrivacyAdaptiveUxWithConsent";
import ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue from "./pages/articles/ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue";
import TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart from "./pages/articles/TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart";
import TheResultsWhatWeVeLearnedBuildingThisSystem from "./pages/articles/TheResultsWhatWeVeLearnedBuildingThisSystem";
import TheRuleConsolidationHowWeKept40PlusRulesManageable from "./pages/articles/TheRuleConsolidationHowWeKept40PlusRulesManageable";
import TheRulesAndAgentsSystemMakingTheProcessRepeatable from "./pages/articles/TheRulesAndAgentsSystemMakingTheProcessRepeatable";
import TheSecurityAndBugGateTwoTierCodeReviewForAi from "./pages/articles/TheSecurityAndBugGateTwoTierCodeReviewForAi";
import TheSolutionADualFilterValidationFramework from "./pages/articles/TheSolutionADualFilterValidationFramework";
import TheSupabaseMcpProductionBackendsInMinutes from "./pages/articles/TheSupabaseMcpProductionBackendsInMinutes";
import TheTechnicalStackModernWebStandardsForProductCreationPlatforms from "./pages/articles/TheTechnicalStackModernWebStandardsForProductCreationPlatforms";
import BusinessOperatingSystem from "./pages/articles/BusinessOperatingSystem";
import WeeklyRhythm from "./pages/articles/WeeklyRhythm";
import RocksNotTasks from "./pages/articles/RocksNotTasks";
import DocsAsSystemOfRecord from "./pages/articles/DocsAsSystemOfRecord";
import MakerVsManager from "./pages/articles/MakerVsManager";
import AICostControl from "./pages/articles/AICostControl";
import QualityGatesForAI from "./pages/articles/QualityGatesForAI";
import DebuggingAIWorkflows from "./pages/articles/DebuggingAIWorkflows";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <WouterRouter base="/">
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/methodology" component={Methodology} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/articles" component={Articles} />
      <Route path="/articles/ai-augmented-workflow" component={AIAugmentedWorkflow} />
      <Route path="/articles/ai-powered-market-validation" component={AiPoweredMarketValidation} />
      <Route path="/articles/audience-first-go-to-market" component={AudienceFirstGoToMarket} />
      <Route path="/articles/mvp-strategy" component={MVPStrategy} />
      <Route path="/articles/monetization-strategy" component={MonetizationStrategy} />
      <Route path="/articles/scaling-strategy" component={ScalingStrategy} />
      <Route path="/articles/design-system-4-weeks" component={DesignSystem4Weeks} />
      <Route path="/articles/ai-tech-stack" component={AITechStack} />
      <Route path="/articles/design-systems-fail" component={DesignSystemsFail} />
      <Route path="/articles/glif-batch-creatives" component={EightyPercentFasterCreativesHowWeUseGlifToBatchGenerateAssets} />
      <Route path="/articles/lindy-automated-validation" component={FromManualToAutomatedHowWeUseLindyToExecuteValidation} />
      <Route path="/articles/context7-live-docs" component={NeverShipOutdatedCodeHowWeUseContext7ToQueryLiveDocs} />
      <Route path="/articles/ai-orchestration" component={TheAiOrchestrationHowToConnectMultipleAiToolsInASystematicWorkflow} />
      <Route path="/articles/ai-tool-stack" component={TheAiToolStackCoordinatingSevenAisWithoutChaos} />
      <Route path="/articles/brand-first-validation" component={TheBrandFirstValidationDesigningIdentityBeforeCode} />
      <Route path="/articles/complete-workflow-2025" component={TheCompleteWorkflowDiscoveryToDeploymentIn2025} />
      <Route path="/articles/dev-quality-assistant" component={TheDevQualityAssistantTestPlanningBeforeCode} />
      <Route path="/articles/documentation-system" component={TheDocumentationSystemMakingKnowledgeRepeatableAndAuditable} />
      <Route path="/articles/gamification-done-right" component={TheGamificationThatDoesntManipulateHabitLoopsDoneRight} />
      <Route path="/articles/the-hub" component={TheHubAMetaProjectForManagingYourProductPortfolio} />
      <Route path="/articles/hub-evolution" component={TheHubEvolutionFromStaticDocsToDecisionDashboard} />
      <Route path="/articles/kill-greenlight-ritual" component={TheKillGreenlightRitualStayingRuthlessAboutPortfolioQuality} />
      <Route path="/articles/micro-interactions" component={TheMicroInteractionsAppleStyleMotionThatGuides} />
      <Route path="/articles/open-source-vision" component={TheOpenSourceVisionBuildingACommunityAroundProductCreation} />
      <Route path="/articles/personalization-privacy" component={ThePersonalizationWithPrivacyAdaptiveUxWithConsent} />
      <Route path="/articles/portfolio-approach" component={ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue} />
      <Route path="/articles/saas-problem" component={TheProblemWhyMostSaasStartupsFailBeforeTheyEvenStart} />
      <Route path="/articles/system-results" component={TheResultsWhatWeVeLearnedBuildingThisSystem} />
      <Route path="/articles/rule-consolidation" component={TheRuleConsolidationHowWeKept40PlusRulesManageable} />
      <Route path="/articles/rules-and-agents" component={TheRulesAndAgentsSystemMakingTheProcessRepeatable} />
      <Route path="/articles/security-bug-gate" component={TheSecurityAndBugGateTwoTierCodeReviewForAi} />
      <Route path="/articles/dual-filter-validation" component={TheSolutionADualFilterValidationFramework} />
      <Route path="/articles/supabase-mcp-blueprint" component={TheSupabaseMcpProductionBackendsInMinutes} />
      <Route path="/articles/technical-stack" component={TheTechnicalStackModernWebStandardsForProductCreationPlatforms} />
      <Route path="/articles/business-operating-system" component={BusinessOperatingSystem} />
      <Route path="/articles/weekly-rhythm" component={WeeklyRhythm} />
      <Route path="/articles/rocks-not-tasks" component={RocksNotTasks} />
      <Route path="/articles/docs-as-system-of-record" component={DocsAsSystemOfRecord} />
      <Route path="/articles/maker-vs-manager" component={MakerVsManager} />
      <Route path="/articles/ai-cost-control" component={AICostControl} />
      <Route path="/articles/quality-gates-for-ai" component={QualityGatesForAI} />
      <Route path="/articles/debugging-ai-workflows" component={DebuggingAIWorkflows} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-study/saas-design-system" component={CaseStudySaas} />
      <Route path="/case-study/isc-portal" component={CaseStudyIsc} />
      <Route path="/case-study/comcast-design-system" component={CaseStudyComcast} />
      <Route path="/case-study/buildout" component={CaseStudyBuildout} />
      <Route path="/case-study/cvs-aetna" component={CaseStudyCvs} />
      <Route path="/case-study/kinlet" component={CaseStudyKinlet} />
      <Route path="/case-study/cultivate" component={CaseStudyCultivate} />
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
