import { Label, FileInput } from 'flowbite-react'

import CardBox from '../../shared/CardBox'

const FileUploadSizings = () => {
  return (
    <div>
      <CardBox>
        <h4 className='text-lg font-semibold mb-2'>File Upload Sizing</h4>
        <div>
          <div className='my-5'>
            <div className='pb-2'>
              <Label htmlFor='small-file-upload'>Small file input</Label>
            </div>
            <FileInput id='small-file-upload' sizing='sm' />
          </div>
          <div className='mb-5'>
            <div className='pb-2'>
              <Label htmlFor='default-file-upload'>
                Default size file input
              </Label>
            </div>
            <FileInput id='default-file-upload' />
          </div>
          <div>
            <div className='pb-2'>
              <Label htmlFor='large-file-upload'>Large file input</Label>
            </div>
            <FileInput id='large-file-upload' sizing='lg' />
          </div>
        </div>
      </CardBox>
    </div>
  )
}

export default FileUploadSizings
