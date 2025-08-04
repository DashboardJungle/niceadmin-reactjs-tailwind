import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartBarmultiple from './code/MultipleCode'
import ChartBarmultipleCode from './code/MultipleCode.tsx?raw'

const ChartBarMultiple = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Multiple</h4>
          <ChartBarmultiple />
        </div>
        <CodeDialog>{ChartBarmultipleCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartBarMultiple
