import { InfiniteMovingCards } from 'src/components/aceternity-ui/infinite-moving-cards'
import img1 from 'src/assets/images/landingpage/highlight/feature-img-1.png'
import img2 from 'src/assets/images/landingpage/highlight/feature-img-2.png'
import img3 from 'src/assets/images/landingpage/highlight/feature-img-3.png'
import img4 from 'src/assets/images/landingpage/highlight/feature-img-4.png'
import img5 from 'src/assets/images/landingpage/highlight/feature-img-5.png'
import img6 from 'src/assets/images/landingpage/highlight/feature-img-6.png'
import img7 from 'src/assets/images/landingpage/highlight/feature-img-7.png'
import img8 from 'src/assets/images/landingpage/highlight/feature-img-8.png'
import img9 from 'src/assets/images/landingpage/highlight/feature-img-9.png'



const testimonialsTop = [
  {
    img: img1,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/theme-pages/account-settings',
  },
  {
    img: img2,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/',
  },
  {
    img: img3,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/apps/kanban',
  },
  {
    img: img4,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/apps/chat-ai',
  },
]

const testimonialsBottom = [
  {
    img: img5,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/apps/email',
  },
  {
    img: img6,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/apps/invoice/detail/PineappleInc',
  },
  {
    img: img7,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/auth/auth1/login',
  },
  {
    img: img8,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/ecommerce',
  },
  {
    img: img9,
    href: 'https://niceadmin-mui-nextjs-main.vercel.app/apps/contacts',
  },
]

const FeatureHightlights = () => {
  return (
    <section>
      <div className='flex flex-col gap-8 py-20'>
        <div className='rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards
            items={testimonialsTop}
            direction='right'
            speed='normal'
          />
        </div>
        <div className='rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards
            items={testimonialsBottom}
            direction='left'
            speed='normal'
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureHightlights
