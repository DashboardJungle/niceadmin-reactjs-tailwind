import { useContext, useEffect, useState } from 'react'
import {
  Checkbox,
  Table,
  TextInput,
  Button,
  Modal,
  Badge,
  Tooltip,
  ModalBody,
  ModalFooter,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Datepicker,
} from 'flowbite-react'

import { Icon } from '@iconify/react'
import { format } from 'date-fns'
import { InvoiceContext } from 'src/context/InvoiceContext'
import { Link } from 'react-router'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/components/shadcn-ui/Default-Ui/select'


function InvoiceList() {
  const { invoices, deleteInvoice } = useContext(InvoiceContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('All Invoice')
  const [selectedProducts, setSelectedProducts] = useState<any>([])
  const [selectAll, setSelectAll] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  //date
  const [createdDateFilter, setCreatedDateFilter] = useState<Date | null>(null)
  const [dueDateFilter, setDueDateFilter] = useState<Date | null>(null)


  const filteredInvoices = invoices.filter(
    (invoice: { billFrom: string; billTo: string; status: string; createdDate: Date; dueDate: Date }) => {
      const matchesSearch =
        invoice.billFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.billTo.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTab = activeTab === 'All Invoice' || invoice.status === activeTab

      const matchesCreatedDate = createdDateFilter
        ? new Date(invoice.createdDate).toDateString() === createdDateFilter.toDateString()
        : true

      const matchesDueDate = dueDateFilter
        ? new Date(invoice.dueDate).toDateString() === dueDateFilter.toDateString()
        : true

      return matchesSearch && matchesTab && matchesCreatedDate && matchesDueDate
    }
  )


  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstItem,
    indexOfLastItem
  )
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, activeTab])


  // Calculate the counts for different statuses
  const Paid = invoices.filter(
    (t: { status: string }) => t.status === 'Paid'
  ).length
  const Overdue = invoices.filter(
    (t: { status: string }) => t.status === 'Overdue'
  ).length
  const Pending = invoices.filter(
    (t: { status: string }) => t.status === 'Pending'
  ).length
  const Draft = invoices.filter(
    (t: { status: string }) => t.status === 'Draft'
  ).length

  // filter status wise
  const statusFilter = [
    {
      label: 'All Invoice',
      count: invoices.length,
      bgcolor: 'lightprimary',
      darkbgcolor: 'darkprimary',
      txtcolor: 'primary',
    },
    {
      label: 'Paid',
      count: Paid,
      bgcolor: 'lightsuccess',
      darkbgcolor: 'lightsuccess',
      txtcolor: 'success',
    },
    {
      label: 'Overdue',
      count: Overdue,
      bgcolor: 'lighterror',
      darkbgcolor: 'lighterror',
      txtcolor: 'error',
    },
    {
      label: 'Pending',
      count: Pending,
      bgcolor: 'lightwarning',
      darkbgcolor: 'lightwarning',
      txtcolor: 'warning',
    },
    {
      label: 'Draft',
      count: Draft,
      bgcolor: 'lightinfo',
      darkbgcolor: 'lightinfo',
      txtcolor: 'info',
    },
  ]

  // Toggle all checkboxes
  const toggleSelectAll = () => {
    const selectAllValue = !selectAll
    setSelectAll(selectAllValue)
    if (selectAllValue) {
      setSelectedProducts(invoices.map((invoice: { id: any }) => invoice.id))
    } else {
      setSelectedProducts([])
    }
  }

  // Toggle individual product selection
  const toggleSelectProduct = (productId: any) => {
    const index = selectedProducts.indexOf(productId)
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId])
    } else {
      setSelectedProducts(
        selectedProducts.filter((id: any) => id !== productId)
      )
    }
  }

  // Handle opening delete confirmation dialog
  const handleDelete = () => {
    setOpenDeleteDialog(true)
  }

  // Handle confirming deletion of selected products
  const handleConfirmDelete = async () => {
    for (const productId of selectedProducts) {
      await deleteInvoice(productId)
    }
    setSelectedProducts([])
    setSelectAll(false)
    setOpenDeleteDialog(false)
  }

  // Handle closing delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }



  const safeFormatDate = (date: string | Date) => {
    if (!date) return '';
    if (typeof date === 'string') {
      return format(new Date(date), 'dd MMMM yyyy');
    }
    return format(date, 'dd MMMM yyyy');
  };


  return (
    <div className='overflow-x-auto'>
      {/* filter & add invoice */}
      <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-4'>
        <div className='flex items-center gap-4 flex-wrap lg:order-1 order-2'>
          {statusFilter.map(
            ({ label, count, bgcolor, darkbgcolor, txtcolor }) => (
              <div
                key={label}
                className={`flex px-2 py-1.5 rounded-md items-center gap-2 ${activeTab === label
                  ? 'text-black dark:text-white bg-lightprimary dark:bg-darkprimary'
                  : 'text-black/60 dark:text-white/60 hover:bg-lightprimary hover:dark:bg-darkprimary'
                  } hover:cursor-pointer`}
                onClick={() => setActiveTab(label)}>
                <p className='text-sm font-medium'>{label}</p>
                <p
                  className={`text-sm font-medium px-2.5 py-1 rounded-full bg-${bgcolor} dark:bg-${darkbgcolor} text-${txtcolor}`}>
                  {count}
                </p>
              </div>
            )
          )}
        </div>
        <div className='lg:order-2 order-1'>
          <Button color={'primary'} className='sm:w-fit w-full sm:mt-0 mt-4'>
            <Link to='/apps/invoice/create'>New Invoice</Link>
          </Button>
        </div>
      </div>
      {/* search & filter */}
      <div className='flex sm:flex-row flex-col item-center gap-2 my-6'>
        <div>
          <TextInput
            id='dis'
            type='text'
            className='!form-control'
            placeholder='search'
            value={searchTerm}
            icon={() => <Icon icon='solar:magnifer-line-duotone' height={18} />}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <Datepicker
            className='!form-control'
            value={createdDateFilter}
            onChange={(date: Date | null) => setCreatedDateFilter(date)}
            placeholder='Created Date'
          />
        </div>
        <div>
          <Datepicker
            className='!form-control'
            value={dueDateFilter}
            onChange={(date: Date | null) => setDueDateFilter(date)}
            placeholder='Due Date'
          />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell className='p-4'>
                <Checkbox
                  className='checkbox'
                  checked={selectAll}
                  onChange={toggleSelectAll}
                />
              </TableHeadCell>
              <TableHeadCell>Id</TableHeadCell>
              <TableHeadCell>Bill From</TableHeadCell>
              <TableHeadCell>Bill To</TableHeadCell>
              <TableHeadCell>Total Cost</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Created</TableHeadCell>
              <TableHeadCell>Due</TableHeadCell>
              <TableHeadCell className='text-center'>Action</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className='divide-y divide-border dark:divide-darkborder'>
            {currentInvoices.map(
              (invoice: {
                id: any
                billFrom: any
                billTo: any
                totalCost: any
                status: any
                createdDate: any
                dueDate: any
              }) => (
                <TableRow key={invoice.id}>
                  <TableCell className='p-4'>
                    <Checkbox
                      onChange={() => toggleSelectProduct(invoice.id)}
                      checked={selectedProducts.includes(invoice.id)}
                    />
                  </TableCell>
                  <TableCell className='whitespace-nowrap'>
                    <h5 className='text-sm'>{invoice.id}</h5>
                  </TableCell>
                  <TableCell>
                    <h5 className='text-sm'>{invoice.billFrom}</h5>
                  </TableCell>
                  <TableCell className='text-ld'>{invoice.billTo}</TableCell>
                  <TableCell className='text-ld'>{invoice.totalCost}</TableCell>
                  <TableCell>
                    <Badge
                      color={
                        invoice.status === 'Paid'
                          ? 'lightsuccess'
                          : invoice.status === 'Overdue'
                            ? 'lighterror'
                            : invoice.status === 'Draft'
                              ? 'lightinfo'
                              : invoice.status === 'Pending'
                                ? 'lightwarning'
                                : 'gray'
                      }>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='text-ld'>
                    {/* {format(new Date(invoice.createdDate), 'dd MMMM yyyy')} */}

                    {safeFormatDate(invoice.createdDate)}
                  </TableCell>
                  <TableCell className='text-ld'>
                    {/* {format(new Date(invoice.dueDate), 'dd MMMM yyyy')} */}
                    {safeFormatDate(invoice.dueDate)}
                  </TableCell>
                  <TableCell className='text-center'>
                    <div className='flex justify-center gap-3'>
                      <Tooltip content='Edit Invoice' placement='bottom'>
                        <Button
                          color={'lightsuccess'}
                          className='h-8 w-8 p-0 mb-2 group rounded-full'>
                          <Link to={`/apps/invoice/edit/${invoice.billFrom}`}>
                            <Icon
                              icon='solar:pen-outline'
                              height={18}
                              className='group-hover:text-white'
                            />
                          </Link>
                        </Button>
                      </Tooltip>
                      <Tooltip content='View Invoice' placement='bottom'>
                        <Button
                          color={'lightprimary'}
                          className='h-8 w-8 p-0 mb-2 group rounded-full'>
                          <Link
                            to={`/apps/invoice/detail/${invoice.billFrom}`}>
                            <Icon
                              icon='solar:eye-outline'
                              height={18}
                              className='group-hover:text-white'
                            />
                          </Link>
                        </Button>
                      </Tooltip>
                      <Tooltip content='Delete Invoice' placement='bottom'>
                        <Button
                          color={'lighterror'}
                          className='h-8 w-8 p-0 mb-2 group rounded-full'
                          onClick={() => {
                            setSelectedProducts([invoice.id])
                            handleDelete()
                          }}>
                          <Icon
                            icon='solar:trash-bin-minimalistic-outline'
                            height={18}
                            className='group-hover:text-white'
                          />
                        </Button>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>

      {/* pagination control */}
      <div className='flex items-center justify-between flex-wrap mt-6 lg:gap-0 gap-2'>
        {/* Rows per page selector */}
        <div className='flex items-center gap-1'>
          <p className='text-sm text-muted dark:text-lightgray'>Show</p>
          <Select
            value={String(itemsPerPage)}
            onValueChange={(value) => {
              setCurrentPage(1)
              setItemsPerPage(Number(value))
            }}>
            <SelectTrigger className='w-fit me-0' aria-label='Rows per page'>
              <SelectValue placeholder='Rows per page' />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 20].map((item) => (
                <SelectItem key={item} value={String(item)}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className='text-sm text-muted dark:text-lightgray'>per page</p>
        </div>

        {/* Page info and navigation */}
        <div className='flex items-center gap-5'>
          <p className='text-sm font-normal text-muted dark:text-lightgray'>
            {filteredInvoices.length === 0
              ? '0–0'
              : `${indexOfFirstItem + 1}-${Math.min(
                indexOfLastItem,
                filteredInvoices.length
              )}`}{' '}
            of {filteredInvoices.length}
          </p>
          <div className='flex items-center gap-2'>
            <Icon
              icon='solar:arrow-left-line-duotone'
              className={`text-dark dark:text-white hover:text-primary cursor-pointer ${currentPage === 1 ? 'opacity-50 !cursor-not-allowed' : ''
                }`}
              width={20}
              height={20}
              onClick={() =>
                currentPage > 1 && setCurrentPage((prev) => prev - 1)
              }
            />
            <span className='w-8 h-8 bg-lightprimary text-primary flex items-center justify-center rounded-md dark:bg-darkprimary dark:text-white text-sm font-normal'>
              {currentPage}
            </span>
            <Icon
              icon='solar:arrow-right-line-duotone'
              className={`text-dark dark:text-white hover:text-primary cursor-pointer ${currentPage === totalPages
                ? 'opacity-50 !cursor-not-allowed'
                : ''
                }`}
              width={20}
              height={20}
              onClick={() =>
                currentPage < totalPages && setCurrentPage((prev) => prev + 1)
              }
            />
          </div>
        </div>
      </div>

      {/* delete modal */}
      <Modal
        show={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        size={'md'}>
        <ModalBody>
          <p className='text-center text-lg text-ld'>
            Are you sure you want to delete selected products?
          </p>
        </ModalBody>
        <ModalFooter className='mx-auto'>
          <Button color='lighterror' onClick={handleCloseDeleteDialog}>
            Cancel
          </Button>
          <Button color='error' onClick={handleConfirmDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InvoiceList
