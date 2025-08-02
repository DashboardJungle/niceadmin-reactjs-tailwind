
import CardBox from '../../shared/CardBox'
import {
  Badge,

  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,

} from 'flowbite-react'

import { Table } from 'flowbite-react'

import emily from 'src/assets/images/topprojects/emily.svg'
import jason from 'src/assets/images/topprojects/jason.svg'
import ryan from 'src/assets/images/topprojects/ryan.svg'
import olivia from 'src/assets/images/topprojects/olivia.svg'
import SimpleBar from 'simplebar-react'
import { v4 as uuidv4 } from 'uuid'


export default function RecentOrders() {
  const ProductTableData = [
    {
      id: uuidv4(),
      project: 'Modernize',
      productImg: emily,
      name: 'Emily Carter',
      role: 'Project Manager',
      timeline: '4–6 weeks',
      budget: '$10K',
      statustext: 'On track',
      statuscolor: 'lightwarning',
    },
    {
      id: uuidv4(),
      project: 'Spike Admin',
      productImg: jason,
      name: 'Jason Miller',
      role: 'Web Developer',
      timeline: '6–8 weeks',
      budget: '$40K',
      statustext: 'Delayed',
      statuscolor: 'lighterror',
    },
    {
      id: uuidv4(),
      project: 'Material Pro',
      productImg: ryan,
      name: 'Ryan Scott',
      role: 'UI/UX Designer',
      timeline: '3–5 weeks',
      budget: '$25K',
      statustext: 'Submitted',
      statuscolor: 'lightsuccess',
    },
    {
      id: uuidv4(),
      project: 'Xtreme Admin',
      productImg: olivia,
      name: 'Olivia Williams',
      role: 'Frontend Developer',
      timeline: '2–4 weeks',
      budget: '$8K',
      statustext: 'Submitted',
      statuscolor: 'lightsuccess',
    },
  ]

  return (
    <CardBox>
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-semibold leading-none'>Recent Orders</h4>
        <SimpleBar className='max-h-[450px]'>
          <div className='overflow-x-auto'>
            <div className='min-w-[550px]'>
              <Table>
                <TableHead className='border-b border-border dark:border-darkborder'>
                  <TableRow>
                    <TableHeadCell className='py-2.5 px-3 text-sm font-normal text-link dark:text-darklink'>
                      Project
                    </TableHeadCell>
                    <TableHeadCell className='py-2.5 px-3 text-sm font-normal text-link dark:text-darklink'>
                      Assigned
                    </TableHeadCell>
                    <TableHeadCell className='py-2.5 px-3 text-sm font-normal text-link dark:text-darklink'>
                      Timeline
                    </TableHeadCell>
                    <TableHeadCell className='py-2.5 px-3 text-sm font-normal text-link dark:text-darklink'>
                      Budget
                    </TableHeadCell>
                    <TableHeadCell className='py-2.5 px-3 text-sm font-normal text-link dark:text-darklink'>
                      Status
                    </TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ProductTableData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className='whitespace-nowrap px-3 py-2.5'>
                        <h4 className='text-sm font-medium'>{item.project}</h4>
                      </TableCell>
                      <TableCell className='whitespace-nowrap px-3 py-2.5'>
                        <div className='flex items-center gap-2'>
                          <img
                            src={item.productImg}
                            className='rounded-full bg-black/20 dark:bg-white/20 pt-0.5'
                            alt='product-img'
                            width={32}
                            height={32}
                          />
                          <div className='flex flex-col'>
                            <h6 className='text-sm font-medium'>{item.name}</h6>
                            <p className='text-sm font-normal'>{item.role}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className='py-2.5 px-3'>
                        <h4 className='text-sm font-medium'>{item.timeline}</h4>
                      </TableCell>
                      <TableCell className='whitespace-nowrap px-3 py-2.5'>
                        <h4 className='text-sm font-medium'>{item.budget}</h4>
                      </TableCell>
                      <TableCell className='px-3 py-2.5'>
                        <Badge color={item.statuscolor} size='xs'>
                          {item.statustext}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </SimpleBar>
      </div>
    </CardBox>
  )
}
