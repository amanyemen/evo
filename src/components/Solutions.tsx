import { useState } from 'react';
import { Cpu, Layers, Workflow, Network, Boxes, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Solutions = () => {
  const { currentLanguage, t } = useLanguage();
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      icon: Cpu,
      titleEn: 'Enterprise ERP Systems',
      titleAr: 'أنظمة تخطيط موارد المؤسسات',
      descriptionEn: 'Comprehensive ERP solutions integrating HR, Accounting, Sales, Warehouse, and all business operations into one unified system',
      descriptionAr: 'حلول تخطيط موارد المؤسسات الشاملة التي تدمج الموارد البشرية والمحاسبة والمبيعات والمستودعات وجميع العمليات التجارية في نظام موحد',
      technologies: ['Custom ERP', 'SAP Integration', 'Odoo', 'Microsoft Dynamics'],
      gradient: 'from-cyan-400 via-blue-500 to-purple-500'
    },
    {
      icon: Layers,
      titleEn: 'Microservices Architecture',
      titleAr: 'هندسة الخدمات الدقيقة',
      descriptionEn: 'Modern distributed systems with microservices for maximum flexibility and independent scalability',
      descriptionAr: 'أنظمة موزعة حديثة مع خدمات دقيقة لأقصى قدر من المرونة وقابلية التوسع المستقلة',
      technologies: ['Docker', 'Kubernetes', 'Service Mesh', 'API Gateway'],
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      icon: Workflow,
      titleEn: 'Automation Solutions',
      titleAr: 'حلول الأتمتة',
      descriptionEn: 'Intelligent automation and workflow optimization to streamline business processes and boost productivity',
      descriptionAr: 'أتمتة ذكية وتحسين سير العمل لتبسيط العمليات التجارية وتعزيز الإنتاجية',
      technologies: ['RPA', 'AI/ML', 'Process Mining', 'Workflow Engine'],
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      icon: Network,
      titleEn: 'IoT Integration',
      titleAr: 'تكامل إنترنت الأشياء',
      descriptionEn: 'Connect and manage IoT devices with real-time data processing and analytics capabilities',
      descriptionAr: 'ربط وإدارة أجهزة إنترنت الأشياء مع معالجة البيانات في الوقت الفعلي وقدرات التحليل',
      technologies: ['MQTT', 'Edge Computing', 'Azure IoT', 'AWS IoT'],
      gradient: 'from-pink-500 via-red-500 to-orange-500'
    },
    {
      icon: Boxes,
      titleEn: 'Blockchain Solutions',
      titleAr: 'حلول البلوكتشين',
      descriptionEn: 'Decentralized applications and smart contracts for secure, transparent business operations',
      descriptionAr: 'تطبيقات لامركزية وعقود ذكية لعمليات تجارية آمنة وشفافة',
      technologies: ['Ethereum', 'Hyperledger', 'Smart Contracts', 'DeFi'],
      gradient: 'from-red-500 via-orange-500 to-yellow-500'
    },
    {
      icon: Zap,
      titleEn: 'Real-time Systems',
      titleAr: 'الأنظمة الفورية',
      descriptionEn: 'High-performance real-time data processing and streaming solutions for mission-critical applications',
      descriptionAr: 'حلول معالجة وبث البيانات في الوقت الفعلي عالية الأداء للتطبيقات الحيوية',
      technologies: ['Apache Kafka', 'Redis', 'WebSockets', 'gRPC'],
      gradient: 'from-orange-500 via-yellow-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('Our Solutions', 'حلولنا')}
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            {t(
              'Cutting-edge technology solutions tailored to meet modern business challenges',
              'حلول تقنية متطورة مصممة لمواجهة تحديات الأعمال الحديثة'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isActive = activeSolution === index;

            return (
              <div
                key={index}
                onClick={() => setActiveSolution(index)}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-500 ${
                  isActive
                    ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105'
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/40 hover:scale-102'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-gradient-to-br ${solution.gradient} rounded-lg ${isActive ? 'animate-pulse' : ''}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-white mb-2 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                      {currentLanguage.code === 'ar' ? solution.titleAr : solution.titleEn}
                    </h3>
                  </div>
                </div>

                {isActive && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    <p className={`text-gray-300 leading-relaxed ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : 'text-sm'}`}>
                      {currentLanguage.code === 'ar' ? solution.descriptionAr : solution.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative p-8 md:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className={`inline-flex p-4 bg-gradient-to-br ${solutions[activeSolution].gradient} rounded-xl`}>
                {(() => {
                  const Icon = solutions[activeSolution].icon;
                  return <Icon className="w-12 h-12 text-white" />;
                })()}
              </div>
            </div>

            <h3 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {currentLanguage.code === 'ar'
                ? solutions[activeSolution].titleAr
                : solutions[activeSolution].titleEn}
            </h3>

            <p className={`text-xl text-gray-300 mb-8 leading-relaxed ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {currentLanguage.code === 'ar'
                ? solutions[activeSolution].descriptionAr
                : solutions[activeSolution].descriptionEn}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {solutions[activeSolution].technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-center hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-cyan-400 font-semibold text-sm">{tech}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center">
              <button className={`px-8 py-4 bg-gradient-to-r ${solutions[activeSolution].gradient} rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                {t('Request a Demo', 'اطلب عرضاً توضيحياً')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
