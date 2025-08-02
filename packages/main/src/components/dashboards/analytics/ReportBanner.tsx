
import { Button } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import chasing_good_grades_bg from 'src/assets/images/analytic/usergraph.webp'


import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from "react-router"
import { useEffect, useState } from 'react'

export default function ReportBanner() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning')
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon')
    } else if (hour >= 17 && hour < 21) {
      setGreeting('Good Evening')
    } else {
      setGreeting('Good Night')
    }
  }, [])

  const getGreetingIcon = () => {
    if (greeting === 'Good Morning' || greeting === 'Good Afternoon') {
      return (
        <Icon
          icon='line-md:sunny-filled-loop'
          color='orange'
          width='25'
          height='25'
        />
      )
    } else {
      return (
        <Icon
          icon='line-md:moon-filled-alt-loop'
          color='white'
          width='25'
          height='25'
        />
      )
    }
  }

  return (
    <CardBox className='bg-primary dark:bg-primary relative p-30 px-6 overflow-hidden h-full'>
      <div className='grid grid-cols-12 h-full'>
        <div className='lg:col-span-7 col-span-12'>
          <div className='flex flex-col gap-4'>
            <div className='flex item-start gap-2'>
              <h2 className='text-2xl text-white'>{greeting}, Cameron</h2>
              <span className='flex items-center'>{getGreetingIcon()}</span>
            </div>
            <p className='text-sm text-white/60 max-w-88'>
              Stay updated with your store’s performance today. Get a quick
              snapshot of key statistics.
            </p>
            <Link to={'/react-tables/order-datatable'}>
              <Button color='secondary' className='text-dark flex gap-2'>
                View Full Report
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
        </div>
      </div>
      <img
        src={chasing_good_grades_bg}
        width={190}
        height={200}
        alt='chasing_grades_bg'
        className='absolute -bottom-2 end-8 lg:block hidden'
      />
    </CardBox>
  )
}
