

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/shadcn-ui/Default-Ui/chart'

export const description = 'A stacked area chart with expand stacking'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80, other: 45 },
  { month: 'February', desktop: 305, mobile: 200, other: 100 },
  { month: 'March', desktop: 237, mobile: 120, other: 150 },
  { month: 'April', desktop: 73, mobile: 190, other: 50 },
  { month: 'May', desktop: 209, mobile: 130, other: 100 },
  { month: 'June', desktop: 214, mobile: 140, other: 160 },
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
  other: {
    label: 'Other',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig

export default function ChartAreaStackedExpandCode() {
  return (
    <>
      <div>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
            }}
            stackOffset='expand'>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <Area
              dataKey='other'
              type='natural'
              fill='var(--color-lightprimary)'
              fillOpacity={1}
              stroke='var(--color-lightprimary)'
              stackId='a'
            />
            <Area
              dataKey='mobile'
              type='natural'
              fill='var(--color-secondary)'
              fillOpacity={0.4}
              stroke='var(--color-secondary)'
              stackId='a'
            />
            <Area
              dataKey='desktop'
              type='natural'
              fill='var(--color-primary)'
              fillOpacity={0.4}
              stroke='var(--color-primary)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </>
  )
}
