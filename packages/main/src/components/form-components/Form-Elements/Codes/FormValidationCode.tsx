import { HelperText, Label, TextInput } from 'flowbite-react'

const FormValidationCode = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='username3' color='success'>
              Your name
            </Label>
          </div>
          <TextInput
            id='username'
            placeholder='Bonnie Green'
            required
            color='success'
          />
          <HelperText color='success'>
            <span className='font-medium'>Alright!</span> Username available!
          </HelperText>
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='username4' color='failure'>
              Your name
            </Label>
          </div>
          <TextInput
            id='username4'
            placeholder='Bonnie Green'
            required
            color='failure'
          />
          <HelperText color='failure'>
            <span className='font-medium'>Oops!</span> Username already taken!
          </HelperText>
        </div>
      </div>
    </>
  )
}

export default FormValidationCode
