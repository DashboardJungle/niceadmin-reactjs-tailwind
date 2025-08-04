import StickyTable from "src/components/react-tables/sticky/page";
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
            <BreadcrumbComp title="Sticky Table" links={BCrumb} />
            <StickyTable />
        </>
    );
}

export default page;
