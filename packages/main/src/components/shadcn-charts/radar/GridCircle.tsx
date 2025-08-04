import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarGridcircle from './code/GridCircleCode'
import ChartRadarGridcircleCode from './code/GridCircleCode.tsx?raw'

const ChartRadarGridCircle = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Grid Circle</h4>
          <ChartRadarGridcircle />
        </div>
        <CodeDialog>{ChartRadarGridcircleCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarGridCircle
