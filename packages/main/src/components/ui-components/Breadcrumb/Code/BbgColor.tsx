import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'

const BbgColor = () => {
  return (
    <div>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-black/5 px-5 py-3 dark:bg-white/5 rounded-md'>
        <BreadcrumbItem href='#' icon={HiHome}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href='#'>Projects</BreadcrumbItem>
        <BreadcrumbItem>matdash IM</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default BbgColor
