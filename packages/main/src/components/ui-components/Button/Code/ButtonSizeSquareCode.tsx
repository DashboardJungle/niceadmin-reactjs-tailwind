import { Button } from 'flowbite-react';

const ButtonSizeSquareCode = () => {
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        <Button size="xs" color={'primary'} className="rounded-md">
          Extra small
        </Button>
        <Button size="sm" color={'secondary'} className="rounded-md">
          Small
        </Button>
        <Button size="md" color={'error'} className="rounded-md">
          Base
        </Button>
        <Button size="lg" color={'info'} className="rounded-md">
          Large
        </Button>
        <Button size="xl" color={'warning'} className="rounded-md">
          Extra large
        </Button>
      </div>
    </>
  );
};

export default ButtonSizeSquareCode;
