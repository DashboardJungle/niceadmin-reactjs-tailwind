

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Badge } from 'flowbite-react'
import CardBox from '../../shared/CardBox'

import Chart from "react-apexcharts";

export default function TotalOrders() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        name: 'Total Sales A',
        data: [70, 100, 110, 105, 40, 140, 150, 140, 120, 110],
      },
      {
        name: 'Total Sales B',
        data: [30, 30, 20, 30, 60, 20, 30, 20, 50, 60],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
      type: 'bar',
      height: 80,
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      'var(--color-primary)',
      `${activeMode === 'light'
        ? 'var(--color-lightprimary)'
        : 'var(--color-darkprimary)'
      }`,
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '30%',
        columnWidth: '55%',
        borderRadius: [3],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
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
    <CardBox>
      <div className='flex gap-6 items-start justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-normal'>Total Sales</p>
          <div className='flex flex-col gap-2'>
            <h3 className='text-2xl font-semibold'>$40,650.20</h3>
            <div className='flex items-center gap-2'>
              <p className='text-sm font-normal'>+$1,470</p>
              <Badge color='lightsuccess' size='xs'>
                +18%
              </Badge>
            </div>
          </div>
        </div>
        <div>
          <Chart
            options={ChartData}
            series={ChartData.series}
            type='bar'
            height='80px'
            width='70%'
          />
        </div>
      </div>
    </CardBox>
  )
}
