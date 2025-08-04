import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartPieLabellist from './code/LabelListCode'
import ChartPieLabellistCode from './code/LabelListCode.tsx?raw'

const ChartPieLabelList = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Label List</h4>
          <ChartPieLabellist />
        </div>
        <CodeDialog>{ChartPieLabellistCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartPieLabelList
