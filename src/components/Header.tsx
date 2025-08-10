import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, LogOut, User, Settings, LayoutDashboard, GraduationCap } from "lucide-react";

export const Header = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-4">
            {/* قائمة الدورات */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <GraduationCap className="w-4 h-4 ml-2" />
                  الدورات
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" align="start">
                <DropdownMenuItem onClick={() => navigate('/courses/basic')}>
                  <span>الدورات الحالية (ترميز 1)</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/courses/advanced')}>
                  <span>الدورات المتقدمة</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/register')}>
                  <span>طلب التسجيل</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {user?.avatar || (user?.name?.charAt(0) || '👤')}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start" forceMount>
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.role === 'admin' ? 'مدير النظام' : 'طالب'}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    <LayoutDashboard className="ml-2 h-4 w-4" />
                    <span>لوحة التحكم</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="ml-2 h-4 w-4" />
                    <span>الملف الشخصي</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="ml-2 h-4 w-4" />
                    <span>الإعدادات</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="ml-2 h-4 w-4" />
                    <span>تسجيل الخروج</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/login')}
              >
                <User className="w-4 h-4 ml-2" />
                تسجيل الدخول
              </Button>
            )}
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