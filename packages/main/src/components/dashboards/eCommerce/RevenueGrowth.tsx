

import { Icon } from '@iconify/react/dist/iconify.js'
import CardBox from '../../shared/CardBox'

export default function RevenueGrowth() {
  return (
    <CardBox className='bg-secondary dark:bg-secondary'>
      <div className='flex flex-col gap-12'>
        <div className='flex items-start justify-between pb-0.5'>
          <h6 className='text-lg max-w-20 text-dark dark:text-dark font-semibold leading-tight'>
            Revenue Growth
          </h6>
          <button className='p-2.5 rounded-full bg-primary hover:bg-primaryemphasis text-secondary'>
            <Icon icon='solar:diagram-up-line-duotone' width={20} height={20} />
          </button>
        </div>
        <div className='flex flex-col gap-1'>
          <h5 className='text-3xl font-semibold text-dark dark:text-dark'>
            +18%
          </h5>
          <p className='text-sm font-normal text-primary'>
            Compared to Last Month
          </p>
        </div>
      </div>
    </CardBox>
  )
}
