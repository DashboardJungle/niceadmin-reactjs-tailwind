
import Tooltipstyle from 'src/components/ui-components/Tooltip/Code/TooltipStyleCode'
import TooltipstyleCode from 'src/components/ui-components/Tooltip/Code/TooltipStyleCode.tsx?raw'
import CodeDialog from '../../shared/CodeDialog'
import CardBox from 'src/components/shared/CardBox'

const TooltipStyle = () => {
  return (
    <div>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Tooltip Styles</h4>
            <Tooltipstyle />
          </div>
          <CodeDialog>{TooltipstyleCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  )
}

export default TooltipStyle
