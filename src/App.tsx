import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import CourseDetail from "./pages/CourseDetail";
import Exam from "./pages/Exam";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import CoursesBasic from "./pages/CoursesBasic";
import CoursesAdvanced from "./pages/CoursesAdvanced";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses/basic" element={<CoursesBasic />} />
            <Route path="/courses/advanced" element={<CoursesAdvanced />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/exam/:courseId" element={<Exam />} />
            <Route path="/results/:courseId" element={<Results />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
