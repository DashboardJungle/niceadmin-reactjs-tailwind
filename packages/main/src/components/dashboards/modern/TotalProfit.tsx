

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Badge } from 'flowbite-react'
import CardBox from '../../shared/CardBox'

import Chart from "react-apexcharts";

export default function TotalProfit() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        name: 'Total Profit',
        data: [44, 31, 45, 59, 51, 42, 30],
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
    colors: ['var(--color-secondary)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '61%',
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
          <p className='text-sm font-normal'>Total Profit</p>
          <div className='flex flex-col gap-2'>
            <h3 className='text-2xl font-semibold'>$15,486.80</h3>
            <div className='flex items-center gap-2'>
              <p className='text-sm font-normal'>-$680</p>
              <Badge color='lighterror' size='xs'>
                -14%
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
            width='65%'
          />
        </div>
      </div>
    </CardBox>
  )
}
