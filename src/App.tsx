
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import ApplyNow from "./pages/ApplyNow";
import ProfitCalculator from "./pages/ProfitCalculator";
import FarmLayout from "./pages/FarmLayout";
import SuccessStories from "./pages/SuccessStories";
import WhoCanApply from "./pages/WhoCanApply";
import FAQ from "./pages/FAQ";
// Import commented out due to missing module
// import Impact from "./pages/Impact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Impact from "./pages/Impact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="apply" element={<ApplyNow />} />
              <Route path="calculator" element={<ProfitCalculator />} />
              <Route path="farm-layout" element={<FarmLayout />} />
              <Route path="success-stories" element={<SuccessStories />} />
              <Route path="impact" element={<Impact />} />
              <Route path="who-can-apply" element={<WhoCanApply />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
