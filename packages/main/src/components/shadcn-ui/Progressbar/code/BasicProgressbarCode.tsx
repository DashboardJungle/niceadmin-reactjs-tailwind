import { Progress } from 'src/components/shadcn-ui/Default-Ui/progress';

const BasicProgressbarCode = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Progress value={20} />
        <Progress value={40} />
        <Progress value={60} />
        <Progress value={80} />
        <Progress value={100} />
      </div>
    </>
  );
};

export default BasicProgressbarCode;
