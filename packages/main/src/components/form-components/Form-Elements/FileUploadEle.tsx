import { Label, FileInput, HelperText } from 'flowbite-react'

import CardBox from '../../shared/CardBox'

const FileUploadEle = () => {
  return (
    <div className='h-full'>
      <CardBox className='h-full'>
        <h4 className='text-lg font-semibold mb-2'>File Upload</h4>
        <div id='fileUpload' className='max-w-md'>
          <div className='mb-2 block'>
            <Label htmlFor='file'>Upload file</Label>
          </div>
          <FileInput id='file' />
          <HelperText>
            A profile picture is useful to confirm your are logged into your
            account
          </HelperText>
        </div>
      </CardBox>
    </div>
  )
}

export default FileUploadEle
