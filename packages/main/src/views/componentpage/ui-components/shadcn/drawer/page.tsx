

import BasicDrawer from 'src/components/shadcn-ui/Drawer/BasicDrawer'



const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-5 sm:gap-30'>
        {/* Basic */}
        <div className='col-span-12'>
          <BasicDrawer />
        </div>
      </div>
    </>
  )
}

export default page
