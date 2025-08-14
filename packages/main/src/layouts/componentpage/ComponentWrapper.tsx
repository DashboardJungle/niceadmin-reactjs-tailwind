import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import ComponentSidebar from './sidebar/sidebar';
import { Button } from 'flowbite-react';
import { HiMenu, HiX } from 'react-icons/hi';
import { LibraryContext } from 'src/context/LibraryContext';
import Header from 'src/components/landing-page/layout/header';
import Footer from 'src/components/landing-page/layout/footer';
import ScrollToTop from 'src/components/shared/ScrollToTop';
import { Outlet } from 'react-router';
import Hero from 'src/components/component-page/hero';
import Categories from 'src/components/component-page/categories';

export default function ComponentWrapper() {
  const { selectedLibrary, setSelectedLibrary } = useContext(LibraryContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeSidebar = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsSidebarOpen(false);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const openSidebar = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsSidebarOpen(true);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const toggleSidebar = useCallback(() => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }, [isSidebarOpen, closeSidebar, openSidebar]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSidebarOpen, closeSidebar]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isSidebarOpen]);

  // Focus management for accessibility
  useEffect(() => {
    if (isSidebarOpen && sidebarRef.current) {
      const firstFocusable = sidebarRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ) as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [isSidebarOpen]);

  return (
    <main className="min-h-screen bg-body dark:bg-darkbody">
      <Header />
      <Hero />
      <Categories selectedLibrary={selectedLibrary} onLibraryChange={setSelectedLibrary} />
      <div className="container max-w-7xl px-4 pb-6">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-white to-gray-50 dark:from-darkprimary dark:to-darkprimary/90 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-darklink">
                Component Library
              </h2>
              <p className="text-sm text-muted dark:text-darkmuted">
                Browse and explore components
              </p>
            </div>
          </div>
          <Button
            size="sm"
            color="lightprimary"
            onClick={toggleSidebar}
            disabled={isAnimating}
            className="lg:hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label={isSidebarOpen ? 'Close component menu' : 'Open component menu'}
            aria-expanded={isSidebarOpen}
            aria-controls="component-sidebar"
          >
            {isSidebarOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex gap-6 lg:gap-12">
          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              ref={overlayRef}
              className="fixed inset-0 bg-black/15 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300 ease-out"
              onClick={closeSidebar}
              aria-hidden="true"
            />
          )}

          {/* Sidebar */}
          <aside
            ref={sidebarRef}
            id="component-sidebar"
            className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0
            fixed 
            top-0 left-0
            h-full lg:h-screen
             lg:w-auto
            z-50 lg:z-auto
            transition-all duration-300 ease-out
            lg:border lg:border-ld lg:rounded-md
            lg:block
            shadow-2xl lg:shadow-none
            lg:sticky lg:top-28
            ${isSidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}
            isolate
            will-change-transform
          `}
            role="navigation"
            aria-label="Component navigation"
          >
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
              <ComponentSidebar
                onLibraryChange={setSelectedLibrary}
                selectedLibrary={selectedLibrary}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full lg:flex-1">
            {/* <div className={isSidebarOpen ? 'lg:block hidden' : 'block'}>
              {children}
            </div> */}
            <div className={isSidebarOpen ? 'lg:block hidden' : 'block'}>
              <ScrollToTop>
                <Outlet />
              </ScrollToTop>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
