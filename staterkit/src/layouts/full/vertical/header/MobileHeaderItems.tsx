
import Messages from "./Messages";
import Notifications from "./Notifications";

import { Language } from "./Language";
import { Navbar } from "flowbite-react";

import { useContext } from "react";
import { CustomizerContext } from "src/context/CustomizerContext";
import { ThemeMode } from "./ThemeMode";
import CartItems from "./CartItems";
import user1 from 'src/assets/images/profile/user1.svg'

const MobileHeaderItems = () => {


  const { setIsProfileDrawerOpen } = useContext(CustomizerContext)

  return (
    <Navbar fluid className='rounded-none bg-white dark:bg-black flex-1 px-9 '>
      <div className='xl:hidden block w-full'>
        <div className='flex gap-5 items-center justify-center'>
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
      </div>
    </Navbar>
  )
}

export default MobileHeaderItems