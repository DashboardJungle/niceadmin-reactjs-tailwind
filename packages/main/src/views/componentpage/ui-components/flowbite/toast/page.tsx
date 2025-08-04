


import DefaultToast from 'src/components/ui-components/Toast/DefaultToast'
import TostWithButton from 'src/components/ui-components/Toast/TostWithIButton'
import InteractiveToast from 'src/components/ui-components/Toast/InteractiveToast'
import ToastColors from 'src/components/ui-components/Toast/ToastColors'
import FeedbackToast from 'src/components/ui-components/Toast/FeedbackToast'
import DismissalToast from 'src/components/ui-components/Toast/DismissalToast'
import Intro from 'src/components/component-page/shared/Intro'



const intro = {
  heading: 'Toast',
  desc: 'A Toast is a UI component that brief notification that appears temporarily to inform users of events or actions.',
}

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className='col-span-12'>
          <DefaultToast />
        </div>
        {/* Toast With Button */}
        <div className='col-span-12'>
          <TostWithButton />
        </div>
        {/* Interactive Toast */}
        <div className='col-span-12'>
          <InteractiveToast />
        </div>
        {/* ToastColors */}
        <div className='col-span-12'>
          <ToastColors />
        </div>
        {/* Feedback Toast */}
        <div className='col-span-12'>
          <FeedbackToast />
        </div>
        {/* Dismissal Toast*/}
        <div className='col-span-12'>
          <DismissalToast />
        </div>
      </div>
    </>
  )
}

export default page
