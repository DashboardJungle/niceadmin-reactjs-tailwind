import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadialshape from './code/ShapeCode'
import ChartRadialshapeCode from './code/ShapeCode.tsx?raw'

const ChartRadialShape = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Shape</h4>
          <ChartRadialshape />
        </div>
        <CodeDialog>{ChartRadialshapeCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadialShape
