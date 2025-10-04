import { useState, useEffect } from 'react';

export type Route = 'home' | 'services' | 'solutions' | 'erp' | 'contact';

export const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as Route;
      if (['home', 'services', 'solutions', 'erp', 'contact'].includes(hash)) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: Route) => {
    window.location.hash = route;
    setCurrentRoute(route);
  };

  return { currentRoute, navigate };
};
