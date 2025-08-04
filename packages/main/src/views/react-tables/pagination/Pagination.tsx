import PaginationTable from "src/components/react-tables/pagination/page";
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
            <BreadcrumbComp title="Pagination Table " links={BCrumb} />
            <PaginationTable />
        </>
    );
}

export default page;
