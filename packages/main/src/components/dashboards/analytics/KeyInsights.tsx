
import { Dropdown, DropdownItem } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import { Icon } from '@iconify/react/dist/iconify.js'
import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { ApexOptions } from 'apexcharts'

import Chart from "react-apexcharts";

export default function KeyInsights() {
  const { activeMode } = useContext(CustomizerContext)

  /*Table Action*/
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

  const Countries = [
    {
      id: uuidv4(),
      title: 'Asia',
      color: 'bg-primary',
    },
    {
      id: uuidv4(),
      title: 'USA',
      color: 'bg-warning',
    },
    {
      id: uuidv4(),
      title: 'Europe',
      color: 'bg-success',
    },
  ]

  // chart
  const optionscolumnchart: ApexOptions = {
    chart: {
      type: 'bar',
      height: 16,
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false, //  this hides the menu
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      'var(--color-primary)',
      'var(--color-warning)',
      'var(--color-secondary)',
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 3,
      },
    },
    stroke: {
      show: true,
      colors: ['transparent'],
      width: 4,
    },
    tooltip: {
      theme: `${activeMode === 'light' ? 'light' : 'dark'}`,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false, // Removes grid lines
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 350,
          },
        },
      },
      {
        breakpoint: 430,
        options: {
          chart: {
            width: 250,
          },
        },
      },
      {
        breakpoint: 370,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  }
  const seriescolumnchart: ApexAxisChartSeries = [
    { name: 'Asia', data: [38] },
    { name: 'USA', data: [20] },
    { name: 'Europe', data: [26] },
  ]

  return (
    <CardBox>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h6 className='font-semibold text-lg'>Key Insights</h6>
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
                className='flex gap-3 text-muted dark:text-lightgray'>
                <Icon icon={`${items.icon}`} height={18} />
                <span>{items.listtitle}</span>
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        <div>
          <p className='text-base'>All-time Revenue</p>
          <div className='flex items-center gap-2'>
            <h3 className='text-2xl font-semibold'>$395.7k</h3>
            <span className='text-xs font-medium px-2 py-1 rounded-full bg-lightsuccess text-success'>
              +2.7%
            </span>
          </div>
        </div>
        <div>
          <div className='h-4'>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type='bar'
              height={17}
              width={'100%'}
            />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          {Countries.map((item) => (
            <div key={item.id} className='flex items-center gap-2'>
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
              <span className='text-xs'>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </CardBox>
  )
}
