
import CardBox from '../../shared/CardBox'
import OutlinePillButton from './Code/OutlinePillButtonCode'
import OutlinePillButtonCode from './Code/OutlinePillButtonCode.tsx?raw'
import CodeDialog from '../../shared/CodeDialog'

const RoundedOutline = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>
              Rounded Outlined Buttons
            </h4>
            <OutlinePillButton />
          </div>
          <CodeDialog>{OutlinePillButtonCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default RoundedOutline
