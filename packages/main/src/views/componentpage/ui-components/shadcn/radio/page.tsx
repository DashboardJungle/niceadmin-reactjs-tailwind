

import DefaultRadio from 'src/components/shadcn-form/Radio/DefaultRadio'
import FormRadio from 'src/components/shadcn-form/Radio/FormRadio'
import Intro from 'src/components/component-page/shared/Intro'



const intro = {
  heading: 'Radio',
  desc: 'A Radio is a UI component that allows users to select a single option from a group.',
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
          <DefaultRadio />
        </div>
        <div className='col-span-12'>
          <FormRadio />
        </div>
      </div>
    </>
  )
}

export default page
