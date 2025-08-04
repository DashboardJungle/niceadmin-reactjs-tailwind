import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import DenseTable from "src/components/react-tables/dense/page";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'React Tables',
  },
]
function page() {
  return (
    <>
      <BreadcrumbComp title="Dense Table " links={BCrumb} />
      <DenseTable />
    </>
  );
}

export default page;
