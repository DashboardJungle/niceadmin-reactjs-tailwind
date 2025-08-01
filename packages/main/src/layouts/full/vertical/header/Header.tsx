
import 'flowbite'
import { useState, useEffect, useContext } from 'react'
import {

  DrawerItems,
  Navbar,
  NavbarCollapse,
} from 'flowbite-react'
import Search from './Search'
import { Icon } from '@iconify/react'
import Messages from './Messages'
import { Language } from './Language'
import FullLogo from '../../shared/logo/FullLogo'
import MobileHeaderItems from './MobileHeaderItems'
import { Drawer } from 'flowbite-react'
import MobileSidebar from '../sidebar/MobileSidebar'
import HorizontalMenu from '../../horizontal/header/HorizontalMenu'

import CartItems from './CartItems'
import { ThemeMode } from './ThemeMode'
import Notifications from './Notifications'
import { CustomizerContext } from 'src/context/CustomizerContext'
import user1 from 'src/assets/images/profile/user-1.jpg'

interface HeaderPropsType {
  layoutType: string
}

const Header = ({ layoutType }: HeaderPropsType) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { setIsCollapse, isCollapse, isLayout, setIsProfileDrawerOpen } =
    useContext(CustomizerContext)

  const [mobileMenu, setMobileMenu] = useState('')

  const handleMobileMenu = () => {
    if (mobileMenu === 'active') {
      setMobileMenu('')
    } else {
      setMobileMenu('active')
    }
  }

  // mobile-sidebar
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <header
        className={`sticky bg-white dark:bg-black  top-0 z-2 ${isSticky ? 'shadow-md fixed w-full' : 'bg-transparent'
          }`}>
        <Navbar
          fluid
          className={`rounded-none bg-transparent dark:bg-transparent py-3.5 sm:px-6 ${layoutType == 'horizontal' ? 'container mx-auto' : ''
            }  ${isLayout == 'full' ? 'max-w-full!' : ''}`}>
          {/* Mobile Toggle Icon */}
          <span
            onClick={() => setIsOpen(true)}
            className='px-15 hover:text-primary dark:hover:text-primary text-dark dark:text-white relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent rounded-full xl:hidden flex justify-center items-center cursor-pointer'>
            <Icon
              icon='solar:sidebar-minimalistic-line-duotone'
              height={24}
              width={24}
            />
          </span>
          {/* Toggle Icon   */}
          <NavbarCollapse className='xl:block'>
            <div className='flex gap-5 items-center relative'>
              {layoutType == 'horizontal' ? (
                <div className='me-3'>
                  <FullLogo />
                </div>
              ) : null}
              {/* Toggle Menu    */}
              {layoutType != 'horizontal' ? (
                <span
                  onClick={() => {
                    if (isCollapse === 'full-sidebar') {
                      setIsCollapse('mini-sidebar')
                    } else {
                      setIsCollapse('full-sidebar')
                    }
                  }}
                  className='relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent text-dark hover:text-primary dark:text-white dark:hover:text-primary rounded-full flex justify-center items-center cursor-pointer'>
                  <Icon
                    icon='solar:sidebar-minimalistic-line-duotone'
                    height={24}
                    width={24}
                  />
                </span>
              ) : null}
              <Search />
            </div>
          </NavbarCollapse>

          {/* mobile-logo */}
          <div className='block xl:hidden'>
            <FullLogo />
          </div>

          <NavbarCollapse className='xl:block hidden'>
            <div className='flex gap-5 items-center'>
              {/* Theme Toggle */}
              <ThemeMode />

              {/* Language Dropdown*/}
              <Language />

              {/* Shopping Cart */}
              <CartItems />

              {/* Notification Dropdown */}
              <Notifications />

              {/* Messages Dropdown */}
              <Messages />

              {/* Profile Dropdown */}
              <button onClick={() => setIsProfileDrawerOpen(true)}>
                <span className='h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary'>
                  <img
                    src={user1}
                    alt='logo'
                    height='35'
                    width='35'
                    className='rounded-full'
                  />
                </span>
              </button>
            </div>
          </NavbarCollapse>
          {/* Mobile Toggle Icon */}
          <span
            className='h-10 w-10 flex xl:hidden hover:text-primary hover:bg-lightprimary dark:hover:bg-darkprimary rounded-full justify-center items-center cursor-pointer'
            onClick={handleMobileMenu}>
            <Icon icon='tabler:dots' height={21} />
          </span>
        </Navbar>
        <div
          className={`w-full xl:hidden block mobile-header-menu ${mobileMenu}`}>
          <MobileHeaderItems />
        </div>

        {/* Horizontal Menu  */}
        {layoutType == 'horizontal' ? (
          <div className='xl:border-y xl:border-ld'>
            <div
              className={`${isLayout == 'full' ? 'w-full px-6' : 'container'}`}>
              <HorizontalMenu />
            </div>
          </div>
        ) : null}
      </header>

      {/* Mobile Sidebar */}
      <Drawer open={isOpen} onClose={handleClose} className='w-[230px]'>
        <DrawerItems>
          <MobileSidebar />
        </DrawerItems>
      </Drawer>
    </>
  )
}

export default Header
