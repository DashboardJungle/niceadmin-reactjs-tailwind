import { Input } from 'src/components/shadcn-ui/Default-Ui/input';

const InputColorsCode = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-4">
        <Input type="text" placeholder="Gray" variant="gray" />
        <Input type="text" placeholder="Info" variant="info" />
        <Input type="text" placeholder="Success" variant="success" />
        <Input type="text" placeholder="Failure" variant="failure" />
        <Input type="text" placeholder="warning" variant="warning" />
      </div>
    </>
  );
};

export default InputColorsCode;
