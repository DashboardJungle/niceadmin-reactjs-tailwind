import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export default function Hero() {
  const location = useLocation();
  const [heading, setHeading] = useState('');

  useEffect(() => {
    if (location.pathname.includes('/banner')) {
      setHeading('Banner UI Blocks Build Promotional & Notification Bar Built with Tailwind');
    } else if (location.pathname.includes('/card')) {
      setHeading('Card UI Blocks Build Responsive Content Built with Tailwind');
    } else if (location.pathname.includes('/chart')) {
      setHeading('Chart UI Blocks Build Interactive Dashboard  Built with Tailwind');
    } else {
      setHeading('UI Blocks & Components Coded with Tailwind CSS');
    }
  }, [location.pathname]);
  return (
    <>
      <section className="pt-24 sm:pt-28 lg:pt-32">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-center mx-auto max-w-4xl sm:max-w-5xl lg:max-w-6xl">
            {heading}
          </h1>
        </div>
      </section>
    </>
  );
}
