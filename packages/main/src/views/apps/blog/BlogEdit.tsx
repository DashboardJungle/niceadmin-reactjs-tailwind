import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp"

const BCrumb = [
    {
        href: '/',
        text: 'Dashboard',
    },
    {
        href: '/apps/blog/post',
        text: 'Blog',
    },
    {
        href: '',
        text: 'Blog Edit',
    },
]

function BlogEdit() {
    return (
        <BreadcrumbComp title="Blog app" links={BCrumb} />
    )
}

export default BlogEdit