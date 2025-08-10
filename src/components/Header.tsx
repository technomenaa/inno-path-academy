import { Button } from "@/components/ui/button";
import { GraduationCap, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
          </div>
          
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="text-right mr-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                INNOLEARN
              </h1>
              <p className="text-sm text-muted-foreground">منصة التدريب الهندسي</p>
            </div>
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl text-white shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};