import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LandingPage } from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home - Default (Primary Maths Variant A) */}
          <Route path="/" element={<Index />} />
          
          {/* Main Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          
          {/* Audience Routes */}
          <Route path="/primary" element={<LandingPage variant="A" audience="primary" subject="maths" />} />
          <Route path="/highschool" element={<LandingPage variant="A" audience="highschool" subject="maths" />} />
          <Route path="/college" element={<LandingPage variant="A" audience="college" subject="maths" />} />
          
          {/* Subject Routes */}
          <Route path="/maths" element={<LandingPage variant="A" audience="primary" subject="maths" />} />
          <Route path="/english" element={<LandingPage variant="A" audience="primary" subject="english" />} />
          
          {/* A/B/C Variant Routes - Primary Maths */}
          <Route path="/primary/maths/a" element={<LandingPage variant="A" audience="primary" subject="maths" />} />
          <Route path="/primary/maths/b" element={<LandingPage variant="B" audience="primary" subject="maths" />} />
          <Route path="/primary/maths/c" element={<LandingPage variant="C" audience="primary" subject="maths" />} />
          
          {/* A/B/C Variant Routes - Primary English */}
          <Route path="/primary/english/a" element={<LandingPage variant="A" audience="primary" subject="english" />} />
          <Route path="/primary/english/b" element={<LandingPage variant="B" audience="primary" subject="english" />} />
          <Route path="/primary/english/c" element={<LandingPage variant="C" audience="primary" subject="english" />} />
          
          {/* A/B/C Variant Routes - High School Maths */}
          <Route path="/highschool/maths/a" element={<LandingPage variant="A" audience="highschool" subject="maths" />} />
          <Route path="/highschool/maths/b" element={<LandingPage variant="B" audience="highschool" subject="maths" />} />
          <Route path="/highschool/maths/c" element={<LandingPage variant="C" audience="highschool" subject="maths" />} />
          
          {/* A/B/C Variant Routes - High School English */}
          <Route path="/highschool/english/a" element={<LandingPage variant="A" audience="highschool" subject="english" />} />
          <Route path="/highschool/english/b" element={<LandingPage variant="B" audience="highschool" subject="english" />} />
          <Route path="/highschool/english/c" element={<LandingPage variant="C" audience="highschool" subject="english" />} />
          
          {/* A/B/C Variant Routes - College Maths */}
          <Route path="/college/maths/a" element={<LandingPage variant="A" audience="college" subject="maths" />} />
          <Route path="/college/maths/b" element={<LandingPage variant="B" audience="college" subject="maths" />} />
          <Route path="/college/maths/c" element={<LandingPage variant="C" audience="college" subject="maths" />} />
          
          {/* A/B/C Variant Routes - College English */}
          <Route path="/college/english/a" element={<LandingPage variant="A" audience="college" subject="english" />} />
          <Route path="/college/english/b" element={<LandingPage variant="B" audience="college" subject="english" />} />
          <Route path="/college/english/c" element={<LandingPage variant="C" audience="college" subject="english" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
