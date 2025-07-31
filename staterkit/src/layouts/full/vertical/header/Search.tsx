
import { TextInput } from "flowbite-react";
import { Icon } from "@iconify/react";

const Search = () => {

  return (
    <div className='flex items-center relative'>
      <Icon
        icon='solar:magnifer-line-duotone'
        height={18}
        width={18}
        className='absolute top-1/2 start-[15px] -translate-y-1/2'
      />
      <TextInput
        placeholder='Search....'
        className='form-control trans-input border-none'
        sizing='md'
        required
      />
    </div>
  );
};

export default Search;
