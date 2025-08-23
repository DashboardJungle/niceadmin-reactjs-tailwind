import { useMemo } from 'react';
import { useLocation, Link } from 'react-router';
import { Button } from 'flowbite-react';
import { Icon } from '@iconify/react';

const Categories = () => {
  const location = useLocation();

  const libraries = useMemo(
    () => [
      {
        key: 'card',
        label: 'Card',
        icon: 'solar:plate-linear',
        href: '/ui-blocks/#uiBlockCard',
      },
      {
        key: 'chart',
        label: 'Chart',
        icon: 'solar:chart-square-linear',
        href: '/ui-blocks/#uiBlockChart',
      },
      {
        key: 'banner',
        label: 'Banner',
        icon: 'solar:slider-minimalistic-horizontal-linear',
        href: '/ui-blocks/#uiBlockBanner',
      },
    ],
    [],
  );

  return (
    <section className="py-8 sm:py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          aria-label="Select widget category"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {libraries.map((lib) => {
            const isActive = location.pathname.startsWith(lib.href);

            return (
              <Link to={lib.href} key={lib.key}>
                <Button
                  pill
                  size="sm"
                  aria-selected={isActive}
                  tabIndex={0}
                  className={`${
                    isActive
                      ? 'bg-secondary dark:bg-secondary hover:bg-secondaryemphasis dark:hover:bg-secondaryemphasis border-primary text-black dark:text-black'
                      : 'bg-lightprimary dark:bg-darkprimary text-black hover:text-white'
                  } text-sm sm:text-base border border-ld`}
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Icon icon={lib.icon} width={16} height={16} />
                    <span>{lib.label}</span>
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
