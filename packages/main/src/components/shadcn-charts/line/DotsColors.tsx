import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartLineDotscolors from './code/DotsColorsCode'
import ChartLineDotscolorsCode from './code/DotsColorsCode.tsx?raw'

const ChartLineDotsColors = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Dots Colors</h4>
          <ChartLineDotscolors />
        </div>
        <CodeDialog>{ChartLineDotscolorsCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartLineDotsColors
