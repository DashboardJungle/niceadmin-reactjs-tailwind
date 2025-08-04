import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartLinelinear from './code/LinearCode'
import ChartLinelinearCode from './code/LinearCode.tsx?raw'

const ChartLineLinear = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Linear</h4>
          <ChartLinelinear />
        </div>
        <CodeDialog>{ChartLinelinearCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartLineLinear
