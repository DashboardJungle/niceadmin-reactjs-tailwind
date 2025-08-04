
import Intro from 'src/components/component-page/shared/Intro'
import BasicButton from 'src/components/shadcn-ui/Button/BasicButton'
import OutlineButton from 'src/components/shadcn-ui/Button/OutlineButton'
import GhostButton from 'src/components/shadcn-ui/Button/GhostButton'
import ButtonWithIcon from 'src/components/shadcn-ui/Button/ButtonWithIcon'
import LoadingButton from 'src/components/shadcn-ui/Button/LoadingButton'


const intro = {
  heading: 'Buttons',
  desc: 'A Button is a UI component used to trigger actions or events with a single click or tap.',
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
          <BasicButton />
        </div>
        <div className='col-span-12'>
          <OutlineButton />
        </div>
        <div className='col-span-12'>
          <GhostButton />
        </div>
        <div className='col-span-12'>
          <ButtonWithIcon />
        </div>
        <div className='col-span-12'>
          <LoadingButton />
        </div>
      </div>
    </>
  )
}

export default page
