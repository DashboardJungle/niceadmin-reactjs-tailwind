import { Popover, Button } from 'flowbite-react';

const PlacementPopoverCode = () => {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
      </div>
      <div className="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </div>
    </div>
  );
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        <Popover content={content} placement="top">
          <Button color="primary">Popover top</Button>
        </Popover>
        <Popover content={content} placement="right">
          <Button color="primary">Popover right</Button>
        </Popover>
        <Popover content={content} placement="bottom">
          <Button color="primary">Popover bottom</Button>
        </Popover>
        <Popover content={content} placement="left">
          <Button color="primary">Popover left</Button>
        </Popover>
      </div>
    </>
  );
};

export default PlacementPopoverCode;
