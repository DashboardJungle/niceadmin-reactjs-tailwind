
import { Link } from "react-router"
import CardBox from '../../shared/CardBox'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from 'flowbite-react'

export default function UpdateBanner() {
  return (
    <CardBox className='bg-primary dark:bg-primary shadow-none'>
      <div className='flex items-center flex-wrap justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className='dot-wrapper'>
              <div className='pulse-outer'></div>
              <div className='dot-inner'></div>
            </div>
            <p className='text-sm font-semibold text-white'>Update</p>
            <span className='w-1 h-1 rounded-full bg-white/50'></span>
            <p className='text-xs font-light text-white/50'>Nov 25th, 2024</p>
          </div>
          <p className='text-lg leading-tight font-semibold text-white'>
            Sales revenue increased <span className='text-secondary'>40%</span>{' '}
            in 1 week
          </p>
        </div>
        <Link to={'/react-tables/order-datatable'}>
          <Button color='secondary' className='text-dark flex gap-2'>
            View all orders{' '}
            <span>
              <Icon
                icon='solar:arrow-right-line-duotone'
                width={18}
                height={18}
              />
            </span>
          </Button>
        </Link>
      </div>
    </CardBox>
  )
}
