import { Pagination } from 'flowbite-react'
import { useState } from 'react'

const TableDataCode = () => {
  const [tablePage, setTablePage] = useState(1)

  const totalItems = 1000
  const itemsPerPage = 10

  const onTableChange = (page: number) => setTablePage(page)

  return (
    <div>
      <Pagination
        layout='table'
        currentPage={tablePage}
        onPageChange={onTableChange}
        showIcons
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </div>
  )
}

export default TableDataCode
