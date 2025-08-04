import EmptyTable from "src/components/react-tables/empty/page";
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
            <BreadcrumbComp title="Empty Table " links={BCrumb} />
            <EmptyTable />
        </>
    );
}

export default page;
