

import { Icon } from '@iconify/react/dist/iconify.js'

import { Button, Select } from 'flowbite-react'

import { useEffect, useState } from 'react'

export default function OverviewTab() {
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
      return <Icon icon='line-md:moon-filled-alt-loop' width='25' height='25' />
    }
  }

  const dropdownItems = ['2025', '2024', '2023']

  return (
    <>
      <div className='flex items-center flex-wrap lg:flex-nowrap lg:gap-0 gap-4 justify-between'>
        <div>
          <h2 className='text-2xl mb-1 flex item-center gap-2'>
            {greeting}, Cameron{' '}
            <span className='flex items-center'>{getGreetingIcon()}</span>
          </h2>
        </div>
        <div className='flex items-center lg:flex-nowrap flex-wrap gap-2'>
          <div className='p-0 w-10 h-10 flex items-center justify-center rounded-xs bg-white dark:bg-dark shadow-md'>
            <Icon
              icon='solar:refresh-bold-duotone'
              width={20}
              height={20}
              className='text-dark dark:text-white'
            />
          </div>
          <div>
            <Select required className='form-control select-option'>
              {dropdownItems.map((items, index) => {
                return <option key={index}>{items}</option>
              })}
            </Select>
          </div>
          <Button
            color='secondary'
            className='text-dark flex items-center gap-2'>
            <span className='text-sm font-medium'>Download</span>
            <Icon
              icon='solar:download-minimalistic-line-duotone'
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
    </>
  )
}
