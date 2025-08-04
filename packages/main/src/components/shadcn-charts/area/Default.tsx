import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartAreadefault from './code/DefaultCode'
import ChartAreadefaultCode from './code/DefaultCode.tsx?raw'

const ChartAreaDefault = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Default</h4>
          <ChartAreadefault />
        </div>
        <CodeDialog>{ChartAreadefaultCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartAreaDefault
