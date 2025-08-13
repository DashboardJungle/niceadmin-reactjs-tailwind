
import { Icon } from '@iconify/react/dist/iconify.js'
import { useContext } from 'react'
import { CustomizerContext } from 'src/context/CustomizerContext'

export function ThemeMode() {
  const { setActiveMode, activeMode } = useContext(CustomizerContext)
  const toggleMode = () => {
    setActiveMode((prevMode: string) =>
      prevMode === 'light' ? 'dark' : 'light'
    )
  }
  return (
    <>
      {activeMode === 'light' ? (
        <div
          className=' hover:text-primary group  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-dark dark:text-white relative'
          onClick={toggleMode}>
          <span className='flex items-center justify-center relative after:absolute after:w-10 after:h-10 w-6 h-6 after:rounded-full after:top-1/2   group-hover:after:bg-lightprimary dark:group-hover:after:bg-darkprimary after:-translate-y-1/2 dark:text-white'>
            <Icon icon='solar:moon-line-duotone' width='20' />
          </span>
        </div>
      ) : (
        // Dark Mode Button
        <div
          className=' hover:text-primary   dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative'
          onClick={toggleMode}>
          <span className='flex items-center justify-center relative after:absolute after:w-10 after:h-10 w-6 h-6 after:rounded-full after:top-1/2   group-hover:after:bg-lightprimary dark:group-hover:after:bg-darkprimary after:-translate-y-1/2 dark:text-white'>
            <Icon
              icon='solar:sun-line-duotone'
              width='20'
              className='group-hover:text-primary'
            />
          </span>
        </div>
      )}
    </>
  )
}
