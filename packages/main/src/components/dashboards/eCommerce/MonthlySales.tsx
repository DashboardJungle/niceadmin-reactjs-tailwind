

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Badge } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import { Icon } from '@iconify/react/dist/iconify.js'

import Chart from "react-apexcharts";

export default function MonthlySales() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        data: [39, 52, 39, 26],
      },
      {
        data: [25, 24, 25, 25],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
      type: 'bar',
      height: 85,
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ['var(--color-secondary)', 'var(--color-lightsuccess)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: [3],
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
        barGap: '0%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: `${activeMode === 'light' ? 'light' : 'dark'}`,
    },
    legend: {
      show: false,
    },
  }

  return (
    <CardBox className='bg-primary dark:bg-primary'>
      <div className='flex flex-col gap-6'>
        <div className='flex w-full justify-start '>
          <h6 className='text-lg w-[30%] text-white font-semibold leading-tight'>
            Monthly Sales
          </h6>
        </div>
        <div className='flex justify-between items-end gap-12'>
          <div className='flex flex-col gap-1 w-8/12'>
            <h3 className='text-28 leading-tight font-semibold text-white'>
              $27,064
            </h3>
            <div className='flex items-center gap-1'>
              <p className='text-sm text-darkmuted'>vs last month</p>
              <Badge color='lightsuccess' size='xs'>
                <div className='flex items-center'>
                  <Icon
                    icon='solar:arrow-up-line-duotone'
                    width={14}
                    height={14}
                    className='shrink-0'
                  />
                  +12%
                </div>
              </Badge>
            </div>
          </div>
          <div className='w-4/12 rounded-bars'>
            <div className='h-[85px]'>
              <Chart
                options={ChartData}
                series={ChartData.series}
                type='bar'
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
