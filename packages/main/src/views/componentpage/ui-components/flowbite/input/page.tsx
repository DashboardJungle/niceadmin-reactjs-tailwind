import Intro from 'src/components/component-page/shared/Intro'
import InputSizing from 'src/components/form-components/Form-Elements/InputSizing'
import DisableInputs from 'src/components/form-components/Form-Elements/DisableInputs'
import InputShadow from 'src/components/form-components/Form-Elements/InputShadow'
import InputWithIcon from 'src/components/form-components/Form-Elements/InputWithIcon'
import FormValidation from 'src/components/form-components/Form-Elements/FormValidation'
import TextAreaEle from 'src/components/form-components/Form-Elements/TextArea'
import SelectInput from 'src/components/form-components/Form-Elements/SelectInput'
import FileUploadEle from 'src/components/form-components/Form-Elements/FileUploadEle'
import FileUploadSizings from 'src/components/form-components/Form-Elements/FileUploadSizings'
import DropZone from 'src/components/form-components/Form-Elements/DropZone'
import InputColors from 'src/components/form-components/Form-Elements/InputColors'



const intro = {
  heading: 'Input',
  desc: 'An Input is a UI component used to collect text or data from the user.',
}

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* input size */}
        <div className='lg:col-span-6 col-span-12'>
          <InputSizing />
        </div>
        {/* disabled */}
        <div className='lg:col-span-6 col-span-12'>
          <DisableInputs />
        </div>
        {/* input with shadow */}
        <div className='lg:col-span-6 col-span-12'>
          <InputShadow />
        </div>
        {/* input group with icon */}
        <div className='lg:col-span-6 col-span-12'>
          <InputWithIcon />
        </div>
        {/* form validation */}
        <div className='lg:col-span-6 col-span-12'>
          <FormValidation />
        </div>
        {/* text area */}
        <div className='lg:col-span-6 col-span-12'>
          <TextAreaEle />
        </div>
        {/* default select */}
        <div className='lg:col-span-6 col-span-12'>
          <SelectInput />
        </div>
        {/* default file upload */}
        <div className='lg:col-span-6 col-span-12'>
          <FileUploadEle />
        </div>
        {/* file upload sizes */}
        <div className='lg:col-span-6 col-span-12'>
          <FileUploadSizings />
        </div>
        {/* file upload dropzone */}
        <div className='lg:col-span-6 col-span-12'>
          <DropZone />
        </div>
        {/* input colors */}
        <div className='col-span-12'>
          <InputColors />
        </div>
      </div>
    </>
  )
}

export default page
