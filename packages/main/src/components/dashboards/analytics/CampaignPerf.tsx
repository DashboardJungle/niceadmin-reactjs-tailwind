

import { Badge, Dropdown, DropdownItem } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import { Icon } from '@iconify/react/dist/iconify.js'

import { v4 as uuidv4 } from 'uuid'

import insta from 'src/assets/images/products/socialMedia/insta.png'
import instaWhite from 'src/assets/images/products/socialMedia/instaWhite.png'
import google from 'src/assets/images/products/socialMedia/google.png'
import facebook from 'src/assets/images/products/socialMedia/facebook.png'
import twitter from 'src/assets/images/products/socialMedia/twitter.webp'


import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'

export default function CampaignPerf() {
  //
  const { activeMode } = useContext(CustomizerContext)
  const resolvedTheme = activeMode || 'light'
  //

  /*Dropdown Action*/
  const tableActionData = [
    {
      icon: 'solar:add-circle-outline',
      listtitle: 'Add',
    },
    {
      icon: 'solar:pen-new-square-broken',
      listtitle: 'Edit',
    },
    {
      icon: 'solar:trash-bin-minimalistic-outline',
      listtitle: 'Delete',
    },
  ]

  const Orders = [
    {
      id: uuidv4(),
      img: resolvedTheme === 'dark' ? instaWhite : insta,
      title: 'Instagram',
      subtitle: '8.49k users',
      badgeColor: 'lightsuccess',
      status: 'Running',
    },
    {
      id: uuidv4(),
      img: google,
      title: 'Google',
      subtitle: '9.12k users',
      badgeColor: 'lightwarning',
      status: 'Paused',
    },
    {
      id: uuidv4(),
      img: facebook,
      title: 'Facebook',
      subtitle: '6.98k users',
      badgeColor: 'lighterror',
      status: 'Stopped',
    },
    {
      id: uuidv4(),
      img: twitter,
      title: 'Twiter',
      subtitle: '8.92k users',
      badgeColor: 'lightinfo',
      status: 'Completed',
    },
  ]

  return (
    <CardBox className='px-0 h-full'>
      <div className='flex flex-col gap-0'>
        <div className='flex items-center justify-between px-6'>
          <h4 className='text-lg font-semibold'>Campaign Performance</h4>
          <Dropdown
            label=''
            dismissOnClick={false}
            className='overflow-hidden'
            renderTrigger={() => (
              <div className='flex justify-center items-center w-8 h-8 cursor-pointer border rounded-full border-transparent hover:border-border dark:hover:border-darkborder'>
                <Icon
                  icon='flowbite:dots-vertical-solid'
                  className='text-black dark:text-lightgray shrink-0'
                  width={24}
                  height={24}
                />
              </div>
            )}>
            {tableActionData.map((items, index) => (
              <DropdownItem
                key={index}
                className='flex gap-3 text-muted dark:text-lightgray dark:bg-black'>
                <Icon icon={`${items.icon}`} height={18} />
                <span>{items.listtitle}</span>
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        <div>
          {Orders.map((item) => (
            <div
              key={item.id}
              className='px-6 py-5 border-b last:border-b-0 last:pb-0 border-border dark:border-darkborder flex items-center justify-between'>
              <div className='flex items-center gap-5'>
                <img
                  src={item.img}
                  alt='product_img'
                  width={32}
                  height={32}
                  className='rounded-xs'
                />
                <div className='flex flex-col gap-1'>
                  <h6 className='text-base font-semibold'>{item.title}</h6>
                  <p className='text-sm font-normal'>{item.subtitle}</p>
                </div>
              </div>
              <Badge color={item.badgeColor} size='xs'>
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </CardBox>
  )
}
