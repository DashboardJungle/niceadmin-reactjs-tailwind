

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/shadcn-ui/Default-Ui/chart'

export const description = 'A radar chart with a grid and circle fill'

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 285 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 203 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 264 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export default function ChartRadarGridCircleFillCode() {
  return (
    <>
      <ChartContainer config={chartConfig}>
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarGrid
            className='fill-(--color-secondary) opacity-20'
            gridType='circle'
          />
          <PolarAngleAxis dataKey='month' />
          <Radar
            dataKey='desktop'
            fill='var(--color-primary)'
            fillOpacity={0.5}
          />
        </RadarChart>
      </ChartContainer>
    </>
  )
}
