

import CardBox from '../../shared/CardBox'
import { Badge } from 'flowbite-react'
import Chart from "react-apexcharts";
import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'

export default function CustomerSegmentation() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    color: '#adb5bd',
    series: [60, 20, 20],
    labels: ['2.758', '350', '458'],
    chart: {
      height: 183,
      type: 'donut',
      fontFamily: 'inherit',
      foreColor: `${activeMode === 'light' ? 'var(--color-black40)' : 'var(--color-white40)'
        }`,
    },
    stroke: {
      show: true,
      colors: `${activeMode === 'light' ? 'var(--color-white)' : 'var(--color-dark)'
        }`,
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: [
      'var(--color-primary)',
      'var(--color-warning',
      'var(--color-secondary',
    ],

    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: function (w: { globals: { seriesTotals: any[] } }) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
              },
            },
          },
        },
      },
    },

    tooltip: {
      theme: `${activeMode === 'light' ? 'light' : 'dark'}`,
      fillSeriesColor: false,
    },
  }
  const CustomerSegmentation = [
    {
      id: uuidv4(),
      customer: 'Small Business',
      tagColor: 'border-primary',
      badgeColor: 'lightsuccess',
      customerNumbers: 1650,
      growthPercentage: '+4.7%',
    },
    {
      id: uuidv4(),
      customer: 'Enterprise',
      tagColor: 'border-warning',
      badgeColor: 'lightsuccess',
      customerNumbers: 350,
      growthPercentage: '+2.1%',
    },
    {
      id: uuidv4(),
      customer: 'Individuals',
      tagColor: 'border-secondary',
      badgeColor: 'lighterror',
      customerNumbers: 458,
      growthPercentage: '-1.7%',
    },
  ]
  return (
    <CardBox className='h-full'>
      <div className='flex flex-col justify-between h-full gap-6'>
        <h4 className='text-lg font-semibold'>Customer Segmentation</h4>
        <div className='h-[183px]'>
          <Chart
            options={ChartData}
            series={ChartData.series}
            type='donut'
            height='183px'
            width='100%'
          />
        </div>
        <div className='flex flex-col gap-3'>
          {CustomerSegmentation.map((item) => (
            <div key={item.id} className='flex items-center justify-between'>
              <h6
                className={`ps-2 border-s-2 ${item.tagColor} text-sm font-medium leading-tight`}>
                {item.customer}
              </h6>
              <div className='flex items-center gap-1'>
                <h6 className='text-sm font-medium'>{item.customerNumbers}</h6>
                <Badge color={item.badgeColor} size='xs'>
                  {item.growthPercentage}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardBox>
  )
}
