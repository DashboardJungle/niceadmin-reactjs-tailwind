import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartBarlabel from './code/LabelCode'
import ChartBarlabelCode from './code/LabelCode.tsx?raw'

const ChartBarLabel = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Label</h4>
          <ChartBarlabel />
        </div>
        <CodeDialog>{ChartBarlabelCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartBarLabel
