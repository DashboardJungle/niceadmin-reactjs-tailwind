

import BasicTextarea from 'src/components/headless-form/Textarea/BasicTextarea'
import WithLabelTextarea from 'src/components/headless-form/Textarea/WithLabel'
import WithDescriptionTextarea from 'src/components/headless-form/Textarea/WithDescriptionTextarea'
import DisableTextarea from 'src/components/headless-form/Textarea/DisableTextArea'
import Intro from 'src/components/component-page/shared/Intro'



const intro = {
  heading: 'Textarea',
  desc: 'A Textarea is a UI component that allows users to enter and edit multi-line text.',
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
          <BasicTextarea />
        </div>
        <div className='col-span-12'>
          <WithLabelTextarea />
        </div>
        <div className='col-span-12'>
          <WithDescriptionTextarea />
        </div>
        <div className='col-span-12'>
          <DisableTextarea />
        </div>
      </div>
    </>
  )
}

export default page
