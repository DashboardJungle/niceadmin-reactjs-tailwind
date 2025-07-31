import { Icon } from "@iconify/react";
import { Button, Drawer, DrawerItems } from "flowbite-react";

import SimpleBar from "simplebar-react";
import user1 from "/src/assets//images/profile/user1.svg"
import { Link } from "react-router";
import { useContext, useEffect } from "react";
import { CustomizerContext } from "src/context/CustomizerContext";
import sidebarBg from 'src/assets/images/backgrounds/first-steps.png'
import { v4 as uuidv4 } from 'uuid'


const Profile = () => {
  const { isProfileDrawerOpen, setIsProfileDrawerOpen } =
    useContext(CustomizerContext)


  useEffect(() => {
    if (isProfileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isProfileDrawerOpen]);


  const profileItems = [
    {
      id: uuidv4(),
      isBadge: false,
      title: 'Home',
      icon: 'solar:home-smile-linear',
      href: '/',
    },
    {
      id: uuidv4(),
      isBadge: false,
      title: 'Profile',
      icon: 'solar:user-broken',
      href: '/',
    },
    {
      id: uuidv4(),
      isBadge: true,
      title: 'Invoice',
      icon: 'solar:folder-with-files-broken',
      href: '/',
    },
    {
      id: uuidv4(),
      isBadge: false,
      title: 'Subscription',
      icon: 'solar:subtitles-broken',
      href: '/',
    },
    {
      id: uuidv4(),
      isBadge: false,
      title: 'Account Settings',
      icon: 'solar:settings-linear',
      href: '/',
    },
  ]


  function handleClose() {
    setIsProfileDrawerOpen(false)
  }


  return (
    <Drawer
      open={isProfileDrawerOpen}
      onClose={handleClose}
      position='right'
      className='w-82'>
      <DrawerItems>
        <div className='flex justify-end px-3'>
          <button
            onClick={() => handleClose()}
            className='p-2 rounded-full hover:cursor-pointer hover:bg-lightprimary dark:hover:bg-primaryemphasis hover:text-primary dark:hover:text-white'>
            <Icon icon={'tabler:x'} width={16} height={16} />
          </button>
        </div>
        <SimpleBar className='h-[calc(100vh-115px)]'>
          <div className='flex flex-col gap-5 pt-5 items-center'>
            <img
              src={user1}
              alt='logo'
              height='84'
              width='84'
              className='rounded-full'
            />
            <div className='flex flex-col items-center gap-1'>
              <h5 className='card-title leading-none'>Cameron</h5>
              <p className='text-bodytext dark:text-lightgray mb-0 mt-1 flex items-center'>
                <Icon
                  icon='solar:mailbox-line-duotone'
                  className='text-base me-1'
                />
                info@niceadmin.com
              </p>
            </div>
          </div>
          <div className='pt-6 px-5 mt-6 border-dashed border-t border-border dark:border-darkborder'>
            {profileItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className='p-2 rounded-lg flex items-center gap-2 group bg-hover text-sm font-medium'>
                <Icon
                  icon={item.icon}
                  width={20}
                  height={20}
                  className='text-muted dark:text-lightgray group-hover:text-primary dark:group-hover:text-primary'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-muted dark:text-lightgray group-hover:text-primary dark:group-hover:text-primary'>
                    {item.title}
                  </span>
                  {item.isBadge ? (
                    <span className='text-sm font-medium text-primary bg-lightprimary rounded-[4px] px-2'>
                      3
                    </span>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
          <div className='mt-6 pt-6 border-t border-dashed border-border dark:border-darkborder'>
            <div className={`p-4 px-6 pt-0 mb-1 flex flex-col items-center`}>
              <img src={sidebarBg} alt='sidebar_bg' width={80} height={80} />
              <h5 className='text-center mt-4 text-lg'>Grab Nice Admin</h5>
              <p className='text-sm text-link dark:text-darklink text-center'>
                Customize your dashboard
              </p>
              <Button
                color={'secondary'}
                className='text-dark mt-4 rounded-2xl'>
                Download
              </Button>
            </div>
          </div>
        </SimpleBar>
        <div className='mx-6 my-5'>
          <Button color='primary' className='w-full'
            as={Link}
            to="/auth/auth1/login"
          >
            Log out
          </Button>
        </div>
      </DrawerItems>
    </Drawer>
  );
};

export default Profile;
