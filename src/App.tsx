
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import NotFound from "./pages/NotFound";
import NoiseRemoverTool from "./pages/NoiseRemoverTool";

// Create the App component as a function component
const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:toolId" element={<ToolDetail />} />
          <Route path="/tools/noise-remover" element={<NoiseRemoverTool />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
