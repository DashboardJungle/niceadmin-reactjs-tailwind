import { Card, Dropdown, DropdownItem } from 'flowbite-react'

const UserProfileCardCode = () => {
  return (
    <div>
      <div>
        <Card className='max-w-sm'>
          <div className='flex justify-end px-4'>
            <Dropdown label='' inline className='cursor-pointer'>
              <DropdownItem>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Edit
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Export Data
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-600 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Delete
                </a>
              </DropdownItem>
            </Dropdown>
          </div>
          <div className='flex flex-col items-center'>
            <img
              alt='Bonnie image'
              height={96}
              src='/images/profile/user-3.jpg'
              width={96}
              className='mb-3 rounded-full shadow-lg'
            />
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
              Bonnie Green
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Visual Designer
            </span>
            <div className='mt-4 flex space-x-3 lg:mt-6'>
              <a
                href='#'
                className='inline-flex items-center rounded-lg bg-primary  px-4 py-2 text-center text-sm font-medium text-white focus:outline-hidden dark:bg-primary dark:hover:bg-primaryemphasis'>
                Add friend
              </a>
              <a
                href='#'
                className='inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-hidden focus:ring-0 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'>
                Message
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default UserProfileCardCode
