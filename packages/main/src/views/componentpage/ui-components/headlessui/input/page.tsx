

import InputWithLabel from 'src/components/headless-form/Input/InputWithLabel'
import SquareInputWithLabel from 'src/components/headless-form/Input/SquareInputWithLabel'
import InputWithDescription from 'src/components/headless-form/Input/InputWithDescription'
import DisabledInput from 'src/components/headless-form/Input/DisableInput'
import Intro from 'src/components/component-page/shared/Intro'


const intro = {
  heading: 'Input',
  desc: 'An Input is a UI component that allows users to enter text or data into a form field.',
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
          <InputWithLabel />
        </div>
        <div className='col-span-12'>
          <SquareInputWithLabel />
        </div>
        <div className='col-span-12'>
          <InputWithDescription />
        </div>
        <div className='col-span-12'>
          <DisabledInput />
        </div>
      </div>
    </>
  )
}

export default page
