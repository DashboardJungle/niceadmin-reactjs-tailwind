
import { Link } from 'react-router'
import IconPro from 'src/assets/images/landingpage/icon/pro-icon.svg'
import IconDownload from 'src/assets/images/landingpage/icon/download-icon.svg'
import Icontestimonial from 'src/assets/images/landingpage/testimonial/testimonial-img.png'



const PromotionBanner = () => {
  return (
    <section className='landingpage'>
      <div className='py-11 lg:py-20'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-28 border border-white dark:border-black shadow-grid-shadow dark:shadow-dark-grid-shadow relative overflow-hidden bg-primary rounded-2xl px-6 sm:px-16 py-12 sm:py-20'>
            <div className='flex flex-col text-center lg:text-left items-center lg:items-start gap-8'>
              <div className='flex flex-col gap-2'>
                <p className='text-base font-normal text-white'>
                  What are you waiting for?
                </p>
                <h2 className='text-white font-semibold text-2xl md:text-4xl'>
                  Join thousands using the #1 Tailwind CSS Admin Dashboard on
                  the market!
                </h2>
              </div>
              <div className='flex flex-wrap items-center justify-center gap-4'>
                <Link
                  to={'/'}
                  className='w-fit flex items-center gap-2.5 py-2.5 px-4.5 bg-secondary hover:bg-secondary/80 border border-secondary rounded-10'>
                  <img
                    src={IconPro}
                    alt='pro-icon'
                    width={20}
                    height={20}
                  />
                  <span className='text-base text-forest-black'>Get Pro</span>
                </Link>
                <Link
                  to={'/'}
                  className='w-fit flex items-center gap-2.5 py-2.5 px-4.5 bg-white hover:bg-white/80 border border-forest-black/20 rounded-10'>
                  <img
                    src={IconDownload}
                    alt='pro-icon'
                    width={20}
                    height={20}
                  />
                  <span className='text-base text-forest-black'>Download</span>
                </Link>
              </div>
            </div>
            <div className='absolute right-0 bottom-0 h-auto w-1/2 hidden lg:block'>
              <img
                src={Icontestimonial}
                alt='testimonial-img'
                width={500}
                height={380}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionBanner
