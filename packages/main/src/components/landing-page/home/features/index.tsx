


import InfoBadge from '../../shared/InfoBadge'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { featuresData } from '../../data/templateData'

const Features = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })

  return (
    <section className='landingpage' ref={ref}>
      <div className='py-11 lg:py-20'>
        <div className='container'>
          <div className='flex flex-col gap-7 lg:gap-12'>
            <div className='max-w-xl flex flex-col gap-6 items-center justify-center mx-auto'>
              <InfoBadge icon={'solar:widget-3-linear'} text='Features' />
              <div className='flex flex-col items-center text-center gap-2'>
                <h2 className='text-2xl md:text-4xl font-semibold text-forest-black dark:text-darklink'>
                  Other Amazing Tailwind Features & Flexibility Provided
                </h2>
                <p className='text-base font-normal text-forest-black/60 dark:text-darkmuted'>
                  Get the latest news, tips, and tutorials on design and
                  development.
                </p>
              </div>
            </div>

            <div className='relative grid grid-cols-1 md:grid-cols-3 border-t border-l border-r border-b border-transparent'>
              {featuresData.map((feature, index) => {
                const isRightCol = (index + 1) % 3 === 0
                const isBottomRow = index >= featuresData.length - 3

                return (
                  <motion.div
                    key={index}
                    {...bottomAnimation(index)}
                    className={`relative flex flex-col gap-6 items-center justify-center p-8 border-b md:border-0 border-forest-black/10 dark:border-white/10 
                                            ${!isRightCol ? 'md:border-r' : ''} 
                                            ${!isBottomRow ? 'md:border-b' : ''
                      } 
                                            last:border-b-0 last:md:border-b-0 last:md:border-r-0`}>
                    {/* Icon */}
                    <div className='bg-white dark:bg-black p-3.5 border border-forest-black/10 shadow-grid-shadow dark:shadow-dark-grid-shadow rounded-2xl'>
                      <Icon icon={feature?.icon} width={32} height={32} />
                    </div>

                    {/* Text */}
                    <div className='flex flex-col gap-2 items-center text-center'>
                      <p className='text-lg font-medium text-forest-black dark:text-darklink'>
                        {feature?.title}
                      </p>
                      <p className='text-base font-normal text-forest-black/60 dark:text-darkmuted'>
                        {feature?.descp}
                      </p>
                    </div>

                    {/* Dot at intersection */}
                    {!isRightCol && !isBottomRow && (
                      <div className='hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-muted-gray rounded-full z-10' />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
