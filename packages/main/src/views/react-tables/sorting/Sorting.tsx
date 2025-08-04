import SortingTable from "src/components/react-tables/sorting/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


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
      <BreadcrumbComp title="Sorting Table" links={BCrumb} />
      <SortingTable />
    </>
  );
}

export default page;
