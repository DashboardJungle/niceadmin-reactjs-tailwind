

import Default from 'src/components/ui-components/Badge/Default'
import LightBadges from 'src/components/ui-components/Badge/LightBadges'
import LinkBadges from 'src/components/ui-components/Badge/LinkBadges'
import BadgesWithIconText from 'src/components/ui-components/Badge/BadgesWithIconText'
import IconBadge from 'src/components/ui-components/Badge/IconBadge'
import BadgeSizes from 'src/components/ui-components/Badge/BadgeSizes'
import ComponentApi from 'src/components/ui-components/ComponentApi'
import Intro from 'src/components/component-page/shared/Intro'



const intro = {
  heading: 'Badge',
  desc: 'A Badge is a UI component used to display statuses, notifications, or labels.',
}

const allApis = [
  {
    id: '1',
    prop: 'color',
    description: 'Sets the color of the badge.',
    type: `"primary" | "success" | "danger" | "warning"`,
    default: `"default"`,
  },
  {
    id: '2',
    prop: 'icon',
    description:
      'Adds an icon component inside the badge, usually displayed before the text.',
    type: `"HiCheck" | "HiOutlineExclamation"`,
    default: '-',
  },
  {
    id: '3',
    prop: 'size',
    description: 'Controls the size of the badge including icon and text.',
    type: `"xs" | "sm"`,
    default: `"sm"`,
  },
]

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
          <Default />
        </div>
        {/* Light */}
        <div className='col-span-12'>
          <LightBadges />
        </div>
        {/* Link */}
        <div className='col-span-12'>
          <LinkBadges />
        </div>
        {/* Icon & Text */}
        <div className='col-span-12'>
          <BadgesWithIconText />
        </div>
        {/* Icon*/}
        <div className='col-span-12'>
          <IconBadge />
        </div>
        {/* Sizes*/}
        <div className='col-span-12'>
          <BadgeSizes />
        </div>
        {/* Api */}
        <div className='col-span-12'>
          <ComponentApi allApis={allApis} componentName='Badge' />
        </div>
      </div>
    </>
  )
}

export default page
