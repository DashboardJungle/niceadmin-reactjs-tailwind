


import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router'
import img1 from 'src/assets/images/landingpage/footer/text-footer.svg'
import img2 from 'src/assets/images/landingpage/footer/text-footer-white.svg'
import { footerData } from '../../data/footerData'



const Footer = () => {
  return (
    <footer className='landingpage'>
      <div className='relative bg-white dark:bg-black overflow-hidden'>
        <div className='container'>
          <div className='pt-24 pb-10 sm:pb-20 md:pb-32 lg:pb-52'>
            <div className='flex flex-col sm:flex-row items-start justify-between pb-12 gap-10'>
              <div className='flex items-center gap-16 md:gap-32'>
                <div className='flex flex-col gap-6'>
                  <p className='text-forest-black dark:text-darklink font-medium text-base'>
                    Useful Links
                  </p>
                  <div className='flex flex-col gap-3'>
                    {footerData?.usefulLink?.map((value, index) => {
                      return (
                        <Link to={value?.href} key={index} className='w-fit'>
                          <p className='hover:text-forest-black dark:hover:text-white hover:translate-x-2.5 transition duration-300 ease-in-out text-base'>
                            {value?.title}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <p className='text-forest-black dark:text-darklink font-medium text-base'>
                    About
                  </p>
                  <div className='flex flex-col gap-3'>
                    {footerData?.about?.map((value, index) => {
                      return (
                        <Link to={value?.href} key={index} className='w-fit'>
                          <p className='hover:text-forest-black dark:hover:text-white hover:translate-x-2.5 transition duration-300 ease-in-out text-base'>
                            {value?.title}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                {footerData?.socialIcon?.map((value, index) => {
                  return (
                    <Link
                      to={value?.href}
                      key={index}
                      className='p-2.5 border border-forest-black/10 dark:border-white/10 hover:bg-forest-black/10 dark:hover:bg-white/10 rounded-xl'>
                      <Icon icon={value?.icon} width={20} height={20} />
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className='text-base flex flex-col sm:flex-row items-center text-center justify-between gap-1 border-t border-forest-black/10 pt-8'>
              <p>© 2025 NiceAdmin. All rights reserved.</p>
              <p>
                A product by:{' '}
                <Link
                  to={'https://www.wrappixel.com/'}
                  className='text-forest-black dark:text-darklink hover:text-primary dark:hover:text-primary'>
                  WrapPixel
                </Link>
              </p>
            </div>
          </div>

          <div className='absolute -bottom-9'>
            <img
              src={img1}
              alt='footer-img'
              width={1280}
              height={200}
              className='block dark:hidden'
            />
            <img
              src={img2}
              alt='footer-img'
              width={1280}
              height={200}
              className='dark:block hidden'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
