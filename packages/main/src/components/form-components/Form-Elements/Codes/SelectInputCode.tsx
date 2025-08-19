import { Label, Select } from 'flowbite-react';

const SelectInputCode = () => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="countries">Select your country</Label>
        </div>
        <Select id="countries" required className="select-md">
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </Select>
      </div>
    </>
  );
};

export default SelectInputCode;
