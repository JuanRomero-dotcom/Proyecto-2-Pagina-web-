import { useEffect } from "react";

export function useCleanNavigation() {
  useEffect(() => {
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const sectionId = href.replace('#', '');
          const element = document.getElementById(sectionId);
          
          if (element) {
            window.history.pushState({}, '', '/');
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleNavigation);
    
    return () => {
      document.removeEventListener('click', handleNavigation);
    };
  }, []);
}
