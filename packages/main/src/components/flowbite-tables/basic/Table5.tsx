

import {
  Badge,
  Table,
  Dropdown,
  DropdownItem,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react'

import * as basicTable5 from 'src/components/flowbite-tables/tableData'


import { IconDots } from '@tabler/icons-react'
import { Icon } from '@iconify/react'

const BasicTable5 = () => {
  /*Table Action*/
  const tableActionData = [
    {
      icon: 'solar:add-circle-outline',
      listtitle: 'Add',
    },
    {
      icon: 'solar:pen-new-square-broken',
      listtitle: 'Edit',
    },
    {
      icon: 'solar:trash-bin-minimalistic-outline',
      listtitle: 'Delete',
    },
  ]
  return (
    <>
      <div className='border rounded-md border-ld overflow-hidden'>
        <div className='overflow-x-auto'>
          <Table className=''>
            <TableHead>
              <TableRow>
                <TableHeadCell className='text-base font-semibold py-3'>
                  Authors
                </TableHeadCell>
                <TableHeadCell className='text-base font-semibold py-3'>
                  Courses
                </TableHeadCell>
                <TableHeadCell className='text-base font-semibold py-3'>
                  Users
                </TableHeadCell>
                <TableHeadCell className='text-base font-semibold py-3'></TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody className='divide-y divide-border dark:divide-darkborder'>
              {basicTable5.basicTableData5.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='whitespace-nowrap'>
                    <div className='flex gap-3 items-center'>
                      <img
                        src={item.avatar}
                        alt='icon'
                        className='h-10 w-10 rounded-md'
                      />
                      <div className='truncate line-clamp-2 max-w-56'>
                        <h6 className='text-base'>{item.name}</h6>
                        <p className='text-sm'>{item.handle}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className='whitespace-nowrap'>
                    <div className='flex gap-2'>
                      {item.courses.map((crs, crsIndex) => (
                        <Badge
                          key={crsIndex}
                          color={`light${crs.statuscolor}`}
                          className='capitalize'>
                          {crs.status}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>

                  <TableCell className='whitespace-nowrap'>
                    <p className='text-sm'>{item.users}</p>
                  </TableCell>

                  <TableCell className='whitespace-nowrap'>
                    <Dropdown
                      label=''
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className='btn-circle-hover'>
                          <IconDots size={22} />
                        </span>
                      )}>
                      {tableActionData.map((items, actionIndex) => (
                        <DropdownItem key={actionIndex} className='flex gap-3'>
                          <Icon icon={items.icon} height={18} />
                          <span>{items.listtitle}</span>
                        </DropdownItem>
                      ))}
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default BasicTable5
