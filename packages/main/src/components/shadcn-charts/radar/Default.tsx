import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadardefault from './code/DefaultCode'
import ChartRadardefaultCode from './code/DefaultCode.tsx?raw'

const ChartRadarDefault = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Default</h4>
          <ChartRadardefault />
        </div>
        <CodeDialog>{ChartRadardefaultCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarDefault
