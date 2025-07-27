import { useState, useEffect } from 'react';

export const useNavbarHeight = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    // Initial measurement
    updateNavbarHeight();

    // Update on window resize
    window.addEventListener('resize', updateNavbarHeight);

    // Use MutationObserver to detect navbar changes
    const navbar = document.querySelector('nav');
    if (navbar) {
      const observer = new MutationObserver(updateNavbarHeight);
      observer.observe(navbar, { 
        attributes: true, 
        childList: true, 
        subtree: true 
      });

      return () => {
        window.removeEventListener('resize', updateNavbarHeight);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return navbarHeight;
};
