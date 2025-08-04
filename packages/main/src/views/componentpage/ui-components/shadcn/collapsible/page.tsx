
import Intro from 'src/components/component-page/shared/Intro'
import BasicCollapse from 'src/components/shadcn-ui/Collapsible/BasicCollapse'
import AdvanceCollapse from 'src/components/shadcn-ui/Collapsible/AdvanceCollapse'

const intro = {
  heading: 'Collapsible',
  desc: 'A Collapsible is a UI component that expands or hides content sections when toggled.',
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
          <BasicCollapse />
        </div>
        <div className='col-span-12'>
          <AdvanceCollapse />
        </div>
      </div>
    </>
  )
}

export default page
