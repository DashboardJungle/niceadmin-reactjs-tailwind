


import DefaultMegamenu from 'src/components/ui-components/Megamenu/DefaultMegamenu'
import MegamenuWithIcons from 'src/components/ui-components/Megamenu/MegamenuWithIcons'
import FullWidthMegamenu from 'src/components/ui-components/Megamenu/FullWidthMegamenu'
import FullWidthCTA from 'src/components/ui-components/Megamenu/FullWidthCTA'
import FullWidthWithImage from 'src/components/ui-components/Megamenu/FullWidthWithImage'
import Intro from 'src/components/component-page/shared/Intro'


const intro = {
  heading: 'Megamenu',
  desc: 'A Megamenu is a UI component that displays a large, multi-column dropdown menu for easy access to many navigation options.',
}

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className='col-span-12'>
          <DefaultMegamenu />
        </div>
        {/* With Icons */}
        <div className='col-span-12'>
          <MegamenuWithIcons />
        </div>
        {/* Full Width Megamenu */}
        <div className='col-span-12'>
          <FullWidthMegamenu />
        </div>
        {/* Full Width CTA */}
        <div className='col-span-12'>
          <FullWidthCTA />
        </div>
        {/* Full Width with Image */}
        <div className='col-span-12'>
          <FullWidthWithImage />
        </div>
      </div>
    </>
  )
}

export default page
