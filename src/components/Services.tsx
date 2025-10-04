import { Code, Database, Cloud, Settings, Smartphone, Shield, Users, DollarSign, ShoppingCart, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export const Services = () => {
  const { currentLanguage, t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      titleEn: 'Custom Software Development',
      titleAr: 'تطوير البرمجيات المخصصة',
      descriptionEn: 'End-to-end custom software solutions tailored to your business needs using modern frameworks and best practices',
      descriptionAr: 'حلول برمجية مخصصة من البداية للنهاية مصممة خصيصاً لتلبية احتياجات عملك باستخدام أحدث الأطر والممارسات',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Database,
      titleEn: 'Database Design & Management',
      titleAr: 'تصميم وإدارة قواعد البيانات',
      descriptionEn: 'Scalable database architecture, optimization, and management for high-performance data storage and retrieval',
      descriptionAr: 'هندسة قواعد بيانات قابلة للتطوير وتحسين وإدارة لتخزين واسترجاع البيانات عالي الأداء',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Cloud,
      titleEn: 'Cloud Solutions',
      titleAr: 'الحلول السحابية',
      descriptionEn: 'Cloud infrastructure setup, migration, and management across AWS, Azure, and Google Cloud platforms',
      descriptionAr: 'إعداد البنية التحتية السحابية والترحيل والإدارة عبر منصات AWS وAzure وGoogle Cloud',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      titleEn: 'System Integration',
      titleAr: 'تكامل الأنظمة',
      descriptionEn: 'Seamless integration of diverse systems, APIs, and third-party services for unified operations',
      descriptionAr: 'تكامل سلس للأنظمة المتنوعة وواجهات برمجة التطبيقات والخدمات الخارجية للعمليات الموحدة',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Smartphone,
      titleEn: 'Mobile App Development',
      titleAr: 'تطوير تطبيقات الجوال',
      descriptionEn: 'Native and cross-platform mobile applications for iOS and Android with stunning user experiences',
      descriptionAr: 'تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS وAndroid مع تجارب مستخدم رائعة',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      titleEn: 'Security & Compliance',
      titleAr: 'الأمان والامتثال',
      descriptionEn: 'Comprehensive security audits, implementation of security best practices, and compliance solutions',
      descriptionAr: 'تدقيق أمني شامل وتطبيق أفضل ممارسات الأمان وحلول الامتثال',
      color: 'from-orange-500 to-cyan-500'
    },
    {
      icon: Users,
      titleEn: 'HR Management Systems',
      titleAr: 'أنظمة إدارة الموارد البشرية',
      descriptionEn: 'Complete HR solutions including payroll, attendance, performance management, and employee self-service',
      descriptionAr: 'حلول موارد بشرية شاملة تشمل الرواتب والحضور وإدارة الأداء والخدمة الذاتية للموظفين',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: DollarSign,
      titleEn: 'Accounting & Finance',
      titleAr: 'المحاسبة والمالية',
      descriptionEn: 'Comprehensive financial management with general ledger, accounts management, and financial reporting',
      descriptionAr: 'إدارة مالية شاملة مع دفتر الأستاذ العام وإدارة الحسابات والتقارير المالية',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: ShoppingCart,
      titleEn: 'Sales & CRM',
      titleAr: 'المبيعات وإدارة العملاء',
      descriptionEn: 'Customer relationship management, sales tracking, quotations, and comprehensive sales analytics',
      descriptionAr: 'إدارة علاقات العملاء وتتبع المبيعات وعروض الأسعار وتحليلات المبيعات الشاملة',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Package,
      titleEn: 'Warehouse & Inventory',
      titleAr: 'المستودعات والمخزون',
      descriptionEn: 'Real-time inventory tracking, warehouse management, stock control, and automated reordering systems',
      descriptionAr: 'تتبع المخزون في الوقت الفعلي وإدارة المستودعات ومراقبة المخزون وأنظمة إعادة الطلب الآلية',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('Our Services', 'خدماتنا')}
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            {t(
              'Comprehensive technical solutions designed to accelerate your digital transformation',
              'حلول تقنية شاملة مصممة لتسريع التحول الرقمي الخاص بك'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-lg mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold text-white mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                    {currentLanguage.code === 'ar' ? service.titleAr : service.titleEn}
                  </h3>

                  <p className={`text-gray-300 leading-relaxed ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                    {currentLanguage.code === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </p>

                  <div className={`mt-6 flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                    <span>{t('Learn More', 'اعرف المزيد')}</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '1.5s'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
