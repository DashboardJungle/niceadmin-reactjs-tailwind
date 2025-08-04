

import DefaultSelect from 'src/components/shadcn-form/Select/DefaultSelect'
import ScrollableSelect from 'src/components/shadcn-form/Select/ScrollableSelect'
import FormSelect from 'src/components/shadcn-form/Select/FormSelect'
import Intro from 'src/components/component-page/shared/Intro'

const intro = {
  heading: 'Select',
  desc: 'A Select is a UI component that lets users choose one or more options from a dropdown list.',
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
          <DefaultSelect />
        </div>
        <div className='col-span-12'>
          <ScrollableSelect />
        </div>
        <div className='col-span-12'>
          <FormSelect />
        </div>
      </div>
    </>
  )
}

export default page
