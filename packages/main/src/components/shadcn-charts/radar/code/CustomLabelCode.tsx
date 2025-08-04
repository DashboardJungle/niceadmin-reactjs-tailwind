

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/shadcn-ui/Default-Ui/chart'

export const description = 'A radar chart with a custom label'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

export default function ChartRadarLabelCustomCode() {
  return (
    <>
      <ChartContainer config={chartConfig}>
        <RadarChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator='line' />}
          />
          <PolarAngleAxis
            dataKey='month'
            tick={({ x, y, textAnchor, value, index, ...props }) => {
              const data = chartData[index]

              return (
                <text
                  x={x}
                  y={index === 0 ? y - 10 : y}
                  textAnchor={textAnchor}
                  fontSize={13}
                  fontWeight={500}
                  {...props}>
                  <tspan className='fill-link dark:fill-darklink'>
                    {data.desktop}
                  </tspan>
                  <tspan className='fill-link dark:fill-darklink'>/</tspan>
                  <tspan className='fill-link dark:fill-darklink'>
                    {data.mobile}
                  </tspan>
                  <tspan
                    x={x}
                    dy={'1rem'}
                    fontSize={12}
                    className='fill-muted dark:fill-darkmuted'>
                    {data.month}
                  </tspan>
                </text>
              )
            }}
          />

          <PolarGrid />
          <Radar
            dataKey='desktop'
            fill='var(--color-primary)'
            fillOpacity={0.6}
          />
          <Radar dataKey='mobile' fill='var(--color-secondary)' />
        </RadarChart>
      </ChartContainer>
    </>
  )
}
