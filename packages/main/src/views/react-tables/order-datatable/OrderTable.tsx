import OrderTable from "src/components/react-tables/order-datatable/page"
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp"




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
      <BreadcrumbComp title='Order Table' links={BCrumb} />
      <OrderTable />
    </>
  )
}

export default page
