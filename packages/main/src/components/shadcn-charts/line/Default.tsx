import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartLinedefault from './code/DefaultCode'
import ChartLinedefaultCode from './code/DefaultCode.tsx?raw'

const ChartLineDefault = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Default</h4>
          <ChartLinedefault />
        </div>
        <CodeDialog>{ChartLinedefaultCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartLineDefault
