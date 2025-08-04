import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadialtext from './code/TextCode'
import ChartRadialtextCode from './code/TextCode.tsx?raw'

const ChartRadialText = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Text</h4>
          <ChartRadialtext />
        </div>
        <CodeDialog>{ChartRadialtextCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadialText
