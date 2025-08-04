import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarLabelcustom from './code/CustomLabelCode'
import ChartRadarLabelcustomCode from './code/CustomLabelCode.tsx?raw'

const ChartRadarLabelCustom = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Custom Label</h4>
          <ChartRadarLabelcustom />
        </div>
        <CodeDialog>{ChartRadarLabelcustomCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarLabelCustom
