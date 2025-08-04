

import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { SortingState } from '@tanstack/react-table'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  createColumnHelper,
} from '@tanstack/react-table'
import {
  TextInput,
  Checkbox,
  Badge,
  Avatar,
  // Select,
  Dropdown,
  DropdownItem,
  Toast,
  Datepicker,
} from 'flowbite-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/shadcn-ui/Default-Ui/select'
import { Icon } from '@iconify/react/dist/iconify.js'

import StatusCard from './statuscard'
import { HiCheckCircle, HiTrash } from 'react-icons/hi'

const StatusData = [
  {
    id: uuidv4(),
    title: '$95.3k',
    status: 'Income',
    icon: 'solar:dollar-minimalistic-bold-duotone',
    iconColor: 'info',
    cardColor: 'lightinfo',
  },
  {
    id: uuidv4(),
    title: '485',
    status: 'Pending',
    icon: 'solar:stopwatch-bold-duotone',
    iconColor: 'warning',
    cardColor: 'lightwarning',
  },
  {
    id: uuidv4(),
    title: '1.4k',
    status: 'Completed',
    icon: 'solar:bag-check-bold-duotone',
    iconColor: 'success',
    cardColor: 'lightsuccess',
  },
  {
    id: uuidv4(),
    title: '996',
    status: 'Shipping',
    icon: 'solar:box-bold-duotone',
    iconColor: 'blue-700',
    cardColor: 'blue-100',
  },
  {
    id: uuidv4(),
    title: '2.1k',
    status: 'Processing',
    icon: 'solar:hourglass-line-bold-duotone',
    iconColor: 'primary',
    cardColor: 'lightprimary',
  },
  {
    id: uuidv4(),
    title: '1.1k',
    status: 'Cancelled',
    icon: 'solar:forbidden-bold-duotone',
    iconColor: 'error',
    cardColor: 'lighterror',
  },
]

interface Order {
  id: string
  avatar: string
  customerName: string
  status: string
  badgecolor: string
  date: string
  time: string
  amount: number
  address: string
  items: {
    image: string
    name: string
    sku: string
    quantity: number
    price: number
  }[]
}

interface OrderTableProps {
  readonly data: Order[]
}

const statusColorMap: Record<string, string> = {
  Shipped: 'lightsuccess',
  Pending: 'lightwarning',
  Completed: 'lightprimary',
  Cancelled: 'lighterror',
  Processing: 'lightinfo',
}

// Memoized StatusCard rendering
const MemoStatusCard = React.memo(StatusCard)

export default function OrderDataTable({ data }: OrderTableProps) {
  const [orderData, setOrderData] = useState<Order[]>(
    data.map((order) => ({ ...order, items: order.items ?? [] }))
  )
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [expanded, setExpanded] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [editingRowId, setEditingRowId] = useState<string | null>(null)
  const [editedRowData, setEditedRowData] = useState<Partial<Order>>({})
  const [showSearch, setShowSearch] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({
    id: true,
    customerName: true,
    status: true,
    date: true,
    amount: true,
    address: true,
  })
  const [columnFilters, setColumnFilters] = useState({
    id: '',
    customerName: '',
    status: '',
    amount: '',
    address: '',
    date: '',
  })
  const [showFilters, setShowFilters] = useState(false)

  const handleDelete = (rowId: string) => {
    setOrderData((prev) => prev.filter((item) => item.id !== rowId))
    setFeedback('Order deleted')
  }

  // Create column helper
  const columnHelper = createColumnHelper<Order>()

  // Build all columns using columnHelper
  const allColumns = useMemo(
    () =>
      [
        columnHelper.display({
          id: 'select',
          header: (args) => {
            const { table } = args
            return (
              <Checkbox
                className='!checkbox'
                checked={table.getIsAllPageRowsSelected()}
                onChange={table.getToggleAllPageRowsSelectedHandler()}
                aria-label='Select all rows'
              />
            )
          },
          cell: (args) => {
            const { row } = args
            return (
              <Checkbox
                className='!checkbox'
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
                aria-label='Select row'
              />
            )
          },
        }),
        columnHelper.accessor('id', {
          header: 'Order ID',
          cell: (args) => {
            const { row } = args
            return <p className='text-sm font-medium'>{row.original.id}</p>
          },
        }),
        columnHelper.accessor('customerName', {
          header: 'Customer',
          cell: (args) => {
            const { row } = args
            return editingRowId === row.original.id ? (
              <TextInput
                sizing='sm'
                value={editedRowData.customerName ?? row.original.customerName}
                onChange={(e) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    customerName: e.target.value,
                    avatar: prev.avatar ?? row.original.avatar,
                  }))
                }
                aria-label='Edit customer name'
                className='!form-control'
              />
            ) : (
              <div className='flex items-center gap-2'>
                <Avatar
                  img={row.original.avatar}
                  rounded
                  size='sm'
                  alt={row.original.customerName}
                />
                <p className='text-sm font-medium'>
                  {row.original.customerName}
                </p>
              </div>
            )
          },
        }),
        columnHelper.accessor('status', {
          header: 'Status',
          cell: (args) => {
            const { row } = args
            return editingRowId === row.original.id ? (
              <Select
                value={editedRowData.status ?? row.original.status}
                onValueChange={(value: any) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    status: value,
                  }))
                }>
                <SelectTrigger
                  className='select-md-transparent !pe-0'
                  aria-label='Edit status'>
                  <SelectValue placeholder='Select status' />
                </SelectTrigger>
                <SelectContent>
                  {[
                    'Pending',
                    'Shipped',
                    'Completed',
                    'Cancelled',
                    'Processing',
                  ].map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Badge
                className='text-xs font-medium'
                color={statusColorMap[row.original.status] || 'gray'}>
                {row.original.status}
              </Badge>
            )
          },
        }),
        columnHelper.accessor('date', {
          header: 'Date',
          cell: (args) => {
            const { row } = args
            return editingRowId === row.original.id ? (
              <div className='flex flex-col gap-1'>
                <Datepicker
                  sizing='sm'
                  className='!form-control'
                  value={
                    editedRowData.date
                      ? new Date(editedRowData.date)
                      : new Date(row.original.date)
                  }
                  onChange={(date: any) => {
                    setEditedRowData((prev) => ({
                      ...prev,
                      date: date,
                    }))
                  }}
                  aria-label='Edit date'
                />
              </div>
            ) : (
              <div>
                <p className='text-sm font-normal'>{row.original.date}</p>
                <p className='text-xs text-black/60 dark:text-white/60'>
                  {row.original.time}
                </p>
              </div>
            )
          },
        }),
        columnHelper.accessor('amount', {
          header: 'Amount',
          cell: (args) => {
            const { row } = args
            return editingRowId === row.original.id ? (
              <TextInput
                sizing='sm'
                type='number'
                step='0.01'
                className='!form-control'
                value={
                  editedRowData.amount !== undefined
                    ? editedRowData.amount
                    : row.original.amount
                }
                onChange={(e) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    amount: e.target.value
                      ? parseFloat(e.target.value)
                      : row.original.amount,
                  }))
                }
                aria-label='Edit amount'
              />
            ) : (
              <p className='text-sm font-medium'>
                ${row.original.amount.toFixed(2)}
              </p>
            )
          },
        }),
        columnHelper.accessor('address', {
          header: 'Address',
          cell: (args) => {
            const { row } = args
            return editingRowId === row.original.id ? (
              <TextInput
                className='w-full !form-control'
                sizing='sm'
                value={editedRowData.address ?? row.original.address}
                onChange={(e) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                aria-label='Edit address'
              />
            ) : (
              <p className='text-sm font-medium'>{row.original.address}</p>
            )
          },
        }),
        columnHelper.display({
          id: 'actions',
          header: 'Actions',
          cell: (args) => {
            const { row } = args
            const isEditing = editingRowId === row.original.id
            return (
              <div className='flex items-center gap-2'>
                {/* Expand/collapse */}
                {row.getCanExpand() && (
                  <button
                    onClick={row.getToggleExpandedHandler()}
                    className='p-1 rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary hover:cursor-pointer'
                    aria-label={
                      row.getIsExpanded() ? 'Collapse row' : 'Expand row'
                    }>
                    {row.getIsExpanded() ? (
                      <Icon
                        icon='solar:alt-arrow-up-linear'
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Icon
                        icon='solar:alt-arrow-down-linear'
                        width={20}
                        height={20}
                      />
                    )}
                  </button>
                )}

                {/* Editing buttons */}
                {isEditing ? (
                  <>
                    <button
                      type='button'
                      onClick={() => {
                        setOrderData((prev) =>
                          prev.map((item) =>
                            item.id === row.original.id
                              ? { ...item, ...editedRowData }
                              : item
                          )
                        )
                        setEditingRowId(null)
                        setFeedback('Order updated')
                      }}
                      className='p-1 rounded-full hover:bg-green-100 dark:hover:bg-green-900 hover:cursor-pointer'
                      aria-label='Save changes'>
                      <Icon
                        icon='solar:check-read-linear'
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      type='button'
                      onClick={() => setEditingRowId(null)}
                      className='p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900 hover:cursor-pointer'
                      aria-label='Cancel edit'>
                      <Icon
                        icon='solar:close-circle-linear'
                        width={20}
                        height={20}
                      />
                    </button>
                  </>
                ) : (
                  <>
                    {/* More menu */}
                    <Dropdown
                      renderTrigger={() => (
                        <span className='btn-circle-hover cursor-pointer p-0 h-7 w-7 bg-white dark:bg-black'>
                          <Icon
                            icon={'solar:menu-dots-bold'}
                            width={18}
                            height={18}
                            aria-label='menu'
                          />
                        </span>
                      )}
                      className='shadow dark:shadow-white/20'
                      inline={true}
                      arrowIcon={false}
                      dismissOnClick={true}>
                      <DropdownItem
                        onClick={() => {
                          setEditingRowId(row.original.id)
                          setEditedRowData(row.original)
                        }}
                        icon={() => (
                          <Icon
                            icon='solar:pen-2-linear'
                            width={20}
                            height={20}
                            className='me-2'
                          />
                        )}>
                        Edit
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleDelete(row.original.id)}
                        icon={() => (
                          <Icon
                            icon='solar:trash-bin-2-outline'
                            width={20}
                            height={20}
                            color='red'
                            className='me-2'
                          />
                        )}>
                        Delete
                      </DropdownItem>
                    </Dropdown>
                  </>
                )}
              </div>
            )
          },
        }),
      ] as ColumnDef<Order>[],
    [editingRowId, editedRowData]
  )

  // Filter columns based on columnVisibility before passing to useReactTable
  const visibleColumns = useMemo(
    () =>
      allColumns.filter((col) => {
        if (col.id === 'select') return true
        if ('accessorKey' in col && typeof col.accessorKey === 'string') {
          return columnVisibility[col.accessorKey]
        }
        if (col.id === 'actions') return true
        return true
      }),
    [allColumns, columnVisibility]
  )

  // Filter orderData based on columnFilters
  const filteredOrderData = useMemo(() => {
    return orderData.filter((item) => {
      const idMatch = item.id
        .toLowerCase()
        .includes(columnFilters.id.toLowerCase())
      const customerMatch = item.customerName
        .toLowerCase()
        .includes(columnFilters.customerName.toLowerCase())
      const statusMatch = item.status
        .toLowerCase()
        .includes(columnFilters.status.toLowerCase())
      const amountMatch =
        columnFilters.amount === '' ||
        item.amount.toString().includes(columnFilters.amount)
      const addressMatch = item.address
        .toLowerCase()
        .includes(columnFilters.address.toLowerCase())
      const dateMatch =
        columnFilters.date === '' || item.date === columnFilters.date
      return (
        idMatch &&
        customerMatch &&
        statusMatch &&
        amountMatch &&
        addressMatch &&
        dateMatch
      )
    })
  }, [orderData, columnFilters])

  const table = useReactTable({
    data: filteredOrderData,
    columns: visibleColumns,
    state: {
      sorting,
      globalFilter,
      expanded,
      rowSelection,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onExpandedChange: setExpanded,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowCanExpand: () => true,
  })

  // Memoize visible column keys for export
  const visibleExportKeys = useMemo(
    () =>
      visibleColumns
        .filter(
          (col) =>
            (col as any).accessorKey &&
            col.id !== 'select' &&
            col.id !== 'actions'
        )
        .map((col) => (col as any).accessorKey as keyof Order),
    [visibleColumns]
  )

  // Memoize export headers
  const exportHeaders = useMemo(
    () =>
      visibleColumns
        .filter(
          (col) =>
            (col as any).accessorKey &&
            col.id !== 'select' &&
            col.id !== 'actions'
        )
        .map((col) =>
          typeof (col as any).header === 'string'
            ? (col as any).header
            : (col as any).accessorKey
        ),
    [visibleColumns]
  )

  // Optimized CSV export handler
  const handleExportCSV = useCallback(() => {
    const rows = filteredOrderData.map((row) =>
      visibleExportKeys.map((key) => row[key] ?? '')
    )
    const csvContent = [
      exportHeaders.join(','),
      ...rows.map((r) =>
        r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')
      ),
    ].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'orders.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [filteredOrderData, visibleExportKeys, exportHeaders])

  // Optimized bulk delete handler
  const handleBulkDelete = useCallback(() => {
    const selectedIds = table
      .getSelectedRowModel()
      .rows.map((r) => r.original.id)
    setOrderData((prev) =>
      prev.filter((item) => !selectedIds.includes(item.id))
    )
    table.resetRowSelection()
    setFeedback(`Deleted ${selectedIds.length} order(s)`)
  }, [table])

  // Optimized filter change handler
  const handleFilterChange = useCallback(
    (key: keyof typeof columnFilters, value: string) => {
      setColumnFilters((f) => ({ ...f, [key]: value }))
    },
    []
  )

  useEffect(() => {
    if (!feedback) return

    const timer = setTimeout(() => {
      setFeedback(null)
    }, 3000) // 3 seconds

    return () => clearTimeout(timer) // Cleanup on unmount or feedback change
  }, [feedback])

  return (
    <div>
      <h3 className='text-lg font-semibold text-dark dark:text-white mb-4'>
        Orders History
      </h3>
      <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-3'>
        {StatusData.map((status) => (
          <div key={status.id}>
            <MemoStatusCard
              title={status.title}
              status={status.status}
              icon={status.icon}
              iconColor={status.iconColor}
              cardColor={status.cardColor}
            />
          </div>
        ))}
      </div>
      {/*  */}

      <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between my-5'>
        <h3 className='text-lg font-semibold text-dark dark:text-white mb-4 md:mb-0'>
          Orders Table
        </h3>
        <div className='flex flex-wrap items-center gap-1 md:gap-2'>
          {/* Search */}
          {!showSearch ? (
            <button
              onClick={() => setShowSearch(true)}
              aria-label='Show search'
              className='p-2 rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary border border-transparent focus:outline-none transition hover:cursor-pointer'>
              <Icon
                icon={'solar:minimalistic-magnifer-line-duotone'}
                width={18}
                height={18}
              />
            </button>
          ) : (
            <TextInput
              placeholder='Search...'
              className='!form-control w-40 md:w-56'
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              onBlur={() => {
                if (!globalFilter) setShowSearch(false)
              }}
              aria-label='Search orders'
              sizing='sm'
            />
          )}

          {/* Filter */}
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            aria-label='Toggle filters'
            className={`p-2 rounded-full border border-transparent  focus:outline-none transition hover:cursor-pointer hover:bg-lightprimary dark:hover:bg-darkprimary`}>
            {showFilters ? (
              <Icon
                icon={'solar:close-circle-outline'}
                width={18}
                height={18}
              />
            ) : (
              <Icon icon={'solar:filter-line-duotone'} width={18} height={18} />
            )}
          </button>

          {/* Column visibility dropdown */}
          <Dropdown
            renderTrigger={() => (
              <span className='btn-circle-hover cursor-pointer p-0 h-9 w-9 bg-white dark:bg-black'>
                <Icon
                  icon={'solar:settings-line-duotone'}
                  width={18}
                  height={18}
                  aria-label='Settings'
                />
              </span>
            )}
            inline={true}
            dismissOnClick={false}
            arrowIcon={false}>
            {Object.keys(columnVisibility).map((col) => (
              <DropdownItem key={col}>
                <Checkbox
                  checked={columnVisibility[col]}
                  onChange={() =>
                    setColumnVisibility((prev) => ({
                      ...prev,
                      [col]: !prev[col],
                    }))
                  }
                  className='mr-2'
                />
                <span className='capitalize'>{col}</span>
              </DropdownItem>
            ))}
            <DropdownItem disabled>
              <Checkbox checked readOnly className='mr-2' />
              <span className='capitalize text-gray-400'>actions</span>
            </DropdownItem>
          </Dropdown>

          {/* Download as CSV button */}
          <button
            onClick={handleExportCSV}
            className='flex items-center gap-1 p-2 rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary border border-transparent focus:border-primary focus:outline-none transition hover:cursor-pointer'
            aria-label='Download CSV'>
            <Icon
              icon='solar:download-minimalistic-line-duotone'
              width={18}
              height={18}
            />
          </button>

          {/* Bulk delete button */}
          {table.getSelectedRowModel().rows.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className='p-2 text-error rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary border border-transparent focus:outline-none transition hover:cursor-pointer'>
              <Icon icon='solar:trash-bin-2-outline' width={18} height={18} />
            </button>
          )}
        </div>
      </div>

      {/* Advanced Filtering UI (toggle) */}
      {showFilters && (
        <div className='mb-4 p-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3'>
          <div className='flex-1'>
            <TextInput
              placeholder='Order ID'
              value={columnFilters.id}
              onChange={(e) => handleFilterChange('id', e.target.value)}
              sizing='sm'
              className='w-full !form-control'
            />
          </div>
          <div className='flex-1'>
            <TextInput
              placeholder='Customer Name'
              value={columnFilters.customerName}
              onChange={(e) =>
                handleFilterChange('customerName', e.target.value)
              }
              sizing='sm'
              className='w-full !form-control'
            />
          </div>
          <div className='flex-1'>
            <Select
              value={columnFilters.status ?? undefined} // no empty string!
              onValueChange={(value: string) => handleFilterChange('status', value)} // can pass null if needed
            >
              <SelectTrigger
                className='w-full select-md-transparent'
                aria-label='Filter by status'>
                <SelectValue placeholder='All Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Pending'>Pending</SelectItem>
                <SelectItem value='Shipped'>Shipped</SelectItem>
                <SelectItem value='Completed'>Completed</SelectItem>
                <SelectItem value='Cancelled'>Cancelled</SelectItem>
                <SelectItem value='Processing'>Processing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex-1'>
            <TextInput
              placeholder='Amount'
              value={columnFilters.amount}
              onChange={(e) => handleFilterChange('amount', e.target.value)}
              sizing='sm'
              type='number'
              className='w-full !form-control'
            />
          </div>
          <div className='flex-1'>
            <TextInput
              placeholder='Address'
              value={columnFilters.address}
              onChange={(e) => handleFilterChange('address', e.target.value)}
              sizing='sm'
              className='w-full !form-control'
            />
          </div>
          <div className='flex-1'>
            <Datepicker
              sizing='sm'
              className='!form-control'
              value={
                columnFilters.date ? new Date(columnFilters.date) : undefined
              }
              onChange={(date: any) =>
                handleFilterChange(
                  'date',
                  date?.toISOString().split('T')[0] || ''
                )
              }
            />
          </div>
        </div>
      )}

      {/* Feedback Toast */}
      {feedback && (
        <Toast
          className={`fixed top-4 right-4 z-50 flex items-center ${feedback.toLowerCase().includes('delete')
            ? 'bg-red-100 dark:bg-red-300/90 text-red-700 dark:text-red-700'
            : 'bg-green-100 dark:bg-green-100 text-green-700 dark:text-green-700'
            }`}>
          <div className='mr-2 flex items-center'>
            {feedback.toLowerCase().includes('delete') ? (
              <HiTrash className='w-5 h-5 text-red-500 mr-1' />
            ) : (
              <HiCheckCircle className='w-5 h-5 text-green-500 mr-1' />
            )}
            {feedback}
          </div>
          <button
            onClick={() => setFeedback(null)}
            className='ml-auto p-1 rounded hover:cursor-pointer'
            aria-label='Close notification'
            type='button'>
            <Icon icon='solar:close-circle-linear' width={20} height={20} />
          </button>
        </Toast>
      )}

      {/* table */}
      <div className='overflow-x-auto'>
        <div className='border rounded-md border-ld overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full'>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className='px-4 py-2 border-b border-ld text-left'>
                        {header.isPlaceholder ? null : (
                          <div
                            className={
                              header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : ''
                            }
                            onClick={header.column.getToggleSortingHandler()}>
                            <div className='flex items-center gap-1'>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {header.column.getCanSort() && (
                                <Icon icon='solar:transfer-vertical-line-duotone' />
                              )}
                            </div>
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={visibleColumns.length}
                      className='text-center py-4'>
                      No orders found.
                    </td>
                  </tr>
                ) : (
                  table.getRowModel().rows.map((row) => (
                    <React.Fragment key={row.id}>
                      <tr className='border-b last:border-b-0 border-ld'>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className={`px-4 py-2${cell.column.id === 'customerName'
                              ? ' min-w-[160px]'
                              : ''
                              }`}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                      {row.getIsExpanded() && (
                        <tr>
                          <td
                            colSpan={row.getVisibleCells().length}
                            className='bg-gray-100 dark:bg-darkbody px-4 py-4'>
                            <h6 className='font-semibold mb-2'>
                              Customer Order Details
                            </h6>
                            <div className='overflow-x-auto'>
                              <table className='min-w-full text-sm'>
                                <thead className='bg-gray-200 dark:bg-white/20'>
                                  <tr>
                                    <th className='text-left px-4 py-2'>
                                      Name
                                    </th>
                                    <th className='text-left px-4 py-2'>SKU</th>
                                    <th className='text-left px-4 py-2'>
                                      Quantity
                                    </th>
                                    <th className='text-left px-4 py-2'>
                                      Price
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {row.original.items?.length ? (
                                    <>
                                      {row.original.items.map((item, index) => (
                                        <tr
                                          key={index}
                                          className='border-b border-ld'>
                                          <td className='px-4 py-2 flex items-center gap-2'>
                                            <img
                                              src={item.image}
                                              alt='img'
                                              width={24}
                                              height={24}
                                              className='rounded-2xl'
                                            />
                                            {item.name}
                                          </td>
                                          <td className='px-4 py-2'>
                                            {item.sku}
                                          </td>
                                          <td className='px-4 py-2'>
                                            {item.quantity}
                                          </td>
                                          <td className='px-4 py-2'>
                                            ${item.price.toFixed(2)}
                                          </td>
                                        </tr>
                                      ))}
                                      <tr>
                                        <td
                                          colSpan={3}
                                          className='px-4 py-1 text-right font-semibold'>
                                          Delivery Fee:
                                        </td>
                                        <td className='px-4 py-1 font-semibold'>
                                          $ 10
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={3}
                                          className='px-4 py-1 text-right font-semibold'>
                                          Tax:
                                        </td>
                                        <td className='px-4 py-1 font-semibold'>
                                          $ 5
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={3}
                                          className='px-4 py-1 text-right font-semibold'>
                                          Total
                                        </td>
                                        <td className='px-4 py-1 font-semibold'>
                                          $
                                          {(
                                            row.original.items.reduce(
                                              (sum, item) =>
                                                sum +
                                                item.price * item.quantity,
                                              0
                                            ) +
                                            10 +
                                            5
                                          ).toFixed(2)}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <tr>
                                      <td
                                        colSpan={4}
                                        className='px-4 py-2 text-center text-gray-500'>
                                        No items found.
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      {table.getPageCount() > 0 ? (
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-3'>
          {/* Page Size Selector */}
          <div className='flex items-center gap-2'>
            <p className='text-sm text-muted dark:text-lightgray'>Show</p>
            <Select
              value={String(table.getState().pagination.pageSize)}
              onValueChange={(value: any) => table.setPageSize(Number(value))}>
              <SelectTrigger
                className='w-fit'
                aria-label='Select number of rows per page'>
                <SelectValue placeholder='Rows per page' />
              </SelectTrigger>
              <SelectContent>
                {[3, 10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={String(pageSize)}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className='text-sm text-muted dark:text-lightgray'>per page</p>
          </div>
          <div className='flex items-center gap-3'>
            {/* Page Summary */}
            <div>
              <p className='text-sm font-normal text-muted dark:text-lightgray'>
                {table.getRowModel().rows.length > 0
                  ? `${table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                  1
                  }-${Math.min(
                    (table.getState().pagination.pageIndex + 1) *
                    table.getState().pagination.pageSize,
                    table.getFilteredRowModel().rows.length
                  )} of ${table.getFilteredRowModel().rows.length}`
                  : `0 of 0`}
              </p>
            </div>

            {/* Custom Pagination Controls */}
            <div className='flex items-center gap-2'>
              <Icon
                icon='solar:arrow-left-line-duotone'
                className={`text-dark dark:text-white hover:text-primary cursor-pointer ${table.getState().pagination.pageIndex === 0
                  ? 'opacity-50 !cursor-not-allowed'
                  : ''
                  }`}
                width={20}
                height={20}
                onClick={() => table.previousPage()}
              />
              <span className='w-8 h-8 bg-lightprimary text-primary flex items-center justify-center rounded-md dark:bg-darkprimary dark:text-white text-sm font-normal'>
                {table.getState().pagination.pageIndex + 1}
              </span>
              <Icon
                icon='solar:arrow-right-line-duotone'
                className={`text-dark dark:text-white hover:text-primary cursor-pointer ${table.getState().pagination.pageIndex + 1 ===
                  table.getPageCount()
                  ? 'opacity-50 !cursor-not-allowed'
                  : ''
                  }`}
                width={20}
                height={20}
                onClick={() =>
                  table.getState().pagination.pageIndex + 1 <
                  table.getPageCount() && table.nextPage()
                }
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
