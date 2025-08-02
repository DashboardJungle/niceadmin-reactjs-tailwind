import { Badge } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import { Icon } from '@iconify/react/dist/iconify.js'

interface ProductAction {
  title: string
  amount: string
  growthPercentage: string
  icon: string
  badgeColor: string
  iconBg: string
}

export default function ProductCard({
  title,
  amount,
  growthPercentage,
  icon,
  badgeColor,
  iconBg,
}: ProductAction) {
  return (
    <CardBox>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-semibold'>{title}</h4>
          <div className={`p-2 ${iconBg} rounded-2xl`}>
            <Icon icon={icon} width={24} height={24} />
          </div>
        </div>
        <div>
          <div className='flex items-center gap-1'>
            <h3 className='text-2xl font-semibold'>{amount}</h3>
            <Badge color={badgeColor} size='xs'>
              {growthPercentage}
            </Badge>
          </div>
          <p className='text-sm'>vs last month</p>
        </div>
      </div>
    </CardBox>
  )
}
