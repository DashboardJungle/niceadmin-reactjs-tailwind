

import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp'
import BasicSwitches from 'src/components/headless-form/Switch/BasicSwitches'
import DefaultOnSwitches from 'src/components/headless-form/Switch/DefaultOnSwitches'
import DisabledSwitches from 'src/components/headless-form/Switch/DisabledSwitches'
import WithLabelSwitch from 'src/components/headless-form/Switch/WithLabelSwitch'
import WithTransitionsSwitch from 'src/components/headless-form/Switch/WithTransitions'
import RenderSwitches from 'src/components/headless-form/Switch/RenderSwitches'



const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Switch',
  },
]

const page = () => {
  return (
    <>
      <BreadcrumbComp title='Switch' links={BCrumb} />
      <div className='grid grid-cols-12 gap-5 sm:gap-30'>
        <div className='col-span-12'>
          <BasicSwitches />
        </div>
        <div className='col-span-12'>
          <DefaultOnSwitches />
        </div>
        <div className='col-span-12'>
          <DisabledSwitches />
        </div>
        <div className='col-span-12'>
          <WithLabelSwitch />
        </div>
        <div className='col-span-12'>
          <WithTransitionsSwitch />
        </div>
        <div className='col-span-12'>
          <RenderSwitches />
        </div>
      </div>
    </>
  )
}

export default page
