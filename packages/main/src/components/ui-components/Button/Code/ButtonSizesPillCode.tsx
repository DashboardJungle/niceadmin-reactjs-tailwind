import { Button } from 'flowbite-react';

const ButtonSizesPillCode = () => {
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        <Button size="xs" color={'primary'} pill>
          Extra small
        </Button>
        <Button size="sm" color={'secondary'} pill>
          Small
        </Button>
        <Button size="md" color={'error'} pill>
          Base
        </Button>
        <Button size="lg" color={'info'} pill>
          Large
        </Button>
        <Button size="xl" color={'warning'} pill>
          Extra large
        </Button>
      </div>
    </>
  );
};

export default ButtonSizesPillCode;
