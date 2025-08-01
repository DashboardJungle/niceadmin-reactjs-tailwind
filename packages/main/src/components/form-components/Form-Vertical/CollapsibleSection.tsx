
import {
  Accordion,
  Label,
  TextInput,
  Textarea,
  Select,
  Radio,
  Button,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react'
import TitleCard from '../../shared/TitleBorderCard'

const CollapsibleSection = () => {
  return (
    <div>
      <TitleCard title='Collapsible Section'>
        <Accordion collapseAll>
          {/* Delivery Address */}
          <AccordionPanel>
            <AccordionTitle className='text-lg font-semibold'>
              Delivery Address
            </AccordionTitle>
            <AccordionContent>
              <div className='grid grid-cols-12 gap-6'>
                {/* Full Name */}
                <div className='lg:col-span-6 col-span-12'>
                  <Label htmlFor='fullname' className='mb-2 block'>
                    Full Name
                  </Label>
                  <TextInput
                    id='fullname'
                    type='text'
                    placeholder='John Deo'
                    sizing='md'
                    className='!form-control'
                  />
                </div>

                {/* Phone */}
                <div className='lg:col-span-6 col-span-12'>
                  <Label htmlFor='phone' className='mb-2 block'>
                    Phone No
                  </Label>
                  <TextInput
                    id='phone'
                    type='text'
                    placeholder='425 7545 6321'
                    sizing='md'
                    className='!form-control'
                  />
                </div>

                {/* Address */}
                <div className='col-span-12'>
                  <Label htmlFor='address' className='mb-2 block'>
                    Address
                  </Label>
                  <Textarea
                    id='address'
                    placeholder='150, Ring Road'
                    rows={3}
                    required
                    className='!form-control-textarea'
                  />
                </div>

                {/* Pincode */}
                <div className='lg:col-span-6 col-span-12'>
                  <Label htmlFor='pincode' className='mb-2 block'>
                    Pincode
                  </Label>
                  <TextInput
                    id='pincode'
                    type='text'
                    placeholder='687541'
                    sizing='md'
                    className='!form-control'
                  />
                </div>

                {/* Landmark */}
                <div className='lg:col-span-6 col-span-12'>
                  <Label htmlFor='landmark' className='mb-2 block'>
                    Landmark
                  </Label>
                  <TextInput
                    id='landmark'
                    type='text'
                    placeholder='Nr. Wall Street'
                    sizing='md'
                    className='!form-control'
                  />
                </div>

                {/* City */}
                <div className='lg:col-span-6 col-span-12'>
                  <Label htmlFor='city' className='mb-2 block'>
                    City
                  </Label>
                  <TextInput
                    id='city'
                    type='text'
                    placeholder='Jackson'
                    sizing='md'
                    className='!form-control'
                  />
                </div>

                {/* State */}
                <div className='lg:col-span-6 col-span-12'>
                  <Label htmlFor='state' className='mb-2 block'>
                    State
                  </Label>
                  <Select id='state' required className='select-rounded'>
                    <option>Dubai</option>
                    <option>Poland</option>
                    <option>Bangladesh</option>
                  </Select>
                </div>

                {/* Address Type */}
                <div className='col-span-12'>
                  <Label className='mb-2 block'>Address Type</Label>
                  <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2'>
                      <Radio
                        id='home'
                        name='addressType'
                        value='home'
                        defaultChecked
                      />
                      <Label htmlFor='home'>Home (All day delivery)</Label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Radio id='office' name='addressType' value='office' />
                      <Label htmlFor='office'>Office (10 AM - 5 PM)</Label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* Delivery Options */}
          <AccordionPanel>
            <AccordionTitle className='text-lg font-semibold'>
              Delivery Options
            </AccordionTitle>
            <AccordionContent>
              <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                  <Radio
                    id='standard'
                    name='parcel'
                    value='standard'
                    defaultChecked
                  />
                  <Label htmlFor='standard'>Standard 3-5 Days</Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio id='express' name='parcel' value='express' />
                  <Label htmlFor='express'>Express</Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio id='overnight' name='parcel' value='overnight' />
                  <Label htmlFor='overnight'>Overnight</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* Payment Method */}
          <AccordionPanel>
            <AccordionTitle className='text-lg font-semibold'>
              Payment Method
            </AccordionTitle>
            <AccordionContent>
              <div className='flex items-center gap-6 py-6'>
                <div className='flex items-center gap-2'>
                  <Radio id='card' name='payment' value='card' defaultChecked />
                  <Label htmlFor='card'>Credit/Debit/ATM Card</Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio id='cod' name='payment' value='cashondelivery' />
                  <Label htmlFor='cod'>Cash on Delivery</Label>
                </div>
              </div>

              {/* Card Details */}
              <div className='grid grid-cols-12 gap-6'>
                <div className='lg:col-span-7 col-span-12'>
                  <Label htmlFor='cardnumber' className='mb-2 block'>
                    Card Number
                  </Label>
                  <TextInput
                    id='cardnumber'
                    type='number'
                    placeholder='1250 4521 5630 2390'
                    sizing='md'
                    className='!form-control'
                  />
                </div>

                <div className='lg:col-span-7 col-span-12 grid grid-cols-9 gap-6'>
                  <div className='lg:col-span-5 col-span-12'>
                    <Label htmlFor='cardname' className='mb-2 block'>
                      Name
                    </Label>
                    <TextInput
                      id='cardname'
                      type='text'
                      placeholder='Name'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                  <div className='lg:col-span-2 col-span-12'>
                    <Label htmlFor='expiredate' className='mb-2 block'>
                      Exp. Date
                    </Label>
                    <TextInput
                      id='expiredate'
                      type='text'
                      placeholder='MM/YY'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                  <div className='lg:col-span-2 col-span-12'>
                    <Label htmlFor='cvv' className='mb-2 block'>
                      CVV
                    </Label>
                    <TextInput
                      id='cvv'
                      type='number'
                      placeholder='528'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>

                <div className='lg:col-span-7 col-span-12 flex items-center gap-4'>
                  <Button type='submit' color='primary'>
                    Submit
                  </Button>
                  <Button type='reset' color='error'>
                    Cancel
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </TitleCard>
    </div>
  )
}

export default CollapsibleSection
