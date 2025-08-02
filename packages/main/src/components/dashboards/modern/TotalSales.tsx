

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Badge, Select } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import { Icon } from '@iconify/react/dist/iconify.js'

import Chart from "react-apexcharts";

export default function TotalSales() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        name: 'Online store',
        type: 'column',
        data: [
          71, 71, 43, 72, 71, 82, 108, 108, 144, 142, 126, 108, 93, 79, 79, 79,
          64, 98, 102, 125, 137, 137, 102, 102, 74,
        ],
      },
      {
        name: 'Offline store',
        type: 'line',
        data: [
          71, 71, 43, 72, 71, 82, 108, 108, 144, 142, 126, 108, 93, 79, 79, 79,
          64, 98, 102, 125, 137, 137, 102, 102, 74,
        ],
      },
    ],
    chart: {
      height: 215,
      type: 'line',
      offsetX: -5,
      fontFamily: 'inherit',
      foreColor: `${activeMode === 'light' ? 'var(--color-black40)' : 'var(--color-white40)'
        }`,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 2],
    },
    grid: {
      show: false,
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 1,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    colors: ['var(--color-lightsuccess)', 'var(--color-success)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        [''],
        ['Jan'],
        [''],
        [''],
        ['Feb'],
        [''],
        [''],
        ['Mar'],
        [''],
        [''],
        ['Apr'],
        [''],
        [''],
        ['May'],
        [''],
        [''],
        ['Jun'],
        [''],
        [''],
        ['Jul'],
        [''],
        [''],
        ['Aug'],
        [''],
        [''],
        ['Sep'],
        [''],
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: `${activeMode === 'light' ? 'light' : 'dark'}`,
    },
    legend: {
      show: false,
    },
  }

  const dropdownItems = ['2025', '2024', '2023']
  return (
    <CardBox>
      <div className='flex flex-col gap-0'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center lg:flex-nowrap flex-wrap lg:gap-0 gap-2 justify-between pb-5 border-b border-border dark:border-darkborder'>
            <div className='flex flex-col gap-1'>
              <p className='text-base font-normal'>Total Sales</p>
              <div className='flex items-center gap-2'>
                <h3 className='text-2xl font-semibold'>$12,150.00</h3>
                <Badge color='lightsuccess' size='xs'>
                  +22%
                </Badge>
                <p className='text-xs font-normal'>compared to last year</p>
              </div>
            </div>
            <Select required className='form-control select-option'>
              {dropdownItems.map((items, index) => {
                return <option key={index}>{items}</option>
              })}
            </Select>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Icon
                  icon='solar:global-line-duotone'
                  width={20}
                  height={20}
                  className='text-muted dark:text-lightgray'
                />
                <p className='text-sm font-medium leading-none text-link dark:text-darklink'>
                  Online store
                </p>
              </div>
              <div className='flex items-center gap-1'>
                <h6 className='text-sm font-medium leading-none'>$8,750.00</h6>
                <Badge color='lightsuccess' size='xs'>
                  +10%
                </Badge>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Icon
                  icon='solar:home-angle-line-duotone'
                  width={20}
                  height={20}
                  className='text-muted dark:text-lightgray'
                />
                <p className='text-link dark:text-darklink text-sm font-medium leading-none'>
                  Offline store
                </p>
              </div>
              <div className='flex items-center gap-1'>
                <h6 className='text-sm font-medium leading-none'>$3,700.00</h6>
                <Badge color='lighterror' size='xs'>
                  -5%
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[215px]'>
          <Chart
            options={ChartData}
            series={ChartData.series}
            width='100%'
            height='215px'
            type='line'
          />
        </div>
      </div>
    </CardBox>
  )
}
