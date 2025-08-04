import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarGridnone from './code/GridNoneCode'
import ChartRadarGridnoneCode from './code/GridNoneCode.tsx?raw'

const ChartRadarGridNone = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Grid None</h4>
          <ChartRadarGridnone />
        </div>
        <CodeDialog>{ChartRadarGridnoneCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarGridNone
