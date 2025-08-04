import ReactEditable from "src/components/react-tables/row-selection/page";
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
            <BreadcrumbComp title="Row Selection Table " links={BCrumb} />
            <ReactEditable />
        </>
    );
}

export default page;
