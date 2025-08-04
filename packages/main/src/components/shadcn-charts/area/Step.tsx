import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartAreastep from './code/StepCode'
import ChartAreastepCode from './code/StepCode.tsx?raw'

const ChartAreaStep = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Step</h4>
          <ChartAreastep />
        </div>
        <CodeDialog>{ChartAreastepCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartAreaStep
