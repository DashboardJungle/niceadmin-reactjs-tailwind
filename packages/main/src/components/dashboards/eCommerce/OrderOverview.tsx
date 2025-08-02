

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Select } from 'flowbite-react'
import CardBox from '../../shared/CardBox'

import Chart from "react-apexcharts";

export default function OrderOverview() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        color: 'var(--color-primary)',
        name: 'Total Sales',
        data: [5, 3, 4.5, 2, 3, 1, 0],
      },
      {
        color: 'var(--color-secondary)',
        name: 'Total Orders',
        data: [1, 2, 4, 3.5, 2, 4, 2],
      },
    ],
    dataLabels: {
      enabled: false,
    },
    chart: {
      fontFamily: 'inherit',
      foreColor: `${activeMode === 'light' ? 'var(--color-black40)' : 'var(--color-white40)'
        }`,
      height: 245,
      width: '100%',
      type: 'area',
      offsetX: -5,
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: '#90A4AE50',
    },
    stroke: {
      curve: 'monotoneCubic',
      width: 2,
    },
    colors: ['var(--color-primary)', 'var(--color-secondary)'],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: `${activeMode === 'light' ? 0.1 : 0.1}`,
        opacityTo: `${activeMode === 'light' ? 0 : 0.1}`,
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontSize: '12px',
        },
      },
      type: 'category',
      categories: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul'],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (value: string) {
          return value + 'k'
        },
        style: {
          fontSize: '12px',
        },
      },
    },
    tooltip: {
      theme: `${activeMode === 'light' ? 'light' : 'dark'}`,
    },
  }

  const dropdownItems = ['2025', '2024', '2023']

  return (
    <CardBox>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h5 className='text-lg font-semibold'>Order Overview</h5>
          <Select required className='form-control select-option'>
            {dropdownItems.map((items, index) => {
              return <option key={index}>{items}</option>
            })}
          </Select>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center'>
            <div className='pe-6 border-e border-border dark:border-darkborder'>
              <div className='flex flex-col gap-1'>
                <p className='text-xs font-normal'>Total Sales</p>
                <h5 className='text-2xl font-semibold'>$25,320</h5>
              </div>
            </div>
            <div className='ps-6'>
              <div className='flex flex-col gap-1'>
                <p className='text-xs font-normal'>Orders</p>
                <h5 className='text-2xl font-semibold'>1,235</h5>
              </div>
            </div>
          </div>
          <div className='h-[245px]'>
            <Chart
              options={ChartData}
              series={ChartData.series}
              width='100%'
              type='area'
              height='245px'
            />
          </div>
        </div>
      </div>
    </CardBox>
  )
}
