
import { Icon } from '@iconify/react/dist/iconify.js'
import CardBox from '../../shared/CardBox'
import { Badge } from 'flowbite-react'
import { v4 as uuidv4 } from 'uuid'

export default function EcommerceActionCards() {
  const EcommerceActions = [
    {
      id: uuidv4(),
      title: 'Total Orders',
      subtitle: '1630',
      cardIcon: 'solar:bag-4-line-duotone',
      cardIconBgColor:
        'bg-lightprimary dark:bg-darkprimary hover:bg-primary dark:hover:bg-primary',
      cardIconTextColor: 'text-primary hover:text-white',
      badgeColor: 'lightsuccess',
      statusValue: '3.5%',
      statusIcon: 'solar:course-up-line-duotone',
    },
    {
      id: uuidv4(),
      title: 'Orders Shipped',
      subtitle: '1293',
      cardIcon: 'solar:box-line-duotone',
      cardIconBgColor: 'bg-lightsuccess hover:bg-success',
      cardIconTextColor: 'text-success hover:text-white',
      badgeColor: 'lighterror',
      statusValue: '2.5%',
      statusIcon: 'solar:course-down-line-duotone',
    },
    {
      id: uuidv4(),
      title: 'Revenue Generated',
      subtitle: '$75,000',
      cardIcon: 'solar:chart-square-line-duotone',
      cardIconBgColor: 'bg-lightinfo hover:bg-info',
      cardIconTextColor: 'text-info hover:text-white',
      badgeColor: 'lightsuccess',
      statusValue: '12%',
      statusIcon: 'solar:course-up-line-duotone',
    },
    {
      id: uuidv4(),
      title: 'Customer Satisfaction',
      subtitle: '4.8 / 5.0',
      cardIcon: 'solar:star-line-duotone',
      cardIconBgColor: 'bg-lightwarning hover:bg-warning',
      cardIconTextColor: 'text-warning hover:text-white',
      badgeColor: 'lightsuccess',
      statusValue: '12%',
      statusIcon: 'solar:course-up-line-duotone',
    },
  ]

  return (
    <CardBox className='p-0'>
      <div className='flex items-center w-full lg:flex-nowrap flex-wrap'>
        {EcommerceActions.map((item) => {
          return (
            <div
              className='lg:w-3/12 md:w-6/12 w-full border-e border-border dark:border-darkborder last:border-e-0'
              key={item.id}>
              <div className='p-6'>
                <div className='flex flex-col gap-1'>
                  <div className='flex justify-between items-start'>
                    <h5 className='text-base font-medium'>{item.title}</h5>
                    <button
                      className={`p-2.5 rounded-full ${item.cardIconBgColor} ${item.cardIconTextColor}`}>
                      <Icon icon={item.cardIcon} width={24} height={24} />
                    </button>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h5 className='text-2xl font-semibold'>{item.subtitle}</h5>
                    <div className='flex items-center gap-2'>
                      <p className='text-xs'>Last 7 days</p>
                      <Badge color={item.badgeColor} size='xs'>
                        <div className='flex items-center gap-1'>
                          {item.statusValue}
                          <Icon icon={item.statusIcon} width={14} height={14} />
                        </div>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </CardBox>
  )
}
