import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartAreaicons from './code/IconsCode'
import ChartAreaiconsCode from './code/IconsCode.tsx?raw'

const ChartAreaIcons = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Icons</h4>
          <ChartAreaicons />
        </div>
        <CodeDialog>{ChartAreaiconsCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartAreaIcons
