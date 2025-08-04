import BasicTable1 from 'src/components/flowbite-tables/basic/Table1'
import BasicTable2 from 'src/components/flowbite-tables/basic/Tabel2'
import BasicTable3 from 'src/components/flowbite-tables/basic/Table3'
import BasicTable5 from 'src/components/flowbite-tables/basic/Table5'
import BasicTable4 from 'src/components/flowbite-tables/basic/Table4'

import TitleCard from 'src/components/shared/TitleBorderCard'
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

const BasicTables = () => {
  return (
    <>
      <BreadcrumbComp title='Basic Tables' links={BCrumb} />
      <TitleCard title='Basic Tables'>
        <div className='grid grid-cols-12 gap-30'>
          <div className='col-span-12'>
            <BasicTable1 />
          </div>
          <div className='col-span-12'>
            <BasicTable2 />
          </div>
          <div className='col-span-12'>
            <BasicTable3 />
          </div>
          <div className='col-span-12'>
            <BasicTable4 />
          </div>
          <div className='col-span-12'>
            <BasicTable5 />
          </div>
        </div>
      </TitleCard>
    </>
  )
}

export default BasicTables
