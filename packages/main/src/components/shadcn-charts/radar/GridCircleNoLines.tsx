import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarGridCircleNolines from './code/GridCircleNoLinesCode'
import ChartRadarGridCircleNolinesCode from './code/GridCircleNoLinesCode.tsx?raw'

const ChartRadarGridCircleNoLines = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Grid Circle - No lines</h4>
          <ChartRadarGridCircleNolines />
        </div>
        <CodeDialog>{ChartRadarGridCircleNolinesCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarGridCircleNoLines
