

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Icon } from '@iconify/react/dist/iconify.js'
import CardBox from '../../shared/CardBox'

import Chart from "react-apexcharts";

export default function WrappixelStore() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        color: 'var(--color-primary)',
        name: 'Total Sales A',
        data: [2, 10, 50, 40, 70, 30, 35, 75, 90, 55, 70, 60, 80, 95, 100],
      },
      {
        color: `${activeMode === 'light'
          ? 'var(--color-border)'
          : 'var(--color-darkborder)'
          }`,
        name: 'Total Sales B',
        data: [1, 5, 25, 20, 35, 15, 17, 37, 45, 23, 35, 30, 40, 43, 50],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
      stacked: false,
      fontFamily: 'inherit',
      foreColor: '#626b81',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ['var(--color-primary)', 'var(--color-primary)'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
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
        min: 0,
        max: 100,
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
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: `${activeMode === 'light' ? 0.1 : 0.4}`,
        opacityTo: `${activeMode === 'light' ? 0 : 0.1}`,
      },
    },
    stroke: {
      curve: 'monotoneCubic',
      width: '2',
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
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
  }

  return (
    <CardBox className='h-full'>
      <div className='flex flex-col justify-between gap-2 h-full'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-normal'>Total Sales</p>
          <h5 className='text-lg font-semibold leading-tight'>
            WrapPixel Store
          </h5>
        </div>
        <div className='flex items-center gap-10'>
          <div className='flex flex-col gap-1 self-end shrink-0'>
            <h5 className='text-28 leading-tight font-semibold'>$68,789.56</h5>
            <div className='flex items-center gap-1'>
              <span className='w-5 h-5 rounded-full bg-lightsuccess dark:bg-lightsuccess text-success flex items-center justify-center'>
                <Icon
                  icon='solar:arrow-up-line-duotone'
                  className='shrink-0'
                  width={14}
                  height={14}
                />
              </span>
              <p className='text-xs font-medium text-success'>+24.21%</p>
            </div>
          </div>
          <div>
            <div className='h-[85px]'>
              <Chart
                series={ChartData.series}
                options={ChartData}
                type='area'
                width='100%'
                height='85px'
              />
            </div>
          </div>
        </div>
      </div>
    </CardBox>
  )
}
