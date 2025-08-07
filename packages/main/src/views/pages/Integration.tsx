import Integartionpage from "src/components/theme-pages/integration/Integartionpage";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
    {
        href: '/',
        text: 'Dashboard',
    },
    {
        href: '',
        text: 'Integrations',
    },
]


function Integration() {
    return (
        <>
            <BreadcrumbComp title="Integrations" links={BCrumb} />
            <Integartionpage />
        </>
    )
}

export default Integration