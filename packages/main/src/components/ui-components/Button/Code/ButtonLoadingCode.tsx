import { Button, Spinner } from 'flowbite-react';

const ButtonLoadingCode = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center flex-wrap gap-4">
          <Button color="primary" size="xs">
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="primary" size="sm" pill>
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="outlineprimary" size="md">
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          <Button color="secondary" size="xs">
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="secondary" size="sm" pill>
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
          <Button color="outlinesecondary" size="md">
            <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />
            Click me!
          </Button>
        </div>
      </div>
    </>
  );
};

export default ButtonLoadingCode;
