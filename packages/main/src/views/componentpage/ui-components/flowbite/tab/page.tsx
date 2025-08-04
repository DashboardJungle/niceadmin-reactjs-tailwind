

import DefaultTabs from 'src/components/ui-components/Tabs/DefaultTabs'
import UnderlineTabs from 'src/components/ui-components/Tabs/UnderlineTabs'
import TabsWithPill from 'src/components/ui-components/Tabs/TabsWithPill'
import FullWidthTabs from 'src/components/ui-components/Tabs/FullWidthTabs'
import StateTabs from 'src/components/ui-components/Tabs/StateTabs'
import ComponentApi from 'src/components/ui-components/ComponentApi'
import Intro from 'src/components/component-page/shared/Intro'

const intro = {
  heading: 'Tabs',
  desc: 'Tabs are a UI component used to organize content into separate views that can be switched between within the same space.',
}

const allApis = [
  {
    id: '1',
    prop: 'variant',
    description: 'Sets the tab style variant.',
    type: `'default' | 'underline' | 'pills' | 'fullWidth'`,
    default: `'default'`,
  },
  {
    id: '2',
    prop: 'icon',
    description: 'Pass the icon prop to add an icon to the tab item.',
    type: `'HiAdjustments' | 'HiClipboardList'`,
    default: `-`,
  },
]

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className='col-span-12'>
          <DefaultTabs />
        </div>
        {/* Underline Tabs */}
        <div className='col-span-12'>
          <UnderlineTabs />
        </div>
        {/* Tabs With Pill */}
        <div className='col-span-12'>
          <TabsWithPill />
        </div>
        {/* Full Width Tabs */}
        <div className='col-span-12'>
          <FullWidthTabs />
        </div>
        {/* State Tabs */}
        <div className='col-span-12'>
          <StateTabs />
        </div>
        {/* Api */}
        <div className='col-span-12'>
          <ComponentApi allApis={allApis} componentName='Tabs' />
        </div>
      </div>
    </>
  )
}

export default page
