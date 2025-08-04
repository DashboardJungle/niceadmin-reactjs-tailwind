


import CheckBoxTables from 'src/components/flowbite-tables/checkbox'

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

const CheckboxTable = () => {
  return (
    <>
      <BreadcrumbComp title='Checkbox Table' links={BCrumb} />
      <CheckBoxTables />
    </>
  )
}

export default CheckboxTable
