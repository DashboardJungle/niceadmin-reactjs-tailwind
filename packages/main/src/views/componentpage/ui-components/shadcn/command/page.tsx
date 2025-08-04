
import Intro from 'src/components/component-page/shared/Intro'
import BasicCommand from 'src/components/shadcn-ui/Command/BasicCommand'
import DialogCommand from 'src/components/shadcn-ui/Command/DialogCommand'



const intro = {
  heading: 'Command',
  desc: 'A Command is a UI component that provides a searchable list of actions or commands for quick access.',
}

const page = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-5 sm:gap-30'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className='col-span-12'>
          <BasicCommand />
        </div>
        <div className='col-span-12'>
          <DialogCommand />
        </div>
      </div>
    </div>
  )
}

export default page
