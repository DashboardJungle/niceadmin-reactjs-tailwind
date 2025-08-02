

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Badge } from 'flowbite-react'
import CardBox from '../../shared/CardBox'

import Chart from "react-apexcharts";

export default function AdvertisementCost() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    chart: {
      id: 'customers',
      type: 'area',
      height: 80,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
    },
    series: [
      {
        name: 'Users',
        color: 'var(--color-error)',
        data: [36, 45, 35, 47, 38, 43],
      },
    ],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      color: 'var(--color-error)',
      gradient: {
        opacityFrom: `${activeMode === 'light' ? 0.1 : 0.2}`,
        opacityTo: `${activeMode === 'light' ? 0 : 0.1}`,
      },
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: `${activeMode === 'light' ? 'light' : 'dark'}`,
      fixed: {
        enabled: true,
        position: 'right',
      },
      x: {
        show: false,
      },
    },
  }
  return (
    <CardBox>
      <div className='flex gap-6 items-start justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-normal'>Advertising costs</p>
          <div className='flex flex-col gap-2'>
            <h3 className='text-2xl font-semibold'>$2,982.60</h3>
            <div className='flex items-center gap-2'>
              <p className='text-sm font-normal'>+$179</p>
              <Badge color='lightsuccess' size='xs'>
                +16%
              </Badge>
            </div>
          </div>
        </div>
        <Chart
          options={ChartData}
          series={ChartData.series}
          type='area'
          height='80px'
          width='70%'
        />
      </div>
    </CardBox>
  )
}
