

import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router'
import { InfiniteMovingCards } from 'src/components/aceternity-ui/infinite-moving-cards'
import { avatarList } from '../../data/avatar'
import sliderImg1 from 'src/assets/images/landingpage/hero-section/hero-slider-image-1.svg'

// import sliderImg2 from 'src/assets/images/landingpage/hero-section/hero-slider-image-2.svg'
// import sliderImg3 from 'src/assets/images/landingpage/hero-section/hero-slider-image-3.svg'




const heroimageslider = [
  {
    img: sliderImg1,
    href: '/',
  },
  // {
  //   img: sliderImg2,
  //   href: '/',
  // },
  // {
  //   img: sliderImg3,
  //   href: '/',
  // },
]

const HeroSection = () => {
  return (
    <section>
      <div className='relative pt-44 md:pt-40 flex flex-col gap-6 pb-5 bg-gradient-with-grid h-full w-full overflow-hidden'>
        <div className='container'>
          <div className='relative z-10 w-full md:max-w-5xl mx-auto flex flex-col gap-6 items-center justify-center text-center'>
            <div className='w-fit py-2 px-3 border border-forest-black/10 dark:border-white/10 rounded-full'>
              <div className='flex items-center gap-5'>
                <ul className='avatar flex flex-row items-center'>
                  {avatarList?.map((items: any, index: any) => (
                    <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                      <img
                        src={items.avatar}
                        alt='Image'
                        width={24}
                        height={24}

                      />
                    </li>
                  ))}
                </ul>
                <p className='text-sm'>
                  <span className='text-forest-black dark:text-darklink font-medium'>
                    155,947+
                  </span>{' '}
                  developers & agencies are using our templates.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='relative'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-semibold leading-tight text-forest-black dark:text-darklink'>
                  Free Tailwind CSS Admin Dashboard Template with React
                </h1>
              </div>
              <p className='text-base font-normal text-forest-black/60 dark:text-darkmuted'>
                Download NiceAdmin - Free React Tailwind CSS Admin Dashboard
                Template built by{' '}
                <span className='font-semibold'>WrapPixel</span>
              </p>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Link
                to='/'
                className='group flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-primary hover:bg-secondary rounded-10'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M17.0075 7.79414C17.4077 8.00698 17.7425 8.32471 17.976 8.71329C18.2095 9.10187 18.3328 9.54665 18.3328 9.99997C18.3328 10.4533 18.2095 10.8981 17.976 11.2866C17.7425 11.6752 17.4077 11.993 17.0075 12.2058L6.33083 18.0116C4.61167 18.9475 2.5 17.7308 2.5 15.8066V4.19414C2.5 2.26914 4.61167 1.0533 6.33083 1.98747L17.0075 7.79414Z'
                    stroke='#C2FD75'
                    strokeWidth='1.25'
                    className='group-hover:stroke-primary'
                  />
                </svg>

                <p className='group-hover:text-primary text-secondary text-base font-semibold'>
                  Live Preview
                </p>
              </Link>
              <div className='relative w-fit group rounded-xl p-0.5 bg-transparent'>
                <Link
                  to='/'
                  className='flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-white dark:bg-darkbody hover:bg-primary/15 dark:hover:bg-darkprimary rounded-10 border border-forest-black/20 dark:border-white/20 transition-all'>
                  <Icon
                    icon={'solar:download-minimalistic-linear'}
                    width={20}
                    height={20}
                    className='text-forest-black dark:text-darklink'
                  />
                  <p className='text-forest-black dark:text-darklink text-base font-semibold'>
                    Free Download
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <InfiniteMovingCards
            items={heroimageslider}
            direction='left'
            speed='normal'
            pauseOnHover={false}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
