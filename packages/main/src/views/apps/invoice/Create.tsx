import CreateInvoiceApp from "src/components/apps/invoice/Add-invoice";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/apps/invoice/list',
    text: 'Invoice',
  },
  {
    href: '',
    text: 'Create Invoice',
  },
]

const CreateInvoice = () => {
  return (
    <>
      <BreadcrumbComp title=" Create A New Invoice " links={BCrumb} />
      <CreateInvoiceApp />
    </>
  );
};
export default CreateInvoice;
