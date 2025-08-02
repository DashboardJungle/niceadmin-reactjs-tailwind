

import { Icon } from '@iconify/react/dist/iconify.js'
import CardBox from '../../shared/CardBox'
import { v4 as uuidv4 } from 'uuid'
import { Link } from "react-router"

export default function TotalAssets() {
  const Assets = [
    {
      id: uuidv4(),
      title: 'Projects',
      href: '/apps/kanban',
      value: '356',
      icon: 'solar:mailbox-line-duotone',
      color: 'text-info',
      bgColor: 'bg-lightinfo',
    },
    {
      id: uuidv4(),
      title: 'Payroll',
      href: '/theme-pages/pricing',
      value: '$96k',
      icon: 'solar:chat-round-money-line-duotone',
      color: 'text-warning',
      bgColor: 'bg-lightwarning',
    },
    {
      id: uuidv4(),
      title: 'Events',
      href: '/apps/calendar',
      value: '96',
      icon: 'solar:bookmark-line-duotone',
      color: 'text-error',
      bgColor: 'bg-lighterror',
    },
  ]
  return (
    <CardBox>
      <div className='flex flex-col justify-start gap-5 h-full'>
        <h4 className='text-lg font-semibold'>Total Assets</h4>
        <div className='flex-1 h-full'>
          <div className='flex lg:flex-nowrap flex-wrap w-full gap-4 lg:h-full h-auto'>
            <div className='lg:w-1/2 w-full flex flex-col gap-4 h-full'>
              <div className='flex-1 bg-lightsuccess h-full rounded-2xl flex flex-col justify-between p-5'>
                <div className='flex items-center justify-between'>
                  <Link to={'/apps/contacts'} className='text-sm font-normal'>
                    Employees
                  </Link>
                  <Icon
                    icon='solar:users-group-rounded-line-duotone'
                    width={24}
                    height={24}
                    className='text-success'
                  />
                </div>
                <h4 className='text-lg font-semibold leading-none'>96</h4>
              </div>
              <div className='flex-1 bg-lightprimary dark:bg-darkprimary h-full rounded-2xl flex flex-col justify-between p-5'>
                <div className='flex items-center justify-between'>
                  <Link
                    to={'/apps/user-profile/profile'}
                    className='text-sm font-normal'>
                    Clients
                  </Link>
                  <Icon
                    icon='solar:case-round-minimalistic-line-duotone'
                    width={24}
                    height={24}
                    className='text-primary'
                  />
                </div>
                <h4 className='text-lg font-semibold leading-none'>3,650</h4>
              </div>
            </div>
            <div className='lg:w-1/2 w-full flex flex-col gap-4'>
              {Assets.map((item) => (
                <div
                  key={item.id}
                  className={`flex-1 ${item.bgColor} rounded-2xl flex flex-col justify-between p-5`}>
                  <div className='flex items-center justify-between'>
                    <Link to={item.href} className='text-sm font-normal'>
                      {item.title}
                    </Link>
                    <Icon
                      icon={item.icon}
                      width={24}
                      height={24}
                      className={item.color}
                    />
                  </div>
                  <h4 className='text-lg font-semibold leading-none'>
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardBox>
  )
}
