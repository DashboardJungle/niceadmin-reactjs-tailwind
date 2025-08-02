import { Badge, Button } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function TotalProducts() {
  return (
    <CardBox>
      <div className='flex flex-col gap-5'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-1'>
            <h4 className='text-base font-medium text-dark dark:text-white'>
              Total Products
            </h4>
            <div className='flex items-center gap-1'>
              <h3 className='text-2xl font-semibold text-dark dark:text-white'>
                108
              </h3>
              <Badge color='lightsuccess' size='xs'>
                40%
              </Badge>
            </div>
          </div>
          <div className='p-3 bg-lightsuccess text-success rounded-xs'>
            <Icon icon='solar:box-line-duotone' width={24} height={24} />
          </div>
        </div>
        <Button
          color='outlinedark'
          className='w-fit hover:bg-dark dark:hover:bg-dark'>
          See Report
          <Icon icon='solar:arrow-right-line-duotone' width={16} height={16} />
        </Button>
      </div>
    </CardBox>
  )
}
