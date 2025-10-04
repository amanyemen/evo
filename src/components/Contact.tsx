import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export const Contact = () => {
  const { currentLanguage, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      labelEn: 'Email',
      labelAr: 'البريد الإلكتروني',
      value: 'info@techcore.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      labelEn: 'Phone',
      labelAr: 'الهاتف',
      value: '+1 (555) 123-4567',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: MapPin,
      labelEn: 'Location',
      labelAr: 'الموقع',
      value: 'San Francisco, CA',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:text-cyan-400' },
    { icon: Github, label: 'GitHub', url: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-purple-400' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('Get in Touch', 'تواصل معنا')}
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
            {t(
              "Let's discuss how we can help transform your business with innovative technology solutions",
              'دعنا نناقش كيف يمكننا مساعدتك في تحويل عملك بحلول تكنولوجية مبتكرة'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
              <h3 className={`text-2xl font-bold text-white mb-6 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                {t('Contact Information', 'معلومات التواصل')}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-slate-800/50 border border-cyan-500/10 rounded-lg hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className={`text-sm text-gray-400 mb-1 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                          {currentLanguage.code === 'ar' ? info.labelAr : info.labelEn}
                        </div>
                        <div className="text-white font-semibold">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
              <h3 className={`text-2xl font-bold text-white mb-6 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
                {t('Follow Us', 'تابعنا')}
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:border-cyan-400/40`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg">
                <p className={`text-gray-300 leading-relaxed ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                  {t(
                    'We are committed to delivering excellence in every project. Our team is ready to help you achieve your technology goals.',
                    'نحن ملتزمون بتقديم التميز في كل مشروع. فريقنا جاهز لمساعدتك في تحقيق أهدافك التقنية.'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
            <h3 className={`text-2xl font-bold text-white mb-6 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {t('Send us a Message', 'أرسل لنا رسالة')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-gray-300 mb-2 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                  {t('Name', 'الاسم')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}
                  placeholder={t('Your name', 'اسمك')}
                  required
                />
              </div>

              <div>
                <label className={`block text-gray-300 mb-2 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                  {t('Email', 'البريد الإلكتروني')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}
                  placeholder={t('your.email@example.com', 'بريدك@example.com')}
                  required
                />
              </div>

              <div>
                <label className={`block text-gray-300 mb-2 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}>
                  {t('Message', 'الرسالة')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className={`w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}
                  placeholder={t('Tell us about your project...', 'أخبرنا عن مشروعك...')}
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center space-x-2 ${currentLanguage.code === 'ar' ? 'font-harmattan text-lg' : ''}`}
              >
                <span>{t('Send Message', 'إرسال الرسالة')}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className={`text-cyan-400 ${currentLanguage.code === 'ar' ? 'font-harmattan' : ''}`}>
              {t('Available for new projects', 'متاحون لمشاريع جديدة')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
