
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Index from "./pages/Index";
import About from "./pages/About";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import NotFound from "./pages/NotFound";
import NoiseRemoverTool from "./pages/NoiseRemoverTool";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/:toolId" element={<ToolDetail />} />
            <Route path="/tools/noise-remover" element={<NoiseRemoverTool />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/edit-blog/:blogId" element={<CreateBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
