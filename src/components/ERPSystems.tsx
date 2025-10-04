import { useState } from 'react';
import { Users, DollarSign, ShoppingCart, Package, TrendingUp, FileText, Calendar, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ERPSystems = () => {
  const { currentLanguage, t } = useLanguage();
  const [activeModule, setActiveModule] = useState(0);

  const erpModules = [
    {
      icon: Users,
      titleEn: 'Human Resources',
      titleAr: 'الموارد البشرية',
      descriptionEn: 'Comprehensive HR management including employee records, payroll processing, attendance tracking, performance evaluations, and talent acquisition',
      descriptionAr: 'إدارة شاملة للموارد البشرية تشمل سجلات الموظفين ومعالجة الرواتب وتتبع الحضور وتقييمات الأداء واكتساب المواهب',
      features: ['Employee Database', 'Payroll Management', 'Time & Attendance', 'Performance Reviews', 'Recruitment', 'Benefits Management'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: DollarSign,
      titleEn: 'Accounting & Finance',
      titleAr: 'المحاسبة والمالية',
      descriptionEn: 'Complete financial management with general ledger, accounts payable/receivable, budget planning, financial reporting, and tax compliance',
      descriptionAr: 'إدارة مالية كاملة مع دفتر الأستاذ العام والحسابات المدينة والدائنة وتخطيط الميزانية والتقارير المالية والامتثال الضريبي',
      features: ['General Ledger', 'AP/AR', 'Fixed Assets', 'Budget Planning', 'Financial Reports', 'Tax Management'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: ShoppingCart,
      titleEn: 'Sales & CRM',
      titleAr: 'المبيعات وإدارة العملاء',
      descriptionEn: 'Customer relationship management, sales pipeline tracking, quotation management, order processing, and customer analytics',
      descriptionAr: 'إدارة علاقات العملاء وتتبع مسار المبيعات وإدارة عروض الأسعار ومعالجة الطلبات وتحليلات العملاء',
      features: ['Lead Management', 'Sales Pipeline', 'Quotations', 'Order Management', 'Customer Portal', 'Sales Analytics'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Package,
      titleEn: 'Warehouse & Inventory',
      titleAr: 'المستودعات والمخزون',
      descriptionEn: 'Real-time inventory tracking, warehouse management, stock optimization, barcode scanning, and automated reordering',
      descriptionAr: 'تتبع المخزون في الوقت الفعلي وإدارة المستودعات وتحسين المخزون ومسح الباركود وإعادة الطلب الآلي',
      features: ['Stock Management', 'Multi-Warehouse', 'Barcode System', 'Reorder Points', 'Stock Transfers', 'Inventory Reports'],
      gradient: 'from-pink-600 to-red-600'
    },
    {
      icon: TrendingUp,
      titleEn: 'Procurement & Purchasing',
      titleAr: 'المشتريات والتوريد',
      descriptionEn: 'Vendor management, purchase orders, RFQ processing, supplier evaluation, and procurement analytics',
      descriptionAr: 'إدارة الموردين وأوامر الشراء ومعالجة طلبات عروض الأسعار وتقييم الموردين وتحليلات المشتريات',
      features: ['Vendor Database', 'Purchase Orders', 'RFQ Management', 'Supplier Ratings', 'Contract Management', 'Cost Analysis'],
      gradient: 'from-red-600 to-orange-600'
    },
    {
      icon: FileText,
      titleEn: 'Project Management',
      titleAr: 'إدارة المشاريع',
      descriptionEn: 'Project planning, task tracking, resource allocation, time tracking, milestone management, and project analytics',
      descriptionAr: 'تخطيط المشاريع وتتبع المهام وتخصيص الموارد وتتبع الوقت وإدارة المعالم وتحليلات المشاريع',
      features: ['Project Planning', 'Task Management', 'Resource Allocation', 'Time Tracking', 'Budget Control', 'Gantt Charts'],
      gradient: 'from-orange-600 to-yellow-600'
    },
    {
      icon: Calendar,
      titleEn: 'Manufacturing',
      titleAr: 'التصنيع',
      descriptionEn: 'Production planning, bill of materials, work orders, quality control, shop floor management, and manufacturing analytics',
      descriptionAr: 'تخطيط الإنتاج وقوائم المواد وأوامر العمل ومراقبة الجودة وإدارة أرضية المصنع وتحليلات التصنيع',
      features: ['Production Planning', 'BOM Management', 'Work Orders', 'Quality Control', 'Shop Floor', 'Capacity Planning'],
      gradient: 'from-yellow-600 to-green-600'
    },
    {
      icon: BarChart3,
      titleEn: 'Business Intelligence',
      titleAr: 'ذكاء الأعمال',
      descriptionEn: 'Advanced analytics, custom dashboards, KPI tracking, predictive insights, and comprehensive business reporting',
      descriptionAr: 'تحليلات متقدمة ولوحات معلومات مخصصة وتتبع مؤشرات الأداء والرؤى التنبؤية وتقارير الأعمال الشاملة',
      features: ['Custom Dashboards', 'KPI Tracking', 'Data Visualization', 'Predictive Analytics', 'Report Builder', 'Export Tools'],
      gradient: 'from-green-600 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Package className="w-4 h-4 text-cyan-400" />
            <span className={`text-sm text-cyan-400 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {t('Enterprise Resource Planning', 'تخطيط موارد المؤسسات')}
            </span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('Complete ERP Solutions', 'حلول تخطيط موارد المؤسسات الشاملة')}
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            {t(
              'Integrated business management system to streamline all your operations in one unified platform',
              'نظام إدارة أعمال متكامل لتبسيط جميع عملياتك في منصة موحدة'
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {erpModules.map((module, index) => {
            const Icon = module.icon;
            const isActive = activeModule === index;

            return (
              <button
                key={index}
                onClick={() => setActiveModule(index)}
                className={`relative p-6 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-105'
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/40 hover:scale-102'
                }`}
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${module.gradient} rounded-lg mb-3 ${isActive ? 'animate-pulse' : ''}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-sm font-bold text-white ${currentLanguage.code === 'ar' ? 'font-harmattan text-base' : ''}`}>
                  {currentLanguage.code === 'ar' ? module.titleAr : module.titleEn}
                </h3>
              </button>
            );
          })}
        </div>

        <div className="relative p-8 md:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-2xl backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className={`inline-flex p-5 bg-gradient-to-br ${erpModules[activeModule].gradient} rounded-xl shadow-lg`}>
                {(() => {
                  const Icon = erpModules[activeModule].icon;
                  return <Icon className="w-10 h-10 text-white" />;
                })()}
              </div>
            </div>

            <h3 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {currentLanguage.code === 'ar'
                ? erpModules[activeModule].titleAr
                : erpModules[activeModule].titleEn}
            </h3>

            <p className={`text-xl text-gray-300 mb-8 leading-relaxed ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {currentLanguage.code === 'ar'
                ? erpModules[activeModule].descriptionAr
                : erpModules[activeModule].descriptionEn}
            </p>

            <div className="mb-8">
              <h4 className={`text-lg font-semibold text-cyan-400 mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan text-xl' : ''}`}>
                {t('Key Features', 'الميزات الرئيسية')}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {erpModules[activeModule].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className={`px-8 py-4 bg-gradient-to-r ${erpModules[activeModule].gradient} rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                {t('Schedule Demo', 'جدولة عرض توضيحي')}
              </button>
              <button className={`px-8 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                {t('Learn More', 'اعرف المزيد')}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
          <h3 className={`text-2xl font-bold text-white mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            {t('Why Choose Our ERP System?', 'لماذا تختار نظام تخطيط الموارد الخاص بنا؟')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titleEn: 'Fully Integrated',
                titleAr: 'متكامل بالكامل',
                descEn: 'All modules work seamlessly together, sharing data in real-time',
                descAr: 'جميع الوحدات تعمل معاً بسلاسة وتتشارك البيانات في الوقت الفعلي'
              },
              {
                titleEn: 'Customizable',
                titleAr: 'قابل للتخصيص',
                descEn: 'Tailor the system to match your specific business processes',
                descAr: 'تخصيص النظام ليتناسب مع عمليات عملك المحددة'
              },
              {
                titleEn: 'Scalable',
                titleAr: 'قابل للتوسع',
                descEn: 'Grows with your business from startup to enterprise',
                descAr: 'ينمو مع عملك من الشركات الناشئة إلى المؤسسات'
              },
              {
                titleEn: 'Cloud & On-Premise',
                titleAr: 'سحابي ومحلي',
                descEn: 'Deploy on cloud, on-premise, or hybrid infrastructure',
                descAr: 'نشر على السحابة أو محلياً أو بنية تحتية هجينة'
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className={`text-lg font-semibold text-white mb-1 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                    {currentLanguage.code === 'ar' ? benefit.titleAr : benefit.titleEn}
                  </h4>
                  <p className={`text-gray-300 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : 'text-sm'}`}>
                    {currentLanguage.code === 'ar' ? benefit.descAr : benefit.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
