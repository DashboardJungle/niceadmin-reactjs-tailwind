import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';

const FeedbackToastCode = () => {
  return (
    <>
      <Toast>
        <FaTelegramPlane className="h-5 w-5 text-primary dark:text-primary" />
        <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
      </Toast>
    </>
  );
};

export default FeedbackToastCode;
