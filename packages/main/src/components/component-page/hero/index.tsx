import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export default function Hero() {
  const location = useLocation();
  const path = location.pathname;
  const [heading, setHeading] = useState('');

  useEffect(() => {
    if (path.includes('/flowbite/')) {
      setHeading('100+ Ready-to-Launch Flowbite Components Built with Tailwind');
    } else if (path.includes('/shadcn/')) {
      setHeading('100+ Ready-to-Deploy Shadcn UI Components Coded with Tailwind');
    } else if (path.includes('/headlessui/')) {
      setHeading('100+ Ready-to-Use Headless UI Components Powered by Tailwind');
    }
  }, [path]);
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
