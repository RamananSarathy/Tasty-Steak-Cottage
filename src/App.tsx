
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MenuLayout from "./components/MenuLayout";
import DrinksMenu from "./pages/menu/DrinksMenu";
import AppetizerMenu from "./pages/menu/AppetizerMenu";
import MainCourseMenu from "./pages/menu/MainCourseMenu";
import DessertMenu from "./pages/menu/DessertMenu";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<MenuLayout />}>
            <Route index element={<Navigate to="/menu/main-course" replace />} />
            <Route path="drinks" element={<DrinksMenu />} />
            <Route path="appetizers" element={<AppetizerMenu />} />
            <Route path="main-course" element={<MainCourseMenu />} />
            <Route path="desserts" element={<DessertMenu />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
