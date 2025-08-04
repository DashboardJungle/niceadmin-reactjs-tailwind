import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadardots from './code/DotsCode'
import ChartRadardotsCode from './code/DotsCode.tsx?raw'

const ChartRadarDots = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Dots</h4>
          <ChartRadardots />
        </div>
        <CodeDialog>{ChartRadardotsCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarDots
