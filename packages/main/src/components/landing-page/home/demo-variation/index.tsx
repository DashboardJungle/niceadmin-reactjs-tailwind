

import { motion, useInView } from 'framer-motion'


import InfoBadge from '../../shared/InfoBadge'
import { useRef } from 'react'
import { demoVariation } from '../../data/templateData'
import { Link } from 'react-router'

const DemoVariations = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })
  return (
    <section className='landingpage' id='components'>
      <div className='py-11 lg:py-20'>
        <div className='container'>
          <div className='flex flex-col gap-7 lg:gap-12'>
            <div className='max-w-3xl flex flex-col gap-6 items-center justify-center mx-auto'>
              <InfoBadge
                icon={'solar:window-frame-linear'}
                text='5 Demo Variations'
              />
              <div className='flex flex-col items-center text-center gap-2'>
                <h2 className='text-2xl md:text-4xl font-semibold text-forest-black dark:text-darklink'>
                  Dark, Horizontal, Mini Sidebar, RTL Versions
                </h2>
                <p className='text-base font-normal text-forest-black/60 dark:text-darkmuted'>
                  Dashboard and demo variations to build scalable admin panels
                </p>
              </div>
            </div>
            <div
              ref={ref}
              className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8'>
              {demoVariation?.map((value, index) => {
                return (
                  <motion.div {...bottomAnimation(index)} key={index}>
                    <div className='flex flex-col gap-4 sm:gap-6 p-4 lg:p-6 bg-white dark:bg-black border border-forest-black/10 dark:border-white/10 rounded-2xl shadow-grid-shadow dark:shadow-dark-grid-shadow'>
                      <div className='border border-forest-black/10 dark:border-white/10 rounded-xl'>
                        <img
                          src={value?.img}
                          alt={value?.title}
                          width={585}
                          height={340}
                          className='w-full h-full rounded-xl'
                        />
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <h3 className='text-base lg:text-xl font-medium text-forest-black dark:text-darklink'>
                            {value?.title}
                          </h3>
                          <div
                            className={`${value?.tag == 'Free'
                              ? 'bg-primary'
                              : 'bg-secondary'
                              }  rounded-full`}>
                            <p
                              className={`${value?.tag == 'Free'
                                ? 'text-white'
                                : 'text-forest-black'
                                } py-0.5 px-2.5 text-sm font-medium`}>
                              {value?.tag}
                            </p>
                          </div>
                        </div>
                        <Link
                          to={value?.liveUrl}
                          className='relative inline-flex items-center justify-center sm:px-6 sm:py-2 p-4 rounded-10 border border-forest-black/20 dark:border-white/20 group/live-preview overflow-hidden'>
                          <span className='transition-transform duration-500 group-hover/live-preview:translate-x-40 sm:block hidden z-10 text-base text-forest-black dark:text-darklink'>
                            Live Preview
                          </span>
                          <div className='absolute inset-0 flex items-center justify-center sm:-translate-x-40 translate-0 group-hover/live-preview:translate-x-0 transition-transform duration-500 z-20'>
                            <svg
                              width='21'
                              height='20'
                              viewBox='0 0 21 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M5.5 15L15.5 5M15.5 5H8M15.5 5V12.5'
                                stroke='currentcolor'
                                strokeWidth='1.25'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
              <div className='flex flex-col justify-center items-center gap-6 p-6 bg-white dark:bg-black border border-forest-black/10 dark:border-white/10 rounded-xl shadow-grid-shadow dark:shadow-dark-grid-shadow'>
                <p className='text-base lg:text-xl font-medium border border-dashed border-forest-black/40 dark:border-white/40 rounded-lg py-1.5 px-3.5'>
                  More Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoVariations
