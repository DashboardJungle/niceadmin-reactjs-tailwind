import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartBarhorizontal from './code/HorizontalCode'
import ChartBarhorizontalCode from './code/HorizontalCode.tsx?raw'

const ChartBarHorizontal = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Horizontal</h4>
          <ChartBarhorizontal />
        </div>
        <CodeDialog>{ChartBarhorizontalCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartBarHorizontal
