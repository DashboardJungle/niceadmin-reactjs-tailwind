
import { useContext, useState, useEffect } from "react";
import { Alert, Badge, Button, Datepicker, Dropdown, DropdownItem, Label, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router";
import { InvoiceContext } from "src/context/InvoiceContext";
import React from 'react';
import FullLogo from "src/layouts/full/shared/logo/FullLogo";

const EditInvoicePage = () => {
  const { invoices, updateInvoice } = useContext(InvoiceContext);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [_, setEditing] = useState(false);
  const [editedInvoice, setEditedInvoice]: any = useState(null);
  // form edit toggle
  const [editModeFrom, seteditModeFrom] = useState(false)
  const [editModeTo, seteditModeTo] = useState(false)

  const location = useLocation();
  const pathName = location.pathname;

  let getTitle = pathName.split("/").pop();
  if (getTitle) {
    getTitle = decodeURIComponent(getTitle);
  }


  const navigate = useNavigate();

  useEffect(() => {
    if (invoices.length > 0) {
      if (getTitle) {
        const invoice = invoices.find(
          (inv: { billFrom: string }) => inv.billFrom === getTitle
        );
        if (invoice) {
          setSelectedInvoice(invoice);
          setEditedInvoice({ ...invoice });
          setEditing(true);
        } else {
          setSelectedInvoice(invoices[0]);
          setEditedInvoice({ ...invoices[0] });
          setEditing(true);
        }
      } else {
        setSelectedInvoice(invoices[0]);
        setEditedInvoice({ ...invoices[0] });
        setEditing(true);
      }
    }
  }, [getTitle, invoices]);




  const handleSave = async () => {
    try {
      await updateInvoice(editedInvoice)
      setSelectedInvoice({ ...editedInvoice })
      setEditing(false) // Exit editing mode
      setShowAlert(true)

      // Navigate to the list page
      navigate('/apps/invoice/list');
    } catch (error) {
      console.error('Error updating invoice:', error)
    }

    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }


  // Function to cancel editing
  const handleCancel = () => {
    setEditing(false);
  };
  const handleOrderChange = (
    index: string | number | any,
    field: string,
    value: string | number
  ) => {
    const updatedOrders = [...editedInvoice.orders]
    updatedOrders[index][field] = value

    // Calculate unitTotalPrice for the changed item
    if (field === 'unitPrice' || field === 'units') {
      updatedOrders[index].unitTotalPrice =
        updatedOrders[index].unitPrice * updatedOrders[index].units
    }

    // Update editedInvoice with updated orders and recalculate totals
    const updatedInvoice = {
      ...editedInvoice,
      orders: updatedOrders,
      totalCost: calculateTotalCost(updatedOrders),
      vat: calculateVAT(updatedOrders),
      grandTotal: calculateGrandTotal(
        calculateTotalCost(updatedOrders),
        calculateVAT(updatedOrders)
      ),
    }

    setEditedInvoice(updatedInvoice)
  }

  // Function to add a new item to the invoice
  const handleAddItem = () => {
    const newItem = {
      itemName: '',
      unitPrice: 0,
      units: 0,
      unitTotalPrice: 0,
      vat: 0,
    }
    const updatedOrders = [...editedInvoice.orders, newItem]

    // Update editedInvoice with updated orders and recalculate totals
    const updatedInvoice = {
      ...editedInvoice,
      orders: updatedOrders,
      totalCost: calculateTotalCost(updatedOrders),
      vat: calculateVAT(updatedOrders),
      grandTotal: calculateGrandTotal(
        calculateTotalCost(updatedOrders),
        calculateVAT(updatedOrders)
      ),
    }
    setEditedInvoice(updatedInvoice)
  }

  // Function to delete an item from the invoice


  const handleDeleteItem = (index: any) => {
    const updatedOrders = editedInvoice.orders.filter(
      (_: any, i: any) => i !== index
    )

    const updatedInvoice = {
      ...editedInvoice,
      orders: updatedOrders,
      totalCost: calculateTotalCost(updatedOrders),
      vat: calculateVAT(updatedOrders),
      grandTotal: calculateGrandTotal(
        calculateTotalCost(updatedOrders),
        calculateVAT(updatedOrders)
      ),
    }
    setEditedInvoice(updatedInvoice)
  }


  // Function to calculate total cost based on updated orders
  const calculateTotalCost = (orders: any[]) => {
    return orders.reduce((total, order) => total + order.unitTotalPrice, 0);
  };

  // Function to calculate total VAT based on updated orders
  const calculateVAT = (orders: any[]) => {
    return orders.reduce((totalVAT, order) => totalVAT + order.units, 0);
  };

  // Function to calculate grand total based on total cost and VAT
  const calculateGrandTotal = (totalCost: number, vat: number) => {
    return (totalCost += (totalCost * vat) / 100);
  };

  if (!selectedInvoice) {
    return <div>please select invoice</div>;
  }
  type StatusType = (typeof statusOptions)[number]

  const handleSelect = (status: StatusType) => {
    setEditedInvoice({ ...editedInvoice, status })
  }
  // status
  const statusOptions = ['Paid', 'Overdue', 'Pending', 'Draft'] as const

  const statusBadgeColorMap: Record<string, string> = {
    Paid: 'lightsuccess',
    Overdue: 'lighterror',
    Pending: 'lightwarning',
    Draft: 'lightinfo',
  }

  // toggle edit mode from
  const toggleEditModeFrom = () => seteditModeFrom((prev) => !prev)
  const toggleEditModeTo = () => seteditModeTo((prev) => !prev)

  return (
    <div>
      <div className='flex sm:flex-row flex-col justify-between items-start mb-6 gap-5'>
        <h3 className='items-center mt-1 text-xl sm:order-1 order-2'>
          # {editedInvoice.id}
        </h3>
        <div className='sm:order-2 order-1'>
          <FullLogo />
        </div>
        <div className='sm:order-3 order-3'>
          <div className='flex items-center gap-2'>
            <Dropdown
              aria-label='Select invoice status'
              className='bg-white dark:bg-dark hover:bg-white hover:dark:bg-dark hover:border-primary border border-ld text-black'
              label={
                <Badge
                  color={
                    statusBadgeColorMap[editedInvoice.status] || 'lightwarning'
                  }>
                  {editedInvoice.status}
                </Badge>
              }>
              {statusOptions.map((status) => (
                <DropdownItem key={status} onClick={() => handleSelect(status)}>
                  {status}
                </DropdownItem>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>

      <div>
        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-6 md:col-span-6 col-span-12'>
            <div className='mb-2 block'>
              <Label htmlFor='billFrom' className='text-base'>
                Bill From
              </Label>
            </div>
            <div className='p-4 bg-body dark:bg-darkbody border border-ld rounded-2xl'>
              <div className='flex justify-between items-start gap-2'>
                {editModeFrom ? (
                  <div className='flex flex-col gap-1 flex-1'>
                    <TextInput
                      id='billFrom'
                      name='billFrom'
                      value={editedInvoice.billFrom}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billFrom: e.target.value,
                        })
                      }
                      type='text'
                      className='!form-control'
                    />
                    <TextInput
                      id='billFromAddress'
                      name='billFromAddress'
                      value={editedInvoice.billFromAddress}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billFromAddress: e.target.value,
                        })
                      }
                      type='text'
                      className='!form-control'
                    />
                    <TextInput
                      id='billFromEmail'
                      name='billFromEmail'
                      value={editedInvoice.billFromEmail}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billFromEmail: e.target.value,
                        })
                      }
                      type='email'
                      className='!form-control'
                    />
                    <TextInput
                      id='billFromPhone'
                      name='billFromPhone'
                      value={editedInvoice.billFromPhone}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billFromPhone: e.target.value,
                        })
                      }
                      type='text'
                      className='!form-control'
                    />
                  </div>
                ) : (
                  <div className='flex flex-col gap-1 flex-1'>
                    <p>{editedInvoice.billFrom}</p>
                    <p>{editedInvoice.billFromEmail}</p>
                    <p>{editedInvoice.billFromAddress}</p>
                    <p>{editedInvoice.billFromPhone}</p>
                  </div>
                )}
                <button
                  className='p-2 rounded-full hover:cursor-pointer hover:bg-lightprimary hover:text-primary'
                  onClick={(e) => {
                    e.preventDefault()
                    toggleEditModeFrom()
                  }}>
                  {editModeFrom ? (
                    <Icon
                      icon={'solar:check-read-linear'}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Icon icon={'solar:pen-linear'} width={20} height={20} />
                  )}
                </button>
              </div>
            </div>
            {/* create date */}
            <div className='py-5'>
              <h6 className='text-sm'>Create date</h6>
              <Datepicker
                className='!form-control'
                value={new Date(editedInvoice.createdDate)}
                onChange={(date: unknown) => {
                  if (date instanceof Date && !isNaN(date.getTime())) {
                    setEditedInvoice({
                      ...editedInvoice,
                      createdDate: date,
                    })
                  }
                }}
              />
            </div>
          </div>
          {/*  */}
          <div className='lg:col-span-6 md:col-span-6 col-span-12'>
            <div className='mb-2 block'>
              <Label htmlFor='billTo' className='text-base'>
                Bill To
              </Label>
            </div>
            <div className='p-4 bg-body dark:bg-darkbody border border-ld rounded-2xl flex flex-col gap-1'>
              <div className='flex justify-between items-start gap-2'>
                {editModeTo ? (
                  <div className='flex flex-col gap-1 flex-1'>
                    <TextInput
                      id='billTo'
                      name='billTo'
                      value={editedInvoice.billTo}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billTo: e.target.value,
                        })
                      }
                      type='text'
                      className='!form-control'
                    />
                    <TextInput
                      id='billToAddress'
                      name='billToAddress'
                      value={editedInvoice.billToAddress}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billToAddress: e.target.value,
                        })
                      }
                      type='text'
                      className='!form-control'
                    />
                    <TextInput
                      id='billToEmail'
                      name='billToEmail'
                      value={editedInvoice.billToEmail}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billToEmail: e.target.value,
                        })
                      }
                      type='email'
                      className='!form-control'
                    />
                    <TextInput
                      id='billToPhone'
                      name='billToPhone'
                      value={editedInvoice.billToPhone}
                      onChange={(e) =>
                        setEditedInvoice({
                          ...editedInvoice,
                          billToPhone: e.target.value,
                        })
                      }
                      type='text'
                      className='!form-control'
                    />
                  </div>
                ) : (
                  <div className='flex flex-col gap-1 flex-1'>
                    <p>{editedInvoice.billTo}</p>
                    <p>{editedInvoice.billToEmail}</p>
                    <p>{editedInvoice.billToAddress}</p>
                    <p>{editedInvoice.billToPhone}</p>
                  </div>
                )}
                <button
                  className='p-2 rounded-full hover:cursor-pointer hover:bg-lightprimary hover:text-primary'
                  onClick={(e) => {
                    e.preventDefault()
                    toggleEditModeTo()
                  }}>
                  {editModeFrom ? (
                    <Icon
                      icon={'solar:check-read-linear'}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Icon icon={'solar:pen-linear'} width={20} height={20} />
                  )}
                </button>
              </div>
            </div>
            {/* due date */}
            <div className='py-5'>
              <h6 className='text-sm'>Due date</h6>
              <Datepicker
                className='!form-control'
                value={new Date(editedInvoice.dueDate)}
                onChange={(date: unknown) => {
                  if (date instanceof Date && !isNaN(date.getTime())) {
                    setEditedInvoice({
                      ...editedInvoice,
                      dueDate: date,
                    })
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 mb-10 border border-ld !rounded-2xl'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Item Name</TableHeadCell>
                <TableHeadCell>Unit Price</TableHeadCell>
                <TableHeadCell>Units</TableHeadCell>
                <TableHeadCell>Total Cost</TableHeadCell>
                <TableHeadCell>Actions</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className='divide-y divide-border dark:divide-darkborder '>
              {editedInvoice.orders.map(
                (
                  order: { itemName: string | number | readonly string[] | undefined; unitPrice: string | number | readonly string[] | undefined; units: string | number | readonly string[] | undefined; unitTotalPrice: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; },
                  index: React.Key | null | undefined
                ) => (
                  <TableRow key={index} className=''>
                    <TableCell className='whitespace-nowrap min-w-44'>
                      <TextInput
                        type='text'
                        value={order.itemName}
                        onChange={(e) =>
                          handleOrderChange(index, 'itemName', e.target.value)
                        }
                        className='!form-control'
                      />
                    </TableCell>
                    <TableCell className='whitespace-nowrap min-w-44'>
                      <TextInput
                        type='number'
                        value={order.unitPrice}
                        onChange={(e) =>
                          handleOrderChange(
                            index,
                            'unitPrice',
                            parseFloat(e.target.value)
                          )
                        }
                        className='!form-control'
                      />
                    </TableCell>
                    <TableCell className='whitespace-nowrap min-w-44'>
                      <TextInput
                        type='number'
                        value={order.units}
                        onChange={(e) =>
                          handleOrderChange(
                            index,
                            'units',
                            parseInt(e.target.value)
                          )
                        }
                        className='!form-control'
                      />
                    </TableCell>

                    <TableCell className='whitespace-nowrap min-w-32'>
                      {order.unitTotalPrice}
                    </TableCell>
                    <TableCell className='whitespace-nowrap flex item-center gap-2'>
                      <Tooltip content='Add Item' placement='bottom'>
                        <Button
                          className='p-0 mb-2 bg-lightprimary text-primary h-8 w-8 rounded-full flex justify-center items-center  hover:bg-primary hover:text-white'
                          onClick={handleAddItem}>
                          <Icon icon='mdi:plus-circle' height={18} />
                        </Button>
                      </Tooltip>
                      <Tooltip content='Delete Invoice' placement='bottom'>
                        <Button
                          color={'lighterror'}
                          className='!btn-circle p-0 mb-2'
                          onClick={() => handleDeleteItem(index)}>
                          <Icon
                            icon='solar:trash-bin-minimalistic-outline'
                            className='text-error group-hover:text-white'
                            height={18}
                          />
                        </Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className='p-4 bg-body dark:bg-darkbody border border-ld rounded-2xl flex flex-col gap-1 mb-10'>
        <div className='flex justify-end mb-3'>
          <div className='flex gap-3 lg:w-1/5'>
            <h2 className='max-w-52 w-full text-black/60 dark:text-white/60 font-normal'>
              Sub Total:
            </h2>
            <h3 className='ms-auto  text-black/60 dark:text-white/60 font-normal'>
              ${editedInvoice.totalCost}
            </h3>
          </div>
        </div>
        <div className='flex justify-end mb-3'>
          <div className='flex gap-3 lg:w-1/5 border-b border-ld'>
            <h2 className='max-w-52 w-full text-black/60 dark:text-white/60 font-normal'>
              Tax:
            </h2>
            <h3 className='ms-auto text-black/60 dark:text-white/60 font-normal'>
              {editedInvoice.vat}%
            </h3>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='flex gap-3 lg:w-1/5'>
            <h2 className='max-w-52 w-full'>Grand Total:</h2>
            <h3 className='ms-auto text-base'>${editedInvoice.grandTotal}</h3>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-3'>
        <Button color={'primary'} onClick={handleSave} className='rounded-full'>
          Update Invoice
        </Button>
        <Button
          color={'lighterror'}
          onClick={handleCancel}
          className='rounded-full'>
          Cancel
        </Button>
      </div>
      {showAlert && (
        <Alert color='warning' rounded className='fixed top-3 '>
          Invoice data updated successfully.
        </Alert>
      )}
    </div>
  );
};
export default EditInvoicePage;
