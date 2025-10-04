import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useRouter } from './hooks/useRouter';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { ERPSystems } from './components/ERPSystems';
import { Contact } from './components/Contact';

function AppContent() {
  const { currentRoute, navigate } = useRouter();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation currentRoute={currentRoute} onNavigate={navigate} />

      <div className="relative z-10">
        {currentRoute === 'home' && <Hero onNavigate={navigate} />}
        {currentRoute === 'services' && <Services />}
        {currentRoute === 'solutions' && <Solutions />}
        {currentRoute === 'erp' && <ERPSystems />}
        {currentRoute === 'contact' && <Contact />}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
