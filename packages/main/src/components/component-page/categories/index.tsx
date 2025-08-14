import { Button } from 'flowbite-react';
import React, { useMemo } from 'react';
import { Link } from 'react-router';

import flowbiteImg from '/src/assets/images/svgs/flowbite.svg';
import shadcnImg from '/src/assets/images/svgs/shadcn.svg';
import shadcnDarkImg from '/src/assets/images/svgs/shadcn-white.svg';
import headlessuiImg from '/src/assets/images/svgs/headless.svg';

interface CategoriesProps {
  selectedLibrary: string;
  onLibraryChange: (library: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ selectedLibrary, onLibraryChange }) => {
  const libraries = useMemo(
    () => [
      {
        key: 'flowbite',
        label: 'Flowbite',
        icon: flowbiteImg,
        href: '/components/flowbite/buttons',
      },
      {
        key: 'shadcn',
        label: 'ShadCN',
        icon: shadcnImg,
        darkicon: shadcnDarkImg,
        href: '/components/shadcn/buttons',
      },
      {
        key: 'headlessui',
        label: 'HeadlessUI',
        icon: headlessuiImg,
        href: '/components/headlessui/buttons',
      },
    ],
    [],
  );

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          aria-label="Select UI framework"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {libraries.map((lib) => (
            <Link to={lib.href} key={lib.key}>
              <Button
                pill
                size="sm"
                onClick={() => onLibraryChange(lib.key)}
                aria-selected={selectedLibrary === lib.key}
                tabIndex={0}
                className={`${
                  selectedLibrary === lib.key
                    ? 'bg-secondary hover:bg-secondaryemphasis text-black dark:bg-secondary dark:hover:bg-secondaryemphasis dark:text-black'
                    : 'bg-lightprimary dark:bg-darkprimary text-black hover:text-white'
                } text-sm sm:text-base border border-ld`}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <img
                    src={lib.icon}
                    alt={lib.label}
                    width={16}
                    height={16}
                    className={`${lib.key === 'shadcn' ? 'block dark:hidden' : ''} sm:w-5 sm:h-5`}
                  />
                  {lib.darkicon && (
                    <img
                      src={lib.darkicon}
                      alt={lib.label}
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5 hidden dark:block"
                    />
                  )}
                  <span className="hidden sm:inline">{lib.label}</span>
                  <span className="sm:hidden">{lib.label === 'ShadCN' ? 'ShadCN' : lib.label}</span>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
