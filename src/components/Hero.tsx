import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Route } from '../hooks/useRouter';

interface HeroProps {
  onNavigate: (route: Route) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const { currentLanguage, t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const mainText = t(
    'Building Tomorrow\'s Technology Today',
    'بناء تكنولوجيا الغد اليوم'
  );

  useEffect(() => {
    setDisplayText('');
    setTextIndex(0);
  }, [currentLanguage]);

  useEffect(() => {
    if (textIndex < mainText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(mainText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, mainText]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-8 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className={`text-sm text-cyan-400 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            {t('Innovative Technology Solutions', 'حلول تكنولوجية مبتكرة')}
          </span>
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </h1>

        <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
          {t(
            'We deliver cutting-edge software solutions, system architecture, and technical expertise to transform your business',
            'نقدم حلول برمجية متطورة وهندسة أنظمة وخبرة تقنية لتحويل أعمالك'
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('services')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            <span className={`relative z-10 flex items-center space-x-2 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
              <span>{t('Explore Services', 'استكشف الخدمات')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`px-8 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}
          >
            {t('Get in Touch', 'تواصل معنا')}
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', labelEn: 'Projects', labelAr: 'مشروع' },
            { value: '200+', labelEn: 'Clients', labelAr: 'عميل' },
            { value: '50+', labelEn: 'Technologies', labelAr: 'تقنية' },
            { value: '10+', labelEn: 'Years', labelAr: 'سنة خبرة' }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-lg backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className={`text-gray-400 ${currentLanguage.code === 'ar' ? 'font-harmattan text-base' : 'text-sm'}`}>
                {currentLanguage.code === 'ar' ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
