import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartLinestep from './code/StepCode'
import ChartLinestepCode from './code/StepCode.tsx?raw'

const ChartLineStep = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Step</h4>
          <ChartLinestep />
        </div>
        <CodeDialog>{ChartLinestepCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartLineStep
