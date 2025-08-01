
import {

  Button,
  Drawer,
  DrawerItems,


} from 'flowbite-react'
import { useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import 'simplebar-react/dist/simplebar.min.css'
import SimpleBar from 'simplebar-react'

import product1 from 'src/assets/images/products/product-1.jpg'
import product2 from 'src/assets/images/products/product-2.jpg'
import product3 from 'src/assets/images/products/product-3.jpg'
import { CustomizerContext } from 'src/context/CustomizerContext'
import { Link } from 'react-router'



export function CartDrawer() {
  const { isCartDrawerOpen, setIsCartDrawerOpen } =
    useContext(CustomizerContext)
  const handleClose = () => setIsCartDrawerOpen(false)
  const [prodQuant1, SetProdQuant1] = useState(5)
  const [prodQuant2, SetProdQuant2] = useState(2)
  const [prodQuant3, SetProdQuant3] = useState(4)

  const handleQuantity = (productType: string, actionType: string) => {
    if (productType === 'product1') {
      if (actionType === 'inc') {
        SetProdQuant1(prodQuant1 + 1)
      } else {
        if (prodQuant1 > 0) {
          SetProdQuant1(prodQuant1 - 1)
        }
      }
    } else if (productType === 'product2') {
      if (actionType === 'inc') {
        SetProdQuant2(prodQuant2 + 1)
      } else {
        if (prodQuant1 > 0) {
          SetProdQuant2(prodQuant2 - 1)
        }
      }
    } else {
      if (actionType === 'inc') {
        SetProdQuant3(prodQuant3 + 1)
      } else {
        if (prodQuant1 > 0) {
          SetProdQuant3(prodQuant3 - 1)
        }
      }
    }
  }

  useEffect(() => {
    if (isCartDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartDrawerOpen])


  const CartProducts = [
    {
      key: 'prod1',
      img: product1,
      title: 'Supreme toys cooker',
      desc: 'Kitchenware Item',
      price: '$250',
      quantity: prodQuant1,
      productType: 'product1',
    },
    {
      key: 'prod2',
      img: product2,
      title: 'Supreme toys cooker',
      desc: 'Kitchenware Item',
      price: '$250',
      quantity: prodQuant2,
      productType: 'product2',
    },
    {
      key: 'prod3',
      img: product3,
      title: 'Supreme toys cooker',
      desc: 'Kitchenware Item',
      price: '$250',
      quantity: prodQuant3,
      productType: 'product3',
    },
  ]
  return (
    <Drawer
      open={isCartDrawerOpen}
      onClose={handleClose}
      position='right'
      className='w-82'>
      <DrawerItems>
        <SimpleBar className='h-[calc(100vh-85px)]'>
          <div className='py-6 px-4 flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>Shopping Cart</h3>
            <button
              onClick={() => handleClose()}
              className='p-2 rounded-full hover:cursor-pointer hover:bg-lightprimary dark:hover:bg-primaryemphasis hover:text-primary dark:hover:text-white'>
              <Icon icon={'tabler:x'} width={16} height={16} />
            </button>
          </div>
          <div className='px-6'>
            {CartProducts.map((item) => {
              return (
                <div key={item.key} className='grid grid-cols-12 gap-5 mb-30'>
                  <div className='col-span-4'>
                    <img
                      src={item.img}
                      alt='product'
                      className='rounded-md '
                    />
                  </div>
                  <div className='col-span-8'>
                    <h4 className='text-sm font-medium mb-1'>{item.title}</h4>
                    <p className='text-xs text-link dark:text-darklink'>
                      {item.desc}
                    </p>
                    <div className='flex mt-3 items-center justify-between'>
                      <p className='font-semibold text-xs text-link dark:text-darklink'>
                        {item.price}
                      </p>
                      <div className='flex'>
                        <button
                          onClick={() => {
                            handleQuantity(item.productType, 'dec')
                          }}
                          className='w-5 h-5 bg-lightsuccess hover:bg-success hover:text-white text-success flex cursor-pointer justify-center items-center rounded-l-xs'>
                          <Icon icon='tabler:minus' width={12} />
                        </button>
                        <div className='w-8 h-5 flex items-center justify-center font-semibold text-xs text-link dark:text-darklink'>
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => {
                            handleQuantity(item.productType, 'inc')
                          }}
                          className='w-5 h-5 bg-lightsuccess text-success hover:bg-success hover:text-white flex cursor-pointer justify-center items-center rounded-r-xs'>
                          <Icon icon='tabler:plus' width={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className='flex justify-between items-center mb-30'>
              <p className='font-normal text-sm text-link dark:text-darklink'>
                Sub Total
              </p>
              <span className='font-semibold text-sm text-link dark:text-darklink'>
                $2530
              </span>
            </div>
            <div className='flex justify-between items-center mb-30'>
              <p className='font-normal text-sm text-link dark:text-darklink'>
                Total
              </p>
              <span className='font-semibold text-sm text-link dark:text-darklink'>
                $6830
              </span>
            </div>
            <Button
              color={'outlineprimary'}
              as={Link}
              to='/'
              className='w-full rounded-md text-base!'>
              Go to shopping cart
            </Button>
          </div>
        </SimpleBar>
      </DrawerItems>
    </Drawer>
  )
}
