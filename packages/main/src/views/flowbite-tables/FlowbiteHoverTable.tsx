import HoverTables from 'src/components/flowbite-tables/hover'
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp'





const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Flowbite Tables',
  },
]

const hoverTable = () => {
  return (
    <>
      <BreadcrumbComp title='Hover Table' links={BCrumb} />
      <HoverTables />
    </>
  )
}

export default hoverTable
