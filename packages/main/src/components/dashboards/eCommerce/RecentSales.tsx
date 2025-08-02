
import { Icon } from '@iconify/react/dist/iconify.js'
import { Badge, Table, TableBody, TableCell, TableRow } from 'flowbite-react'
import { Link } from "react-router"
import { v4 as uuidv4 } from 'uuid'
import product_1 from 'src/assets/images/products/table-products/product-1.jpg'
import product_2 from 'src/assets/images/products/table-products/product-2.jpg'
import product_3 from 'src/assets/images/products/table-products/product-3.jpg'
import product_4 from 'src/assets/images/products/table-products/product-4.jpg'
import product_5 from 'src/assets/images/products/table-products/product-5.jpg'

import CardBox from '../../shared/CardBox'

export default function RecentSales() {
  const ProductSalesTableData = [
    {
      id: uuidv4(),
      img: product_1,
      product_name: 'LuxeSoft Memory Foam Pillow Set',
      customer: 'Emma Watson',
      Quantity: 3,
      statusColor: 'lighterror',
      status: 'pending',
      payment_method: 'Credit Card',
      payment_method_icon: 'solar:card-line-duotone',
      total_price: '$180.00',
    },
    {
      id: uuidv4(),
      img: product_2,
      product_name: 'Solar Desk Lamp with Matte Finish',
      customer: 'Michael Brown',
      Quantity: 2,
      statusColor: 'lightwarning',
      status: 'shipped',
      payment_method: 'UPI',
      payment_method_icon: 'solar:sort-horizontal-line-duotone',
      total_price: '$120.00',
    },
    {
      id: uuidv4(),
      img: product_3,
      product_name: 'Artisan Coffee Maker with Wood Finish',
      customer: 'Olivia Johnson',
      Quantity: 1,
      statusColor: 'lightsuccess',
      status: 'Delivered',
      payment_method: 'Cash on Delivery',
      payment_method_icon: 'solar:dollar-line-duotone',
      total_price: '$250.00',
    },
    {
      id: uuidv4(),
      img: product_4,
      product_name: 'Wireless Noise Canceling Earbuds',
      customer: 'Daniel Lee',
      Quantity: 2,
      statusColor: 'lightwarning',
      status: 'shipped',
      payment_method: 'UPI',
      payment_method_icon: 'solar:sort-horizontal-line-duotone',
      total_price: '$200.00',
    },
    {
      id: uuidv4(),
      img: product_5,
      product_name: 'Minimalist Glass Coffee Table',
      customer: 'Sophia Garcia',
      Quantity: 1,
      statusColor: 'lightsuccess',
      status: 'Delivered',
      payment_method: 'Cash on Delivery',
      payment_method_icon: 'solar:dollar-line-duotone',
      total_price: '$450.00',
    },
  ]

  return (
    <CardBox>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
          <h5 className='text-lg font-semibold'>Recent Sales Orders</h5>
          <Link
            to='/react-tables/order-datatable'
            className='text-sm font-medium'>
            View all orders
          </Link>
        </div>
        <div className='overflow-x-auto'>
          <div className='min-w-[1024px]'>
            <Table>
              <TableBody className='flex flex-col gap-5'>
                {ProductSalesTableData.map((item) => (
                  <TableRow
                    key={item.id}
                    className='rounded-md flex justify-between border border-border dark:border-darkborder'>
                    <TableCell className=' px-3 py-2.5 shrink-0 w-4/12 rounded-s'>
                      <div className='flex items-center gap-3'>
                        <img
                          src={item.img}
                          width={48}
                          height={48}
                          alt='product_image'
                          className='rounded-md'
                        />
                        <h6 className='text-sm font-medium max-w-40'>
                          {item.product_name}
                        </h6>
                      </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-3 py-2.5 shrink-0 w-2/12 flex items-center'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs font-normal'>Customer</p>
                        <h6 className='text-sm font-medium leading-snug'>
                          {item.customer}
                        </h6>
                      </div>
                    </TableCell>
                    <TableCell className='py-2.5 px-3 w-1/12 flex items-center'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs font-normal'>Qty</p>
                        <h6 className='text-sm font-medium leading-snug'>
                          {item.Quantity} Pcs
                        </h6>
                      </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-3 py-2.5 shrink-0 w-1/12 flex items-center'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs font-normal'>Status</p>
                        <Badge color={item.statusColor} size='xs'>
                          {item.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className='px-3 py-2.5 shrink-0 w-2/12 flex items-center'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs font-normal'>Payment Method</p>
                        <div className='flex items-center gap-2'>
                          <Icon
                            icon={item.payment_method_icon}
                            width={18}
                            height={18}
                          />
                          <h6 className='text-sm font-medium'>
                            {item.payment_method}
                          </h6>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-3 py-2.5 shrink-0 w-1/12 flex items-center'>
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs font-normal'>Total Price</p>
                        <h6 className='text-sm font-medium'>
                          {item.total_price}
                        </h6>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </CardBox>
  )
}
