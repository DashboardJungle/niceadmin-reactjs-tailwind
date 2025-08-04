

import DefaultButtons from 'src/components/ui-components/Button/DefaultButtons'
import LightButtons from 'src/components/ui-components/Button/LightButtons'
import RoundedOutline from 'src/components/ui-components/Button/RoundedOutline'
import SquareButton from 'src/components/ui-components/Button/SquareButton'
import ButtonSizesPill from 'src/components/ui-components/Button/ButtonSizesPill'
import ButtonSizesSquare from 'src/components/ui-components/Button/ButtonSizeSquare'
import ButtonWithIcon from 'src/components/ui-components/Button/ButtonWithIcon'
import ButtonLoading from 'src/components/ui-components/Button/ButtonLoading'
import ComponentApi from 'src/components/ui-components/ComponentApi'
import Intro from 'src/components/component-page/shared/Intro'



const intro = {
  heading: 'Buttons',
  desc: 'A Button is a UI component used to trigger actions or events.',
}

const allApis = [
  {
    id: '1',
    prop: 'color',
    description: 'Sets the background and text color of the button.',
    type: `"primary" | "secondary" | "success" | "info"`,
    default: `"default"`,
  },
  {
    id: '2',
    prop: 'size',
    description: 'Controls the size of the button.',
    type: `"xs" | "sm" | "md" | "lg" | "xl"`,
    default: `"md"`,
  },
  {
    id: '3',
    prop: 'pill',
    description: 'Applies full rounding to make the button pill-shaped.',
    type: `"true" | "false"`,
    default: `false`,
  },
  {
    id: '4',
    prop: 'outline',
    description:
      'Renders the button with an outline style instead of solid background.',
    type: `"true" | "false"`,
    default: `false`,
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
        {/* Basic */}
        <div className='col-span-12'>
          <DefaultButtons />
        </div>
        {/* Light */}
        <div className='col-span-12'>
          <LightButtons />
        </div>
        {/* Rounded Outline */}
        <div className='col-span-12'>
          <RoundedOutline />
        </div>
        {/* Square Outline */}
        <div className='col-span-12'>
          <SquareButton />
        </div>
        {/* Button Sizes Pill */}
        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
          <ButtonSizesPill />
        </div>
        {/* Button Sizes Suare */}
        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
          <ButtonSizesSquare />
        </div>
        {/* Button With Icon */}
        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
          <ButtonWithIcon />
        </div>
        {/* Loading Button */}
        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
          <ButtonLoading />
        </div>
        {/* Api */}
        <div className='col-span-12'>
          <ComponentApi allApis={allApis} componentName='Button' />
        </div>
      </div>
    </>
  )
}

export default page
