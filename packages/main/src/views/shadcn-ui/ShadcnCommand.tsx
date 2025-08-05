
import BasicCommand from "src/components/shadcn-ui/Command/BasicCommand";
import DialogCommand from "src/components/shadcn-ui/Command/DialogCommand";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: "Command",
  },
];
const page = () => {
  return (
    <div>
      <BreadcrumbComp title="Command" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <BasicCommand />
        </div>
        <div className="col-span-12">
          <DialogCommand />
        </div>
      </div>
    </div>
  );
};

export default page;
