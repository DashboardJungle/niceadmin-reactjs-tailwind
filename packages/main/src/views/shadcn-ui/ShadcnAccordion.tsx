
import BasicAccordion from "src/components/shadcn-ui/Accordion/BasicAccordion";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: "Accordion",
  },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Accordion" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <BasicAccordion />
        </div>
      </div>
    </>
  );
};

export default page;