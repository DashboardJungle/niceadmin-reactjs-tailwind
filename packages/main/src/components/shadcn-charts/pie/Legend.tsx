import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartPielegend from './code/LegendCode'
import ChartPielegendCode from './code/LegendCode.tsx?raw'

const ChartPieLegend = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Legend</h4>
          <ChartPielegend />
        </div>
        <CodeDialog>{ChartPielegendCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartPieLegend
