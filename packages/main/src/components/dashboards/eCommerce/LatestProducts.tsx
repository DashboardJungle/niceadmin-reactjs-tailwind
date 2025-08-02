


import CardBox from '../../shared/CardBox'
import product_1 from 'src/assets/images/products/latest-products/product-1.jpg'
import product_2 from 'src/assets/images/products/latest-products/product-2.jpg'
import product_3 from 'src/assets/images/products/latest-products/product-3.jpg'
import product_4 from 'src/assets/images/products/latest-products/product-4.jpg'

export default function LatestProducts() {
  interface product {
    id: string
    img: string
    productName: string
    value: string
  }

  const latestProducts: product[] = [
    {
      id: '1',
      img: product_1,
      productName: 'Wireless Charging Pad',
      value: '$75.00',
    },
    {
      id: '2',
      img: product_2,
      productName: 'Ergonomic Office Chair',
      value: '$350.00',
    },
    {
      id: '3',
      img: product_3,
      productName: 'Smart Home Camera',
      value: '$180.00',
    },
    {
      id: '4',
      img: product_4,
      productName: 'Bluetooth Soundbar',
      value: '$200.00',
    },
  ]
  return (
    <>
      <CardBox>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-semibold'>Latest Products</h4>
          <div className='flex flex-col'>
            {latestProducts.map((product) => (
              <div
                key={product.id}
                className='py-3 flex items-center justify-between border-b border-border dark:border-darkborder'>
                <div className='flex items-center gap-3'>
                  <img
                    src={product.img}
                    alt='product_image'
                    className='w-10 h-10 rounded-lg'
                  />
                  <h6 className='text-sm font-medium'>{product.productName}</h6>
                </div>
                <p className='text-sm font-normal'>{product.value}</p>
              </div>
            ))}
          </div>
        </div>
      </CardBox>
    </>
  )
}
