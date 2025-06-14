
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Implantations from "./pages/Implantations";
import About from "./pages/About";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Contact from "./pages/Contact";
import GuideDooh from "./pages/GuideDooh";
import Comparatifs from "./pages/Comparatifs";
import EtudesMarche from "./pages/EtudesMarche";
import Resources from "./pages/Resources";
import Glossaire from "./pages/Glossaire";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
      retry: (failureCount, error: any) => {
        if (error?.status === 404) return false;
        return failureCount < 2;
      }
    }
  }
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PerformanceMonitor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/implantations" element={<Implantations />} />
          <Route path="/about" element={<About />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guide-dooh" element={<GuideDooh />} />
          <Route path="/comparatifs" element={<Comparatifs />} />
          <Route path="/etudes-marche" element={<EtudesMarche />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/glossaire" element={<Glossaire />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
