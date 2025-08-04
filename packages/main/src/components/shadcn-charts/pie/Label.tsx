import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartPielabel from './code/LabelCode'
import ChartPielabelCode from './code/LabelCode.tsx?raw'

const ChartPieLabel = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Label</h4>
          <ChartPielabel />
        </div>
        <CodeDialog>{ChartPielabelCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartPieLabel
