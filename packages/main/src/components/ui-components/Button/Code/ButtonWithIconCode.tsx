import { Button } from 'flowbite-react';
import { Icon } from '@iconify/react';

const ButtonWithIconCode = () => {
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        <Button color={'primary'}>
          <Icon icon="solar:cart-4-outline" height={18} />
          Buy now
        </Button>
        <Button color={'secondary'}>
          Choose plan
          <Icon icon="solar:adhesive-plaster-outline" height={18} />
        </Button>
        <Button color={'info'}>
          <Icon icon="solar:cart-4-outline" height={18} />
          Buy now
        </Button>
        <Button color={'success'}>
          <Icon icon="solar:cart-4-outline" height={18} />
          Buy now
        </Button>
        <Button color={'error'}>
          Choose plan
          <Icon icon="solar:arrow-right-outline" height={18} />
        </Button>
        <Button color={'warning'}>
          <Icon icon="solar:cart-4-outline" height={18} />
          Buy now
        </Button>
      </div>
    </>
  );
};

export default ButtonWithIconCode;
