

import BasicTabs from 'src/components/headless-ui/Tabs/BasicTabs'
import VerticalTabs from 'src/components/headless-ui/Tabs/VerticalTabs'
import DisableTab from 'src/components/headless-ui/Tabs/DisableTab'
import MannuallActiveTab from 'src/components/headless-ui/Tabs/MannuallActiveTab'
import SpecifiedTab from 'src/components/headless-ui/Tabs/SpecifiedTab'
import ListingForChangeTab from 'src/components/headless-ui/Tabs/ListingForChangeTab'
import ControllTabSelect from 'src/components/headless-ui/Tabs/ControllTabSelect'
import RenderAsElementTab from 'src/components/headless-ui/Tabs/RenderAsElementTab'
import Intro from 'src/components/component-page/shared/Intro'



const intro = {
  heading: 'Tabs',
  desc: 'Tabs are a UI component that organizes content into separate views, allowing users to switch between them.',
}

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-5 sm:gap-30'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        <div className='col-span-12'>
          <BasicTabs />
        </div>
        <div className='col-span-12'>
          <VerticalTabs />
        </div>
        <div className='col-span-12'>
          <DisableTab />
        </div>
        <div className='col-span-12'>
          <MannuallActiveTab />
        </div>
        <div className='col-span-12'>
          <SpecifiedTab />
        </div>
        <div className='col-span-12'>
          <ListingForChangeTab />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <ControllTabSelect />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <RenderAsElementTab />
        </div>
      </div>
    </>
  )
}

export default page
