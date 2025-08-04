import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartLinemultiple from './code/MultipleCode'
import ChartLinemultipleCode from './code/MultipleCode.tsx?raw'

const ChartLineMultiple = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Multiple</h4>
          <ChartLinemultiple />
        </div>
        <CodeDialog>{ChartLinemultipleCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartLineMultiple
