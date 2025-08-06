
import ApiKeys from "src/components/theme-pages/api-keys/ApiKeys";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
    {
        href: '/',
        text: 'Dashboard',
    },
    {
        href: '',
        text: 'Api Keys',
    },
]

function Apikeys() {
    return (
        <>
            <BreadcrumbComp title="Api Keys" links={BCrumb} />
            <ApiKeys />
        </>
    )
}

export default Apikeys