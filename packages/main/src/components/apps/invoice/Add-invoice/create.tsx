

import { useState, useContext, useEffect } from "react";
import { Alert, Button, Label, TextInput, Table, Tooltip, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Badge, Datepicker } from "flowbite-react";
import { Icon } from "@iconify/react";

import { useNavigate } from "react-router";
import { InvoiceContext } from "src/context/InvoiceContext";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";

function CreateInvoice() {
  const { addInvoice, invoices } = useContext(InvoiceContext);
  const [showAlert, setShowAlert] = useState(false);

  const [editModeFrom, seteditModeFrom] = useState(false)
  const [editModeTo, seteditModeTo] = useState(false)

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: 0,
    billFrom: 'Acme Corp',
    billTo: 'Globex Industries',
    totalCost: 0,
    status: 'Pending',
    billFromAddress: '123 Market Street, San Francisco, CA 94103',
    billToAddress: '456 Innovation Ave, Austin, TX 73301',
    billFromPhone: '4151234567',
    billToPhone: '7379876543',
    billFromEmail: 'accounts@acmecorp.com',
    billToEmail: 'finance@globex.com',
    orders: [{ itemName: '', unitPrice: '', units: '', unitTotalPrice: 0 }],
    vat: 0,
    grandTotal: 0,
    subtotal: 0,
    date: new Date().toISOString().split('T')[0], // create date
    dueDate: '',
  });

  useEffect(() => {
    if (invoices.length > 0) {
      const lastId = invoices[invoices.length - 1].id
      setFormData((prevData) => ({
        ...prevData,
        id: lastId + 1,
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        id: 1,
      }))
    }
  }, [invoices])


  const calculateTotals = (orders: any[]) => {
    let subtotal = 0

    orders.forEach((order) => {
      const unitPrice = parseFloat(order.unitPrice) || 0
      const units = parseInt(order.units) || 0
      const totalCost = unitPrice * units

      subtotal += totalCost
      order.unitTotalPrice = totalCost
    })

    const vat = subtotal * 0.1
    const grandTotal = subtotal + vat

    return { subtotal, vat, grandTotal }
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value }
      const totals = calculateTotals(newFormData.orders)
      return {
        ...newFormData,
        ...totals,
      }
    })
  }

  const handleOrderChange = (index: number, field: string, value: string) => {
    setFormData(prevData => {
      const updatedOrders = [...prevData.orders];
      updatedOrders[index] = {
        ...updatedOrders[index],
        [field]: value,
      };
      const totals = calculateTotals(updatedOrders);
      return {
        ...prevData,
        orders: updatedOrders,
        ...totals,
      };
    });
  };

  const handleAddItem = () => {
    setFormData(prevData => {
      const updatedOrders = [...prevData.orders, { itemName: "", unitPrice: "", units: "", unitTotalPrice: 0 }];
      const totals = calculateTotals(updatedOrders);
      return {
        ...prevData,
        orders: updatedOrders,
        ...totals,
      };
    });
  };

  const handleDeleteItem = (index: number) => {
    setFormData(prevData => {
      const updatedOrders = prevData.orders.filter((_, i) => i !== index);
      const totals = calculateTotals(updatedOrders);
      return {
        ...prevData,
        orders: updatedOrders,
        ...totals,
      };
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const invoiceToAdd = {
        ...formData,
        createdDate: formData.date,
        dueDate: formData.dueDate,
      }
      await addInvoice(invoiceToAdd);
      setFormData({
        id: 0,
        billFrom: '',
        billTo: '',
        totalCost: 0,
        status: 'Pending',
        billFromAddress: '',
        billToAddress: '',
        billFromPhone: '',
        billToPhone: '',
        billFromEmail: '',
        billToEmail: '',
        orders: [{ itemName: '', unitPrice: '', units: '', unitTotalPrice: 0 }],
        vat: 0,
        grandTotal: 0,
        subtotal: 0,
        date: new Date().toISOString().split('T')[0],  // reset to today
        dueDate: '',
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      seteditModeFrom(false)
      navigate('/apps/invoice/list');
    } catch (error) {
      console.error("Error adding invoice:", error);
    }
  }

  // toggle edit mode from
  const toggleEditModeFrom = () => seteditModeFrom((prev) => !prev)
  const toggleEditModeTo = () => seteditModeTo((prev) => !prev)


  return (
    <div>
      <div className='flex sm:flex-row flex-col justify-between items-start mb-6 gap-5'>
        <h3 className='items-center mt-1 text-xl sm:order-1 order-2'>
          # {formData.id}
        </h3>
        <div className='sm:order-2 order-1'>
          <FullLogo />
        </div>
        <div className='sm:order-3 order-3'>
          <Badge color={'lightwarning'}>{formData.status}</Badge>
        </div>
      </div>

      <form>
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
                        value={formData.billFrom}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='Acme Corp'
                      />
                      <TextInput
                        id='billFromAddress'
                        name='billFromAddress'
                        value={formData.billFromAddress}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='123 Market Street, San Francisco, CA 94103'
                      />
                      <TextInput
                        id='billFromEmail'
                        name='billFromEmail'
                        value={formData.billFromEmail}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='accounts@acmecorp.com'
                      />
                      <TextInput
                        id='billFromPhone'
                        name='billFromPhone'
                        value={formData.billFromPhone}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='4151234567'
                      />
                    </div>
                  ) : (
                    <div className='flex flex-col gap-1 flex-1'>
                      <p>{formData.billFrom}</p>
                      <p>{formData.billFromEmail}</p>
                      <p>{formData.billFromAddress}</p>
                      <p>{formData.billFromPhone}</p>
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
                <Datepicker className='!form-control' disabled />

              </div>

            </div>
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
                        value={formData.billTo}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='Globex Industries'
                      />
                      <TextInput
                        id='billToAddress'
                        name='billToAddress'
                        value={formData.billToAddress}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='456 Innovation Ave, Austin, TX 73301'
                      />
                      <TextInput
                        id='billToEmail'
                        name='billToEmail'
                        value={formData.billToEmail}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='finance@globex.com'
                      />
                      <TextInput
                        id='billToPhone'
                        name='billToPhone'
                        value={formData.billToPhone}
                        onChange={handleChange}
                        type='text'
                        className='!form-control'
                        placeholder='7379876543'
                      />
                    </div>
                  ) : (
                    <div className='flex flex-col gap-1 flex-1'>
                      <p>{formData.billTo}</p>
                      <p>{formData.billToEmail}</p>
                      <p>{formData.billToAddress}</p>
                      <p>{formData.billToPhone}</p>
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
                  value={formData.dueDate ? new Date(formData.dueDate) : undefined}
                  onChange={(date: Date | null) => {
                    if (date) {
                      setFormData((prev) => ({
                        ...prev,
                        dueDate: date.toISOString(),
                      }))
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Orders Table */}
        <div className='mt-6'>
          <div className='overflow-x-auto overflow-y-hidden'>
            <div className='mt-4 mb-10 border border-ld !rounded-2xl'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadCell>Item Name</TableHeadCell>
                    <TableHeadCell>Unit Price</TableHeadCell>
                    <TableHeadCell>Units</TableHeadCell>
                    <TableHeadCell>Total Cost</TableHeadCell>
                    <TableHeadCell></TableHeadCell>
                    <TableHeadCell>Actions</TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody className='divide-y divide-border dark:divide-darkborder'>
                  {/* Order Rows */}
                  {formData.orders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell className='whitespace-nowrap min-w-44'>
                        <TextInput
                          type='text'
                          value={order.itemName}
                          placeholder='Item Name'
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
                          placeholder='Unit Price'
                          onChange={(e) =>
                            handleOrderChange(
                              index,
                              'unitPrice',
                              e.target.value
                            )
                          }
                          className='!form-control'
                        />
                      </TableCell>
                      <TableCell className='whitespace-nowrap min-w-44'>
                        <TextInput
                          type='number'
                          value={order.units}
                          placeholder='Units'
                          onChange={(e) =>
                            handleOrderChange(index, 'units', e.target.value)
                          }
                          className='!form-control'
                        />
                      </TableCell>
                      <TableCell className='whitespace-nowrap min-w-32'>
                        {order.unitTotalPrice}
                      </TableCell>
                      <TableCell className='whitespace-nowrap'> </TableCell>
                      <TableCell className='whitespace-nowrap flex item-center gap-2'>
                        <Tooltip content='Add Item' placement='bottom'>
                          <Button
                            className='p-0 mb-2 bg-lightprimary text-primary h-8 w-8 rounded-full flex justify-center items-center  hover:bg-primary hover:text-white'
                            onClick={handleAddItem}>
                            <Icon icon='mdi:plus-circle' height={18} />
                          </Button>
                        </Tooltip>
                        <Tooltip content='Delete Item' placement='bottom'>
                          <Button
                            color={'lighterror'}
                            className='!btn-circle p-0 mb-2 group'
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
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        {/* Totals */}
        <div className='p-4 bg-body dark:bg-darkbody border border-ld rounded-2xl flex flex-col gap-1'>
          <div className='flex justify-end mb-3'>
            <div className='flex gap-3 lg:w-1/5'>
              <h2 className='max-w-52 w-full text-black/60 dark:text-white/60 font-normal'>
                Sub Total:
              </h2>
              <h3 className='ms-auto  text-black/60 dark:text-white/60 font-normal'>
                ${formData.subtotal}
              </h3>
            </div>
          </div>
          <div className='flex justify-end mb-3'>
            <div className='flex gap-3 lg:w-1/5 border-b border-ld'>
              <h2 className='max-w-52 w-full text-black/60 dark:text-white/60 font-normal'>
                Tax:
              </h2>
              <h3 className='ms-auto text-black/60 dark:text-white/60 font-normal'>
                {formData.vat}%
              </h3>
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='flex gap-3 lg:w-1/5'>
              <h2 className='max-w-52 w-full'>Grand Total:</h2>
              <h3 className='ms-auto text-base'>${formData.grandTotal}</h3>
            </div>
          </div>
        </div>
        <div className='flex justify-end '>
          <div className='flex justify-end gap-3 mt-2'>
            <Button color='primary' className='mt-6' onClick={handleSubmit}>
              Create Invoice
            </Button>

            <Button
              color={'error'}
              className='mt-6'
              onClick={() => {
                navigate('/apps/invoice/list')
              }}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
      {showAlert && (
        <Alert color='warning' rounded className='fixed top-3'>
          Invoice added successfully.
        </Alert>
      )}
    </div>
  );
}

export default CreateInvoice;


