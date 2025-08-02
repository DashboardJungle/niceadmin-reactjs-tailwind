
import CardBox from '../../shared/CardBox'
import {
  Checkbox,
  Dropdown,
  DropdownItem,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
  Progress,
} from 'flowbite-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/shadcn-ui/Default-Ui/select'
import { Icon } from '@iconify/react'
import { Table } from 'flowbite-react'

import SimpleBar from 'simplebar-react'
import { v4 as uuidv4 } from 'uuid'
import { useMemo, useState } from 'react'

export default function TrafficData() {
  const ProductTableData = [
    {
      id: uuidv4(),
      Source: 'Direct',
      Visits: '1300',
      BounceRate: '30%',
      Goal: 80,
      color: 'warning',
      bgcolor: 'lightwarning',
    },
    {
      id: uuidv4(),
      Source: 'Organic',
      Visits: '3000',
      BounceRate: '10%',
      Goal: 55,
      color: 'primary',
      bgcolor: 'lightprimary',
    },
    {
      id: uuidv4(),
      Source: 'Referral',
      Visits: '2000',
      BounceRate: '80%',
      Goal: 20,
      color: 'error',
      bgcolor: 'lighterror',
    },
    {
      id: uuidv4(),
      Source: 'Social Media',
      Visits: '3500',
      BounceRate: '20%',
      Goal: 95,
      color: 'success',
      bgcolor: 'lightsuccess',
    },
    {
      id: uuidv4(),
      Source: 'Email Campaign',
      Visits: '5000',
      BounceRate: '45%',
      Goal: 40,
      color: 'warning',
      bgcolor: 'lightwarning',
    },
  ]

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

  const dropdownItems = ['4', '5', '6']

  // tabel data sorting logic
  const [tableData, setTableData] = useState(ProductTableData)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  // display row control
  const [rowsPerPage, setRowsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)
  // search
  const [searchQuery, setSearchQuery] = useState('')
  // checkbox
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const filteredData = useMemo(() => {
    return tableData.filter((item) =>
      item.Source.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, tableData])

  const sortBySource = () => {
    const sorted = [...tableData].sort((a, b) =>
      sortOrder === 'asc'
        ? a.Source.localeCompare(b.Source)
        : b.Source.localeCompare(a.Source)
    )
    setTableData(sorted)
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const sortByVisit = () => {
    const sorted = [...tableData].sort((a, b) =>
      sortOrder === 'asc'
        ? a.Visits.localeCompare(b.Visits)
        : b.Visits.localeCompare(a.Visits)
    )
    setTableData(sorted)
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const sortByRate = () => {
    const sorted = [...tableData].sort((a, b) =>
      sortOrder === 'asc'
        ? a.BounceRate.localeCompare(b.BounceRate)
        : b.BounceRate.localeCompare(a.BounceRate)
    )
    setTableData(sorted)
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const sortByGoal = () => {
    const sorted = [...tableData].sort((a, b) =>
      sortOrder === 'asc' ? a.Goal - b.Goal : b.Goal - a.Goal
    )
    setTableData(sorted)
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const totalRows = filteredData.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  // Calculate visible data
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const visibleData = filteredData.slice(startIndex, endIndex)

  // checbox select
  const handleCheckboxChange = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const allVisibleIds = visibleData.map((item) => item.id)
  const isAllSelected =
    visibleData.length > 0 &&
    allVisibleIds.every((id) => selectedRows.includes(id))

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows((prev) =>
        prev.filter((id) => !allVisibleIds.includes(id))
      )
    } else {
      setSelectedRows((prev) => [...new Set([...prev, ...allVisibleIds])])
    }
  }

  return (
    <CardBox className='h-full'>
      <div className='flex items-center justify-between flex-wrap lg:gap-0 gap-2'>
        <h4 className='text-lg font-semibold'>Traffic data</h4>
        <div className='flex items-center'>
          <div className='flex items-center relative'>
            <Icon
              icon='solar:magnifer-line-duotone'
              height={18}
              width={18}
              className='absolute top-1/2 start-[15px] -translate-y-1/2'
            />
            <TextInput
              placeholder='Search...'
              className='form-control trans-input'
              sizing='md'
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              required
            />
          </div>
          <div>
            <Dropdown
              label=''
              dismissOnClick={false}
              className='overflow-hidden'
              renderTrigger={() => (
                <div className='flex justify-center items-center w-8 h-8 cursor-pointer border rounded-full border-transparent hover:border-border dark:hover:border-darkborder'>
                  <Icon
                    icon='flowbite:dots-vertical-solid'
                    className='text-black dark:text-lightgray shrink-0'
                    width={24}
                    height={24}
                  />
                </div>
              )}>
              {tableActionData.map((items, index) => (
                <DropdownItem
                  key={index}
                  className='flex gap-3 text-muted dark:text-lightgray dark:bg-black'>
                  <Icon icon={`${items.icon}`} height={18} />
                  <span>{items.listtitle}</span>
                </DropdownItem>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>
      <SimpleBar className='max-h-[450px]'>
        <div className='overflow-x-auto'>
          <Table hoverable>
            <TableHead className='border-b border-border dark:border-darkborder'>
              <TableRow>
                <TableHeadCell className='py-2.5 px-3 text-sm font-normal text-muted dark:text-lightgray'>
                  <Checkbox
                    className='checkbox'
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    disabled={visibleData.length === 0}
                  />
                </TableHeadCell>
                <TableHeadCell className='py-4 px-3 text-sm font-normal text-muted dark:text-lightgray'>
                  <div onClick={sortBySource} className='hover:cursor-pointer'>
                    <h6 className='flex items-center gap-1.5'>
                      Source
                      <span>
                        <Icon
                          icon={'solar:sort-vertical-line-duotone'}
                          width={18}
                          height={18}
                        />
                      </span>
                    </h6>
                  </div>
                </TableHeadCell>
                <TableHeadCell className='py-4 px-3 text-sm font-normal text-muted dark:text-lightgray'>
                  <div
                    onClick={sortByVisit}
                    className='hover:cursor-pointer group'>
                    <p className='flex items-center gap-1.5 group-hover:text-link dark:group-hover:text-darklink'>
                      Visits
                      <span className='w-5'>
                        <Icon
                          icon={'solar:sort-vertical-line-duotone'}
                          width={18}
                          height={18}
                          className='hidden group-hover:block'
                        />
                      </span>
                    </p>
                  </div>
                </TableHeadCell>
                <TableHeadCell className='py-4 px-2 text-sm font-normal text-muted dark:text-lightgray'>
                  <div
                    onClick={sortByRate}
                    className='hover:cursor-pointer group'>
                    <p className='flex items-center gap-1.5 group-hover:text-link dark:group-hover:text-darklink'>
                      Bounce Rate
                      <span className='w-5'>
                        <Icon
                          icon={'solar:sort-vertical-line-duotone'}
                          width={18}
                          height={18}
                          className='hidden group-hover:block'
                        />
                      </span>
                    </p>
                  </div>
                </TableHeadCell>
                <TableHeadCell className='py-4 px-3 text-sm font-normal text-muted dark:text-lightgray'>
                  <div
                    onClick={sortByGoal}
                    className='hover:cursor-pointer group'>
                    <p className='flex items-center gap-1.5 group-hover:text-link dark:group-hover:text-darklink'>
                      Goal (%)
                      <span className='w-5'>
                        <Icon
                          icon={'solar:sort-vertical-line-duotone'}
                          width={18}
                          height={18}
                          className='hidden group-hover:block'
                        />
                      </span>
                    </p>
                  </div>
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleData.map((item) => (
                <TableRow
                  key={item.id}
                  className={`border-b last:border-b-0 border-black/10 dark:border-white/10 ${selectedRows.includes(item.id)
                    ? 'bg-lightprimary dark:bg-darkprimary hover:bg-lightprimary hover:dark:bg-darkprimary'
                    : 'hover:bg-lightprimary hover:dark:bg-darkprimary hover:cursor-pointer'
                    }`}>
                  <TableCell className='whitespace-nowrap px-3 py-2.5'>
                    <Checkbox
                      className='checkbox'
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </TableCell>
                  <TableCell className='whitespace-nowrap px-3 py-4'>
                    <h6 className='text-sm font-medium'>{item.Source}</h6>
                  </TableCell>
                  <TableCell className='whitespace-nowrap px-3 py-4'>
                    <p className='text-sm font-normal text-muted dark:text-lightgray'>
                      {item.Visits}
                    </p>
                  </TableCell>
                  <TableCell className='whitespace-nowrap px-3 py-4'>
                    <p className='text-sm font-normal text-muted dark:text-lightgray'>
                      {item.BounceRate}
                    </p>
                  </TableCell>
                  <TableCell className='whitespace-nowrap px-3 py-4'>
                    <div className='flex items-center gap-2'>
                      <div className='w-full'>
                        <Progress
                          progress={item.Goal}
                          color={item.color}
                          className={`bg-${item.bgcolor} dark:bg-${item.bgcolor}`}
                        />
                      </div>
                      <p className='text-sm font-medium text-muted dark:text-lightgray'>
                        {item.Goal}%
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SimpleBar>
      <div className='flex items-center justify-between flex-wrap lg:gap-0 gap-2'>
        <div className='flex items-center gap-1'>
          <p className='text-sm text-muted dark:text-lightgray'>Show</p>
          <Select
            value={String(rowsPerPage)}
            onValueChange={(value) => {
              setRowsPerPage(Number(value))
              setCurrentPage(1)
            }}>
            <SelectTrigger className='w-fit me-0' aria-label='Rows per page'>
              <SelectValue placeholder='Rows per page' />
            </SelectTrigger>
            <SelectContent>
              {dropdownItems.map((item, index) => (
                <SelectItem key={index} value={String(item)}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className='text-sm text-muted dark:text-lightgray'>per page</p>
        </div>
        <div className='flex items-center gap-5'>
          <p className='text-sm font-normal text-muted dark:text-lightgray'>
            {startIndex + 1}-{Math.min(endIndex, totalRows)} of {totalRows}
          </p>
          <div className='flex items-center gap-2'>
            <Icon
              icon='solar:arrow-left-line-duotone'
              className={`text-dark dark:text-white hover:text-primary cursor-pointer ${currentPage === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : ''
                }`}
              width={20}
              height={20}
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            />
            <span className='w-8 h-8 bg-lightprimary text-primary flex items-center justify-center rounded-md dark:bg-darkprimary dark:text-white text-sm font-normal'>
              {currentPage}
            </span>
            <Icon
              icon='solar:arrow-right-line-duotone'
              className={`text-dark dark:text-white hover:text-primary cursor-pointer ${currentPage === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : ''
                }`}
              width={20}
              height={20}
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
            />
          </div>
        </div>
      </div>
    </CardBox>
  )
}
