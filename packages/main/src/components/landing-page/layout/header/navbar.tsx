import { Link, useLocation } from 'react-router';

import Logo from '../logo';

import { Key, useEffect, useState } from 'react';
import MobileHeader from './MobileHeader';
import AnnouncementBar from '../announcement-bar';

import { Icon } from '@iconify/react/dist/iconify.js';
import { navbarLinks } from '../../data/navbar';
import { ThemeMode } from 'src/layouts/full/vertical/header/ThemeMode';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const location = useLocation();

  const handleScroll = () => {
    setSticky(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // navlink active effect
  const isRouteActive = (href: string, pathname: string) => {
    if (href.includes('/components/')) {
      return location.pathname.includes('/components/');
    }

    if (href.includes('/ui-blocks')) {
      return location.pathname.startsWith('/ui-blocks');
    }

    return pathname === href;
  };

  return (
    <>
      {announcementVisible && <AnnouncementBar setIsVisible={setAnnouncementVisible} />}
      <div className="landingpage">
        <div
          className={`z-20 w-full  transition-transform duration-500 ease-in-out ${
            sticky ? 'fixed top-0' : announcementVisible ? 'absolute top-12' : 'absolute top-0'
          }`}
        >
          <div className="container">
            <nav className="relative pt-3">
              <div
                className={`relative z-20 flex items-center justify-between bg-white dark:bg-black p-3.5 border border-forest-black/10 rounded-2xl shadow-box-shadow dark:shadow-dark-box-shadow`}
              >
                <div className="flex items-center gap-7 xl:gap-12">
                  <Logo />
                  <ul className="hidden lg:flex items-center gap-1">
                    {navbarLinks?.navbarList?.map((value, index) => {
                      const isActive = isRouteActive(value.href, location.pathname);
                      return (
                        <Link key={index} to={value?.href}>
                          <li
                            className={`relative h-[35px] overflow-hidden flex flex-col justify-start text-sm hover:bg-lightprimary dark:hover:bg-darkprimary  font-normal rounded-md group ${
                              isActive
                                ? 'text-primary bg-lightprimary dark:text-white dark:bg-darkprimary'
                                : 'text-forest-black dark:text-darklink hover:text-primary dark:hover:text-white'
                            }`}
                          >
                            <span className="transform transition-transform duration-300 group-hover:-translate-y-full px-2 xl:px-3 py-1 xl:py-1.5">
                              {value?.label}
                            </span>
                            <span className="transform transition-transform duration-300 group-hover:-translate-y-full px-2 xl:px-3 py-1 xl:py-1.5">
                              {value?.label}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    {/* Theme Toggle */}
                    <ThemeMode />
                  </div>
                  <div className="hidden lg:flex items-center gap-4">
                    <div className="relative shadow-grid-shadow w-fit rounded-xl">
                      <Link
                        to={'/'}
                        className="flex items-center gap-2.5 px-3 py-2 bg-white dark:bg-primary hover:bg-lightprimary dark:hover:bg-primaryemphasis rounded-10 border border-forest-black/20 transition-all"
                      >
                        <Icon
                          icon={'solar:download-minimalistic-linear'}
                          width={20}
                          height={20}
                          className="text-forest-black dark:text-darklink"
                        />
                        <p className="text-forest-black dark:text-darklink text-base font-medium">
                          Free Download
                        </p>
                      </Link>
                    </div>
                    <div className="relative group w-fit shadow-grid-shadow bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD_0%,#548AFE_33.82%,#E02FD6_72.12%,#FDB54E_100%)] p-[2px] rounded-xl">
                      <Link
                        to="/"
                        className="flex items-center gap-2.5 px-3 py-2 bg-white dark:bg-darkbody hover:bg-primary/15 dark:hover:bg-primary/15 rounded-[10px] transition-all"
                      >
                        <Icon
                          icon={'solar:bolt-linear'}
                          width={20}
                          height={20}
                          className="text-forest-black dark:text-darklink group-hover:text-white"
                        />
                        <p className="text-forest-black dark:text-darklink group-hover:text-white text-base font-medium">
                          Get Pro
                        </p>
                      </Link>
                    </div>
                  </div>
                  {/*  */}
                  <div
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="block lg:hidden p-1.5 rounded-full hover:bg-forest-black/5 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentcolor"
                        d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                        strokeWidth="0.5"
                        stroke="currentcolor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {sidebarOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-forest-black/50 z-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-black shadow-lg transform transition-transform duration-300 max-w-xs ${
              sidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}
          >
            <div className="flex items-center justify-between p-4">
              <p className="text-lg font-bold">Menu</p>
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close mobile menu"
                className="cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <ul className="flex flex-col">
                {navbarLinks?.navbarList?.map((item: unknown, index: Key | null | undefined) => (
                  <MobileHeader key={index} item={item} />
                ))}
              </ul>
              <div className="relative shadow-grid-shadow w-fit rounded-xl my-2">
                <Link
                  to={'/'}
                  className="flex items-center gap-2.5 px-3 py-2 bg-white dark:bg-primary hover:bg-primary/15 dark:hover:bg-primaryemphasis rounded-10 border border-forest-black/20 transition-all"
                >
                  <Icon
                    icon={'solar:download-minimalistic-linear'}
                    width={20}
                    height={20}
                    className="text-forest-black dark:text-darklink"
                  />
                  <p className="text-forest-black dark:text-darklink text-base font-medium">
                    Free Download
                  </p>
                </Link>
              </div>
              <div className="relative group w-fit shadow-grid-shadow mb-2 bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD_0%,#548AFE_33.82%,#E02FD6_72.12%,#FDB54E_100%)] p-[2px] rounded-xl">
                <Link
                  to="/"
                  className="flex items-center gap-2.5 px-3 py-2 bg-white hover:bg-primary/15 rounded-[10px] transition-all"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72497 8.26166L7.27664 4.80916C8.92581 2.57749 9.75081 1.46166 10.52 1.69749C11.2891 1.93333 11.2891 3.30166 11.2891 6.03916V6.29749C11.2891 7.28499 11.2891 7.77833 11.605 8.08749L11.6216 8.10416C11.9441 8.40666 12.4575 8.40666 13.485 8.40666C15.335 8.40666 16.2591 8.40666 16.5716 8.96749L16.5866 8.99583C16.8816 9.56499 16.3458 10.29 15.275 11.7375L12.7233 15.1908C11.0733 17.4225 10.2491 18.5383 9.47997 18.3025C8.71081 18.0667 8.71081 16.6983 8.71081 13.9608V13.7025C8.71081 12.715 8.71081 12.2217 8.39497 11.9125L8.37831 11.8958C8.05581 11.5933 7.54247 11.5933 6.51497 11.5933C4.66497 11.5933 3.7408 11.5933 3.42914 11.0325L3.41331 11.0042C3.11831 10.435 3.65414 9.71083 4.72497 8.26249V8.26166Z"
                      stroke="#030E09"
                      strokeWidth="1.25"
                      className="group-hover:stroke-white"
                    />
                  </svg>

                  <p className="text-forest-black group-hover:text-white text-base font-medium">
                    Get Pro
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
