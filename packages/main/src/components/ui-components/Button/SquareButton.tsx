
import CardBox from '../../shared/CardBox'
import OutlineSqrButton from './Code/OutlineSqrButtton'
import OutlineSqrButtonCode from './Code/OutlineSqrButtton.tsx?raw'
import CodeDialog from '../../shared/CodeDialog'

const SquareButton = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>
              Square Outlined Buttons
            </h4>
            <OutlineSqrButton />
          </div>
          <CodeDialog>{OutlineSqrButtonCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default SquareButton
