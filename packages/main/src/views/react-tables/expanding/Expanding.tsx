import ExpandingTable from "src/components/react-tables/expanding/page";
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
            <BreadcrumbComp title="Expanding Table " links={BCrumb} />
            <ExpandingTable />
        </>
    );
}

export default page;
