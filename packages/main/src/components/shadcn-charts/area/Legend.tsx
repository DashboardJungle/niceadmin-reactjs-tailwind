import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartArealegend from './code/LegendCode'
import ChartArealegendCode from './code/LegendCode.tsx?raw'

const ChartAreaLegend = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Legend</h4>
          <ChartArealegend />
        </div>
        <CodeDialog>{ChartArealegendCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartAreaLegend
