
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

// import images
import product_img from 'src/assets/images/backgrounds/laptop-desk.jpg'

import { Button } from 'flowbite-react'
import { Link } from "react-router"

export default function ProductCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        style={
          {
            '--swiper-pagination-color': '#189674',
            '--swiper-navigation-size': '0px',
            '--swiper-pagination-bullet-inactive-color': '#ffffff99',
          } as React.CSSProperties
        }
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper product-carousel'>
        <SwiperSlide>
          <div className='realtive relative rounded-2xl overflow-hidden laptop-desk h-full'>
            <img
              src={product_img}
              alt='product_background'
              className='w-full h-full object-cover'
            />
            <div className='w-full flex justify-start absolute bottom-5 start-5 z-20'>
              <div className='lg:w-10/12 w-full'>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-lg font-semibold text-white leading-snug'>
                    A laptop on a desk with minimal desk
                  </h4>
                  <Link to={'/apps/ecommerce/shop'}>
                    <Button color='secondary' className='text-dark w-fit'>
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='realtive relative rounded-2xl overflow-hidden laptop-desk h-full'>
            <img
              src={product_img}
              alt='product_background'
              className='w-full h-full object-cover'
            />
            <div className='w-full flex justify-start absolute bottom-5 start-5 z-20'>
              <div className='lg:w-10/12 w-full'>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-lg font-semibold text-white leading-tight'>
                    A laptop on a desk with minimal desk
                  </h4>
                  <Link to={'/apps/ecommerce/shop'}>
                    <Button color='secondary' className='text-dark w-fit'>
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='realtive relative rounded-2xl overflow-hidden laptop-desk h-full'>
            <img
              src={product_img}
              alt='product_background'
              className='w-full h-full object-cover'
            />
            <div className='w-full flex justify-start absolute bottom-5 start-5 z-20'>
              <div className='lg:w-10/12 w-full'>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-lg font-semibold text-white leading-tight'>
                    A laptop on a desk with minimal desk
                  </h4>
                  <Link to={'/apps/ecommerce/shop'}>
                    <Button color='secondary' className='text-dark w-fit'>
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
