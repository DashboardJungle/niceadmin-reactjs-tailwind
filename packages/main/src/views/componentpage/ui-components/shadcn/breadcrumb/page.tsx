
import Intro from 'src/components/component-page/shared/Intro'
import BasicBreadcrumb from 'src/components/shadcn-ui/Breadcrumb/BasicBreadcrumb'
import BreadcrumbWithSeparator from 'src/components/shadcn-ui/Breadcrumb/BreadcrumbWithSeparator'
import BreadcrumbWithDropdown from 'src/components/shadcn-ui/Breadcrumb/BreadcrumbWithDropdown'
import BreadcrumbWithEllipsis from 'src/components/shadcn-ui/Breadcrumb/BreadcrumbWithEllipsis'

const intro = {
  heading: 'Breadcrumb',
  desc: 'A Breadcrumb is a UI component that shows the user’s navigation path within a website or app.',
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
          <BasicBreadcrumb />
        </div>
        <div className='col-span-12'>
          <BreadcrumbWithSeparator />
        </div>
        <div className='col-span-12'>
          <BreadcrumbWithDropdown />
        </div>
        <div className='col-span-12'>
          <BreadcrumbWithEllipsis />
        </div>
      </div>
    </>
  )
}

export default page
