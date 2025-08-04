import Editable from "src/components/react-tables/editable/page";
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
            <BreadcrumbComp title="Editable Table " links={BCrumb} />
            <Editable />
        </>
    );
}

export default page;
