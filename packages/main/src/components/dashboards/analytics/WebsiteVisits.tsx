import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Badge, Select } from 'flowbite-react'
import CardBox from '../../shared/CardBox'
import { v4 as uuidv4 } from 'uuid'

import Chart from "react-apexcharts";

export default function WebsiteVisits() {
  const { activeMode } = useContext(CustomizerContext)

  const ChartData: any = {
    series: [
      {
        name: 'Site A',
        data: [31, 43, 24, 36, 24, 13, 28, 38, 41, 29, 31, 23],
      },
      {
        name: 'Site B',
        data: [31, 43, 24, 36, 24, 13, 28, 38, 41, 29, 31, 23],
      },
    ],
    chart: {
      type: 'bar',
      height: 265,
      stacked: true,
      offsetX: -5,
      toolbar: {
        show: false,
      },
      foreColor: `${activeMode === 'light' ? 'var(--color-black40)' : 'var(--color-white40)'
        }`,
      fontFamily: 'inherit',
      sparkline: {
        enabled: false,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [5],
        columnWidth: '32%',
        barHeight: '20%',
      },
    },
    grid: {
      borderColor: '#90A4AE50',
      strokeDashArray: 3,
    },
    colors: ['var(--color-primary)', 'var(--color-secondary)'],
    fill: {
      type: 'solid',
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: function (value: number) {
          return value / 10 + 'k'
        },
        style: {
          fontSize: '12px',
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: `${activeMode === 'light' ? 'light' : 'dark'}`,
    },
  }

  const Countries = [
    {
      id: uuidv4(),
      title: 'Site A',
      color: 'bg-primary',
    },
    {
      id: uuidv4(),
      title: 'Site B',
      color: 'bg-secondary',
    },
  ]

  const dropdownItems = ['2025', '2024', '2023']

  return (
    <CardBox>
      <div className='flex flex-col justify-between gap-2'>
        <div className='flex items-center justify-between flex-wrap lg:gap-0 gap-2'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-semibold'>Website visits</h3>
            <div className='flex items-center gap-2'>
              <h3 className='text-28 leading-tight font-semibold'>8,150</h3>
              <Badge color='lightsuccess' size='xs'>
                +18%
              </Badge>
              <span className='text-xs text-black/60 dark:text-white/40'>
                than last year
              </span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-3'>
              {Countries.map((item) => (
                <div key={item.id} className='flex items-center gap-2'>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                  <span className='text-sm'>{item.title}</span>
                </div>
              ))}
              <Select required className='form-control select-option'>
                {dropdownItems.map((items, index) => {
                  return <option key={index}>{items}</option>
                })}
              </Select>
            </div>
          </div>
        </div>
        <div className='h-[300px]'>
          <Chart
            options={ChartData}
            series={ChartData.series}
            type='bar'
            height='300px'
            width='100%'
          />
        </div>
      </div>
    </CardBox>
  )
}
