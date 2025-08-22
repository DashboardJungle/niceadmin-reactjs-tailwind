import { Toast, ToastToggle } from 'flowbite-react';

const TostWithIButtonCode = () => {
  return (
    <>
      <div>
        <Toast>
          <div className="text-sm font-normal">Conversation archived.</div>
          <div className="ml-auto flex items-center space-x-2">
            <a
              href="#"
              className="rounded-lg p-1.5 text-sm font-medium text-primary hover:bg-cyan-100 dark:text-primary dark:hover:bg-gray-700"
            >
              Undo
            </a>
            <ToastToggle />
          </div>
        </Toast>
      </div>
    </>
  );
};

export default TostWithIButtonCode;
