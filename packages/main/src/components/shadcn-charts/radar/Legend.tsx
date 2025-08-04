import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarlegend from './code/LegendCode'
import ChartRadarlegendCode from './code/LegendCode.tsx?raw'

const ChartRadarLegend = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Legend</h4>
          <ChartRadarlegend />
        </div>
        <CodeDialog>{ChartRadarlegendCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarLegend
