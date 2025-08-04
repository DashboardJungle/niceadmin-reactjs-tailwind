
import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import FlushAccordian from './Code/FlushAccordiancode'
import FlushAccordiancode from './Code/FlushAccordiancode.tsx?raw'


const FlushAccordianComponent  = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Accordian Flush</h4>
            <FlushAccordian />
          </div>
          <CodeDialog>{FlushAccordiancode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default FlushAccordianComponent 
