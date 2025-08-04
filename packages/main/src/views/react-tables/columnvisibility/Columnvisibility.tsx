import ReactColumnVisibilityTable from "src/components/react-tables/column-visiblity/page";
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
            <BreadcrumbComp title="Column Visibility Table " links={BCrumb} />
            <ReactColumnVisibilityTable />
        </>
    );
}

export default page;
