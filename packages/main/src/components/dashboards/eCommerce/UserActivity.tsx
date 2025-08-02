

import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'

import CardBox from '../../shared/CardBox'
import Chart from "react-apexcharts";

export default function UserActivity() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        name: 'Checkout',
        data: [48, 48, 69, 60, 90, 113, 49],
      },
      {
        name: 'Viewed',
        data: [35, 63, 77, 65, 51, 71, 61],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
      type: 'bar',
      height: 250,
      stacked: true,
      offsetX: -5,
      toolbar: {
        show: false,
      },
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
    colors: ['var(--color-primary)', 'var(--color-secondary)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '28%',
        borderRadius: [3],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [['M'], ['T'], ['W'], ['T'], ['F'], ['S'], ['S']],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
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

  return (
    <CardBox className='h-full'>
      <div className='flex flex-col gap-1 justify-between h-full'>
        <h5 className='text-lg font-semibold'>User Activity</h5>
        <div>
          <div className='rounded-bars'>
            <div className='h-[255px]'>
              <Chart
                options={ChartData}
                series={ChartData.series}
                type='bar'
                height='255px'
                width='100%'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-md bg-secondary'></span>
              <p className='text-xs font-normal'>Viewed</p>
            </div>
            <h6 className='text-base font-medium'>598,901</h6>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-md bg-primary'></span>
              <p className='text-xs font-normal'>Checkout</p>
            </div>
            <h6 className='text-base font-medium'>249,420</h6>
          </div>
        </div>
      </div>
    </CardBox>
  )
}
