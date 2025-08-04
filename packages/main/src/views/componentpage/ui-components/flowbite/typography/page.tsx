

import HeadingsTyp from 'src/components/ui-components/Typography/HeadingsTyp'
import BlockOutTypo from 'src/components/ui-components/Typography/BlockOutTypo'
import SolidBgTypo from 'src/components/ui-components/Typography/SolidBgTypo'
import BlockQtIconTypo from 'src/components/ui-components/Typography/BlockQtIconTypo'
import ParagraphTypo from 'src/components/ui-components/Typography/ParagraphTypo'
import ReviewTypo from 'src/components/ui-components/Typography/ReviewTypo'
import AlignLeftTypo from 'src/components/ui-components/Typography/AlignLeftTypo'
import AlignRightTypo from 'src/components/ui-components/Typography/AlignRightTypo'
import SmallSizeTypo from 'src/components/ui-components/Typography/SmallSizeTypo'
import MediumSizeTypo from 'src/components/ui-components/Typography/MediumSizeTypo'
import LargeSizeTypo from 'src/components/ui-components/Typography/LargeSizeTypo'
import DefaultListTypo from 'src/components/ui-components/Typography/DefaultListTypo'
import IconListTypo from 'src/components/ui-components/Typography/IconListTypo'
import NestedTypo from 'src/components/ui-components/Typography/NestedTypo'
import UnstyledTypo from 'src/components/ui-components/Typography/UnstyledTypo'
import OrderTypo from 'src/components/ui-components/Typography/OrderTypo'
import HorizontalListTypo from 'src/components/ui-components/Typography/HorizontalListTypo'
import Intro from 'src/components/component-page/shared/Intro'


const intro = {
  heading: 'Typography',
  desc: 'Typography is a UI component used to style and format text for better readability and visual hierarchy.',
}

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* Headings Typo */}
        <div className='col-span-12'>
          <HeadingsTyp />
        </div>
        <div className='col-span-12'>
          <BlockOutTypo />
        </div>
        <div className='col-span-12'>
          <SolidBgTypo />
        </div>
        <div className='col-span-12'>
          <BlockQtIconTypo />
        </div>
        <div className='col-span-12'>
          <ParagraphTypo />
        </div>
        <div className='col-span-12'>
          <ReviewTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <AlignLeftTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <AlignRightTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <SmallSizeTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <MediumSizeTypo />
        </div>
        <div className='col-span-12'>
          <LargeSizeTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <DefaultListTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <IconListTypo />
        </div>
        <div className='col-span-12'>
          <NestedTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <UnstyledTypo />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <OrderTypo />
        </div>
        <div className='col-span-12'>
          <HorizontalListTypo />
        </div>
      </div>
    </>
  )
}

export default page
