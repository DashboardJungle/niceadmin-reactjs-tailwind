import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartLineLabelcustom from './code/CustomLabelCode'
import ChartLineLabelcustomCode from './code/CustomLabelCode.tsx?raw'

const ChartLineLabelCustom = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Custom Label</h4>
          <ChartLineLabelcustom />
        </div>
        <CodeDialog>{ChartLineLabelcustomCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartLineLabelCustom
