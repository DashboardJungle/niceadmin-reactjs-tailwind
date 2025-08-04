
import CardBox from '../../shared/CardBox'
import { Button } from 'flowbite-react'

const ButtonSizesPill = () => {
  return (
    <>
      <CardBox>
        <div className='flex items-center justify-between mb-2'>
          <h4 className='text-lg font-semibold '>Button Pill Sizes</h4>
        </div>
        <div className='flex flex-wrap items-start gap-2 mt-2'>
          <Button size='xs' color={'primary'} pill>
            Extra small
          </Button>
          <Button size='sm' color={'secondary'} pill>
            Small
          </Button>
          <Button size='md' color={'error'} pill>
            Base
          </Button>
          <Button size='lg' color={'info'} pill>
            Large
          </Button>
          <Button size='xl' color={'warning'} pill>
            Extra large
          </Button>
        </div>
      </CardBox>
    </>
  )
}

export default ButtonSizesPill
