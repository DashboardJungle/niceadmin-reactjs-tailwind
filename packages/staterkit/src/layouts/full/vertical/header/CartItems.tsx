
import { Icon } from '@iconify/react/dist/iconify.js'
import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'

const CartItems = () => {
  const { setIsCartDrawerOpen } = useContext(CustomizerContext)

  return (
    <>
      <button
        onClick={() => setIsCartDrawerOpen(true)}
        className='hover:text-primary dark:hover:text-primary relative after:absolute after:w-10 after:h-10 after:rounded-full  hover:after:bg-lightprimary dark:hover:after:bg-darkprimary flex justify-center items-center cursor-pointer dark:text-white'>
        <Icon
          icon='solar:cart-large-minimalistic-line-duotone'
          height={24}
          width={24}
        />
      </button>
    </>
  )
}

export default CartItems
