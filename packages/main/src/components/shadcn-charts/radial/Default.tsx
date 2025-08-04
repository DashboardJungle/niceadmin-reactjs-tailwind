import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadialsimple from './code/DefaultCode'
import ChartRadialsimpleCode from './code/DefaultCode.tsx?raw'

const ChartRadialSimple = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Default</h4>
          <ChartRadialsimple />
        </div>
        <CodeDialog>{ChartRadialsimpleCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadialSimple
