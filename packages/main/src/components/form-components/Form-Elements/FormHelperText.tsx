import { HelperText, Label, TextInput } from 'flowbite-react'

import CardBox from '../../shared/CardBox'
import { Link } from 'react-router'


const FormHelperText = () => {
  return (
    <div>
      <CardBox>
        <h4 className='text-lg font-semibold mb-2'>Form Helper Text</h4>
        <div className='max-w-md'>
          <div className='mb-2 block'>
            <Label htmlFor='email3'>Your email</Label>
          </div>
          <TextInput
            id='email3'
            type='email'
            placeholder='name@niceadmin.com'
            required
            className='!form-control'
          />
          <HelperText>
            <span>We’ll never share your details. Read our</span>
            <Link
              to={'#'}
              className='ml-1 font-medium text-primary hover:underline dark:text-primary'>
              Privacy Policy
            </Link>
          </HelperText>
        </div>
      </CardBox>
    </div>
  )
}

export default FormHelperText
