import StripedRow from 'src/components/flowbite-tables/striped-row'
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

const StrippedRow = () => {
  return (
    <>
      <BreadcrumbComp title='Striped Row Table' links={BCrumb} />
      <StripedRow />
    </>
  )
}

export default StrippedRow
