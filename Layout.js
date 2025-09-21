
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Home,
  Palette,
  User as UserIcon,
  Sparkles,
  Heart,
  Menu,
  X
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { LanguageProvider, useLanguage } from "./components/LanguageProvider";
import LanguageSwitcher from "./Components/LanguageSwitcher.js";
import { Button } from "@/components/ui/button";
import { User } from "@/entities/User";

const LayoutContent = ({ children, currentPageName }) => {
  const location = useLocation();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const user = await User.me();
      setCurrentUser(user);
    } catch (error) {
      setCurrentUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await User.logout();
      // Redirect to Welcome page after logout
      window.location.href = '/Welcome';
    } catch (error) {
      console.error('Logout error:', error);
      // Even if logout fails, redirect to Welcome page
      window.location.href = '/Welcome';
    }
  };

  const navigationItems = [
    {
      title: currentUser?.user_role === 'buyer' ? t('explorer') : t('dashboard'),
      url: currentUser?.user_role === 'buyer' ? createPageUrl("Explorer") : createPageUrl("Dashboard"),
      icon: currentUser?.user_role === 'buyer' ? Heart : Home,
      color: "text-pink-600"
    },
    // Conditionally add artisan-specific items
    ...(currentUser?.user_role === 'artisan' ? [
      {
        title: t('myCrafts'),
        url: createPageUrl("MyCrafts"),
        icon: Palette,
        color: "text-orange-600"
      },
      {
        title: t('myProfile'),
        url: createPageUrl("Profile"),
        icon: UserIcon,
        color: "text-yellow-600"
      },
      {
        title: t('aiHelper'),
        url: createPageUrl("AIHelper"),
        icon: Sparkles,
        color: "text-purple-600"
      }
    ] : [])
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <style>{`
        :root {
          --primary-pink: #EC4899;
          --primary-orange: #F97316;
          --primary-yellow: #EAB308;
          --warm-white: #FEFBF6;
          --soft-cream: #FEF3E2;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .surabhi-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(249, 115, 22, 0.1) 0%, transparent 50%);
        }

        .lotus-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EC4899' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20S-10 41.046-10 30s8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          {/* Sidebar for desktop */}
          <Sidebar className="border-r border-pink-100 bg-white/80 backdrop-blur-sm hidden lg:block">
            <SidebarHeader className="border-b border-pink-100 p-6">
              <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-2xl p-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceab7189c425af8f4724a8/8fc117bee_SURABHI.png"
                    alt="Surabhi Logo"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                  <div>
                    <h2 className="font-bold text-white text-lg">सुरभि</h2>
                    <p className="text-xs text-pink-100">{t('tagline')}</p>
                  </div>
                </div>
              </div>
            </SidebarHeader>

            <SidebarContent className="p-4 lotus-pattern">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-2">
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link
                            to={item.url}
                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-pink-50 hover:shadow-sm ${
                              location.pathname === item.url
                                ? 'bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50 border-l-4 border-pink-400 shadow-sm'
                                : ''
                            }`}
                          >
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                            <span className="font-medium text-gray-700">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              {currentUser?.user_role === 'artisan' && (
                <div className="mt-8 p-4 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 rounded-xl border border-pink-100">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-800 mb-1">{t('aiHelper')}</h3>
                    <p className="text-xs text-gray-600 mb-3">{t('aiHelperPrompt')}</p>
                    <Link to={createPageUrl("AIHelper")}>
                      <button className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white text-sm py-2 px-3 rounded-lg hover:shadow-md transition-all duration-300">
                        {t('getHelp')}
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </SidebarContent>

            <SidebarFooter className="border-t border-pink-100 p-4 bg-pink-50/50">
              <div className="text-center space-y-2">
                <p className="text-xs text-gray-600">{t('celebratingIndia')}</p>
                <p className="text-xs font-semibold text-pink-600">{t('artisanHeritage')}</p>
                <LanguageSwitcher />
                {currentUser && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="w-full text-gray-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <X className="w-4 h-4 mr-2" />
                    {t('logout')}
                  </Button>
                )}
              </div>
            </SidebarFooter>
          </Sidebar>

          {/* Mobile header */}
          <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceab7189c425af8f4724a8/8fc117bee_SURABHI.png"
                  alt="Surabhi Logo"
                  className="w-8 h-8 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <h1 className="font-bold text-gray-800">सुरभि</h1>
                  <p className="text-xs text-gray-500">{t('tagline')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-pink-100 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                        location.pathname === item.url
                          ? 'bg-pink-100 text-pink-700'
                          : 'hover:bg-pink-50'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  ))}
                </div>
                {currentUser && (
                  <div className="mt-4 pt-4 border-t border-pink-100">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLogout}
                      className="w-full text-red-600 hover:bg-red-50"
                    >
                      <X className="w-4 h-4 mr-2" />
                      {t('logout')}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Main content */}
          <main className="flex-1 overflow-auto">
            <div className="pt-20 lg:pt-0 min-h-screen surabhi-pattern lotus-pattern">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      <LayoutContent children={children} currentPageName={currentPageName} />
    </LanguageProvider>
  );
}
