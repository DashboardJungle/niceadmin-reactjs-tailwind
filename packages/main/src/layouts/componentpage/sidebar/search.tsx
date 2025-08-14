import React, { useState } from 'react';
import { TextInput } from 'flowbite-react';
import { Icon } from '@iconify/react';
import 'simplebar-react/dist/simplebar.min.css';

const Search = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center relative">
      <Icon
        icon="solar:magnifer-line-duotone"
        height={18}
        width={18}
        className="absolute top-1/2 start-[15px] -translate-y-1/2"
      />
      <TextInput
        placeholder="Search...."
        className="form-control trans-input border-none"
        sizing="md"
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
