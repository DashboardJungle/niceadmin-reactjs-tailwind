import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarmultiple from './code/MultipleCode'
import ChartRadarmultipleCode from './code/MultipleCode.tsx?raw'

const ChartRadarMultiple = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Multiple</h4>
          <ChartRadarmultiple />
        </div>
        <CodeDialog>{ChartRadarmultipleCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarMultiple
