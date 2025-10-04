import { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, Code2, Sun, Moon } from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Route } from '../hooks/useRouter';

interface NavigationProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

export const Navigation = ({ currentRoute, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home' as Route, labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'services' as Route, labelEn: 'Services', labelAr: 'الخدمات' },
    { id: 'solutions' as Route, labelEn: 'Solutions', labelAr: 'الحلول' },
    { id: 'erp' as Route, labelEn: 'ERP Systems', labelAr: 'أنظمة تخطيط الموارد' },
    { id: 'contact' as Route, labelEn: 'Contact', labelAr: 'اتصل بنا' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-cyan-400/30"></div>
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {t('TechCore Solutions', 'حلول تكنولوجيا المستقبل')}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  currentLanguage.code === 'ar' ? 'font-harmattan text-base' : ''
                } ${
                  currentRoute === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {currentLanguage.code === 'ar' ? item.labelAr : item.labelEn}
                {currentRoute === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></span>
                )}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 text-gray-300 hover:text-cyan-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 text-gray-300 hover:text-cyan-400"
              >
                <Globe className="w-4 h-4" />
                <span className={`text-sm ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                  {currentLanguage.name}
                </span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-800/95 backdrop-blur-lg border border-cyan-500/30 rounded-lg shadow-xl shadow-cyan-500/10 overflow-hidden animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left transition-all duration-200 ${
                        lang.code === 'ar' ? 'font-harmattan text-base' : 'text-sm'
                      } ${
                        currentLanguage.code === lang.code
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-cyan-500/20 animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : 'text-base'
                } ${
                  currentRoute === item.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:bg-slate-800/50 hover:text-cyan-400'
                }`}
              >
                {currentLanguage.code === 'ar' ? item.labelAr : item.labelEn}
              </button>
            ))}

            <div className="pt-3 border-t border-cyan-500/20 space-y-3">
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-cyan-400 transition-all duration-300"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className={currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : 'text-base'}>
                  {theme === 'dark' ? t('Light Mode', 'الوضع الفاتح') : t('Dark Mode', 'الوضع الداكن')}
                </span>
              </button>

              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    lang.code === 'ar' ? 'font-harmattan text-lg' : 'text-base'
                  } ${
                    currentLanguage.code === lang.code
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800/50 hover:text-cyan-400'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
