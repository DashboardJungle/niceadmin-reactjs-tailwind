

import InvoiceDetail from "src/components/apps/invoice/Invoice-detail";
import CardBox from "src/components/shared/CardBox";
import { InvoiceProvider } from "src/context/InvoiceContext";
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
    text: 'Invoice Details',
  },
]

const InvoiceDetailPage = () => {
  return (
    <InvoiceProvider>
      <BreadcrumbComp title="Invoice Details" links={BCrumb} />
      <CardBox>
        <InvoiceDetail />
      </CardBox>
    </InvoiceProvider>
  );
};
export default InvoiceDetailPage;
