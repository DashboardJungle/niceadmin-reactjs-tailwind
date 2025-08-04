

import { Button } from 'flowbite-react'

import { Link } from 'react-router'
import React, { useMemo } from 'react'

import img1 from 'src/assets/images/svgs/flowbite.svg'
import img2 from 'src/assets/images/svgs/shadcn-white.svg'
import img3 from 'src/assets/images/svgs/headless.svg'
import img4 from 'src/assets/images/svgs/shadcn.svg'




interface CategoriesProps {
  selectedLibrary: string
  onLibraryChange: (library: string) => void
}

const Categories: React.FC<CategoriesProps> = ({
  selectedLibrary,
  onLibraryChange,
}) => {
  const libraries = useMemo(
    () => [
      {
        key: 'flowbite',
        label: 'Flowbite',
        icon: img1,
        href: '/componentpage/ui-components/flowbite/buttons',
      },
      {
        key: 'shadcn',
        label: 'ShadCN',
        icon: img4,
        darkicon: img2,
        href: '/componentpage/ui-components/shadcn/buttons',
      },
      {
        key: 'headlessui',
        label: 'HeadlessUI',
        icon: img3,
        href: '/componentpage/ui-components/headlessui/buttons',
      },
    ],
    []
  )

  return (
    <section className='py-8 sm:py-12 lg:py-16 mt-40'>
      <div className='container max-w-7xl mx-auto px-4'>
        <div
          aria-label='Select UI framework'
          className='flex flex-wrap justify-center gap-2 sm:gap-3'>
          {libraries.map((lib) => (
            <Link to={lib.href} key={lib.key}>
              <Button
                pill
                size='sm'
                onClick={() => onLibraryChange(lib.key)}
                aria-selected={selectedLibrary === lib.key}
                tabIndex={0}
                className={`${selectedLibrary === lib.key
                  ? 'bg-secondary hover:bg-secondaryemphasis border-primary text-black'
                  : 'bg-lightprimary dark:bg-darkprimary text-black hover:text-white'
                  } text-sm sm:text-base border border-ld`}>
                <div className='flex items-center gap-1 sm:gap-2'>
                  <img
                    src={lib.icon}
                    alt={lib.label}
                    width={16}
                    height={16}
                    className={`${lib.key === 'shadcn' ? 'block dark:hidden' : ''
                      } sm:w-5 sm:h-5`}
                  />
                  {lib.darkicon && (
                    <img
                      src={lib.darkicon}
                      alt={lib.label}
                      width={16}
                      height={16}
                      className='sm:w-5 sm:h-5 hidden dark:block'
                    />
                  )}
                  <span className='hidden sm:inline'>{lib.label}</span>
                  <span className='sm:hidden'>
                    {lib.label === 'ShadCN' ? 'ShadCN' : lib.label}
                  </span>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
