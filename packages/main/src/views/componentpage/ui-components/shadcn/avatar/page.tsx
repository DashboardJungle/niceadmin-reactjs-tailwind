import Intro from 'src/components/component-page/shared/Intro'

import BasicAvatar from 'src/components/shadcn-ui/Avatar/BasicAvatar'


const intro = {
  heading: 'Avatar',
  desc: 'An Avatar is a UI component that displays a user’s profile image or initials in a small, circular frame.',
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
          <BasicAvatar />
        </div>
      </div>
    </>
  )
}

export default page
