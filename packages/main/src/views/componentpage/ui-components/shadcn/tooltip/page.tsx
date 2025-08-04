
import Intro from 'src/components/component-page/shared/Intro'
import BasicTooltip from 'src/components/shadcn-ui/Tooltip/BasicTooltip'


const intro = {
  heading: 'Tooltip',
  desc: 'A Tooltip is a UI component that shows brief, contextual information when users hover or focus on an element.',
}

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-5 sm:gap-30'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className='col-span-12'>
          <BasicTooltip />
        </div>
      </div>
    </>
  )
}

export default page
