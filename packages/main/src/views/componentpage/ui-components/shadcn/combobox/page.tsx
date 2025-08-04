
import Intro from 'src/components/component-page/shared/Intro'
import BasicCombobox from 'src/components/shadcn-ui/Combobox/BasicCombobox'
import PopoverCombobox from 'src/components/shadcn-ui/Combobox/PopoverCombobox'
import DropdownCombobox from 'src/components/shadcn-ui/Combobox/DropdownCombobox'
import FormCombo from 'src/components/shadcn-ui/Combobox/FormCombo'



const intro = {
  heading: 'Combobox',
  desc: 'A Combobox is a UI component that combines a text input with a dropdown list of selectable options.',
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
          <BasicCombobox />
        </div>
        <div className='col-span-12'>
          <PopoverCombobox />
        </div>
        <div className='col-span-12'>
          <DropdownCombobox />
        </div>
        <div className='col-span-12'>
          <FormCombo />
        </div>
      </div>
    </>
  )
}

export default page
