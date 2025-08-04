import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartBardefault from './code/DefaultCode'
import ChartBardefaultCode from './code/DefaultCode.tsx?raw'

const ChartBarDefault = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Default</h4>
          <ChartBardefault />
        </div>
        <CodeDialog>{ChartBardefaultCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartBarDefault
