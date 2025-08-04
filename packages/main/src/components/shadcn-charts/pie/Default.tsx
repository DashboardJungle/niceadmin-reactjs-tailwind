import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartPiesimple from './code/DefaultCode'
import ChartPiesimpleCode from './code/DefaultCode.tsx?raw'

const ChartPieSimple = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Default</h4>
          <ChartPiesimple />
        </div>
        <CodeDialog>{ChartPiesimpleCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartPieSimple
