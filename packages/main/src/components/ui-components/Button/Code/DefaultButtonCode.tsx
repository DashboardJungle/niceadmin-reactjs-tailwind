import { Button } from 'flowbite-react';

const DefaultButtonCode = () => {
  return (
    <>
      <div>
        <div className="flex items-center flex-wrap gap-4">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="info">Info</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Danger</Button>
          <Button color="light">Light</Button>
          <Button color="dark">Dark</Button>
        </div>
      </div>
    </>
  );
};

export default DefaultButtonCode;
