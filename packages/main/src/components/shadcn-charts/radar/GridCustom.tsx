import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarGridcustom from './code/GridCustomCode'
import ChartRadarGridcustomCode from './code/GridCustomCode.tsx?raw'

const ChartRadarGridCustom = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Grid Custom</h4>
          <ChartRadarGridcustom />
        </div>
        <CodeDialog>{ChartRadarGridcustomCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarGridCustom
