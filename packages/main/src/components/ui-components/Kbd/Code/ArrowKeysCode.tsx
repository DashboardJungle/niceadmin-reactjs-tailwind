import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { Kbd } from 'flowbite-react';

const ArrowKeysCode = () => {
  return (
    <>
      <div className="flex items-center flex-wrap gap-3">
        <Kbd icon={MdKeyboardArrowUp} />
        <Kbd icon={MdKeyboardArrowDown} />
        <Kbd icon={MdKeyboardArrowLeft} />
        <Kbd icon={MdKeyboardArrowRight} />
      </div>
    </>
  );
};

export default ArrowKeysCode;
