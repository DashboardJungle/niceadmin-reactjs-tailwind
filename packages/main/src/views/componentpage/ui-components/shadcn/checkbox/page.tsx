

import CheckboxWithLable from 'src/components/shadcn-form/Checkbox/CheckboxWithLable'
import DefaultChecked from 'src/components/shadcn-form/Checkbox/DefaultChecked'
import DisabledCehckboxes from 'src/components/shadcn-form/Checkbox/DisabledCehckboxes'
import FormCheckbox from 'src/components/shadcn-form/Checkbox/FormCheckbox'
import CheckboxWithText from 'src/components/shadcn-form/Checkbox/CheckboxWithText'
import Intro from 'src/components/component-page/shared/Intro'

const intro = {
  heading: 'Checkbox',
  desc: 'A Checkbox is a UI component that lets users select one or multiple options from a set.',
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
          <CheckboxWithLable />
        </div>
        <div className='col-span-12'>
          <DefaultChecked />
        </div>
        <div className='col-span-12'>
          <DisabledCehckboxes />
        </div>
        <div className='col-span-12'>
          <FormCheckbox />
        </div>
        <div className='col-span-12'>
          <CheckboxWithText />
        </div>
      </div>
    </>
  )
}

export default page
