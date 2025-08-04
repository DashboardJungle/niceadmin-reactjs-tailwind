

import { testimonialsData } from '../../data/templateData'
import InfoBadge from '../../shared/InfoBadge'
import img1 from 'src/assets/images/landingpage/icon/success-icon.svg'
import Rating from 'src/assets/images/landingpage/icon/rating-star.svg'



const Testimonial = () => {
  return (
    <section className='landingpage'>
      <div className='py-11 lg:py-20'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='max-w-5xl flex flex-col gap-6 items-center justify-center mx-auto'>
              <InfoBadge icon={'solar:star-linear'} text='Testimonials' />
              <div className='flex flex-col items-center text-center gap-2'>
                <h2 className='text-2xl md:text-4xl font-semibold text-forest-black dark:text-darklink'>
                  Don’t just take our words for it, See what developers &
                  designers like you are saying
                </h2>
                <p className='text-base font-normal text-forest-black/60 dark:text-darkmuted'>
                  Get the latest news, tips, and tutorials on design and
                  development.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
              {testimonialsData?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className='flex flex-col gap-6 bg-white dark:bg-black p-7 rounded-2xl border border-forest-black/10 dark:border-white/10 shadow-grid-shadow dark:shadow-dark-grid-shadow'>
                    <div className='flex items-center justify-between sm:flex-nowrap flex-wrap gap-1'>
                      <div className='flex items-center gap-3.5'>
                        <div className='bg-forest-black/10 dark:bg-white/10 w-fit rounded-full'>
                          <p className='text-base text-forest-black dark:text-darkmuted font-medium py-1.5 px-3.5'>
                            {value?.title ? value.title.charAt(0) : ''}
                          </p>
                        </div>
                        <p className='text-base text-forest-black dark:text-darklink font-medium'>
                          {value?.title}
                        </p>
                      </div>
                      <div className='w-fit flex items-center gap-1 bg-success-green/10 dark:bg-success-green/20 py-1 px-2 rounded-full'>
                        <img
                          src={img1}
                          alt='success-icon'
                          width={20}
                          height={20}
                        />
                        <p className='text-sm text-success-green'>
                          Verified Buyer
                        </p>
                      </div>
                    </div>
                    <div className='flex gap-0.5'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img
                          key={i}
                          src={Rating}
                          alt='rating-star'
                          width={20}
                          height={20}
                        />
                      ))}
                    </div>
                    <div>
                      <p className='text-base text-forest-black dark:text-darkmuted'>
                        {value?.descp}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
