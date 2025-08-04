import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadiallabel from './code/LabelCode'
import ChartRadiallabelCode from './code/LabelCode.tsx?raw'

const ChartRadialLabel = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Label</h4>
          <ChartRadiallabel />
        </div>
        <CodeDialog>{ChartRadiallabelCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadialLabel
