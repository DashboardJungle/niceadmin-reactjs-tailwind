import { Icon } from '@iconify/react'

import * as MessagesData from './Data'


import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { Badge, Button, Dropdown, DropdownItem } from 'flowbite-react'
import { Link } from 'react-router'

const Messages = () => {
  return (
    <div className='relative group/menu'>
      <Dropdown
        label=''
        className='w-screen sm:w-88 py-6 rounded-xs'
        dismissOnClick={false}
        renderTrigger={() => (
          <div className='relative after:absolute after:w-10 after:h-10 after:rounded-full hover:text-primary after:top-1/2 hover:after:bg-lightprimary text-link dark:text-white rounded-full flex justify-center after:-translate-y-1/2 items-center cursor-pointer group-hover/menu:after:bg-lightprimary dark:group-hover/menu:after:bg-darkprimary group-hover/menu:text-primary'>
            <Icon
              icon='solar:settings-minimalistic-line-duotone'
              height={24}
              width={24}
            />
          </div>
        )}>
        <div className='flex items-center  px-6 justify-between'>
          <h3 className='mb-0 text-lg font-semibold text-ld'>Inbox</h3>
          <Badge color={'warning'} className='px-4 text-sm'>
            3 new
          </Badge>
        </div>
        <SimpleBar className='max-h-80 mt-3'>
          {MessagesData.MessagesLink.map((links, index) => (
            <DropdownItem
              as={Link}
              to='#'
              className='px-6 py-3 flex justify-between items-center bg-hover group/link w-full'
              key={index}>
              <div className='flex items-center'>
                <span className='shrink-0 relative'>
                  <img
                    src={links.avatar}
                    width={45}
                    height={45}
                    alt='materialm'
                    className='rounded-full bg-black/20 dark:bg-white/20 pt-0.5'
                  />
                  <i
                    className={`h-2 w-2 rounded-full absolute end-0 top-1 ${links.color}`}></i>
                </span>
                <div className='ps-4'>
                  <h5 className='mb-1 text-sm  group-hover/link:text-primary'>
                    {links.title}
                  </h5>
                  <span className='text-sm block  truncate text-bodytext dark:text-lightgray'>
                    {links.subtitle}
                  </span>
                </div>
              </div>
              <span className='text-xs block self-start pt-1.5 text-bodytext dark:text-lightgray'>
                {links.time}
              </span>
            </DropdownItem>
          ))}
        </SimpleBar>
        <div className='pt-5 px-6'>
          <Button color={'primary'} className='w-full'>
            See All Messages
          </Button>
        </div>
      </Dropdown>
    </div>
  )
}

export default Messages
