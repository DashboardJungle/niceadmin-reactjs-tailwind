
import {
  TbBrandDribbble,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandYoutube,
  TbFileDescription,
  TbUserCheck,
  TbUserCircle,
} from "react-icons/tb";

import Banner from "src/assets/images/backgrounds/profilebg.jpg";
import { Button } from "flowbite-react";
import ProfileTab from "./ProfileTab";
import { Link } from "react-router";
import CardBox from "src/components/shared/CardBox";
import profileImg from "src/assets/images/profile/user-1.jpg"

const ProfileBanner = () => {
  return (
    <>
      <CardBox className='p-0 overflow-hidden'>
        <img
          src={Banner}
          alt='priofile banner'
          className='w-full'
          height={330}
        />
        <div className='bg-white dark:bg-dark p-6 -mt-2'>
          <div className='grid grid-cols-12 gap-3'>
            <div className='lg:col-span-4 col-span-12 lg:order-1 order-2'>
              <div className='flex gap-6 items-center justify-around lg:py-0 py-4'>
                <div className='text-center'>
                  <TbFileDescription
                    className='block mx-auto text-ld opacity-50 '
                    size='20'
                  />
                  <h4 className='text-xl'>938</h4>
                  <p className='text-black dark:text-darklink text-sm'>Posts</p>
                </div>
                <div className='text-center'>
                  <TbUserCircle
                    className='block mx-auto text-ld opacity-50'
                    size='20'
                  />
                  <h4 className='text-xl'>3,586</h4>
                  <p className='text-black dark:text-darklink text-sm'>
                    Followers
                  </p>
                </div>
                <div className='text-center'>
                  <TbUserCheck
                    className='block mx-auto text-ld opacity-50'
                    size='20'
                  />
                  <h4 className='text-xl'>2,659</h4>
                  <p className='text-black dark:text-darklink text-sm'>
                    Following
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:col-span-4 col-span-12 lg:order-2 order-1'>
              <div className='text-center -mt-20'>
                <div className='bg-linear-to-b from-skyblue to-cherryred w-fit rounded-full p-1 mx-auto'>
                  <img
                    src={profileImg}
                    alt='profile'
                    height='100'
                    width='100'
                    className='rounded-full border-4 border-white dark:border-white'
                  />
                </div>
                <h5 className='text-lg mt-3'>Cameron</h5>
                <p className='text-black dark:text-darklink'>Designer</p>
              </div>
            </div>
            <div className='lg:col-span-4 col-span-12 lg:order-3 order-3'>
              <div className='flex items-center gap-3.5 lg:justify-end justify-center h-full xl:pe-4'>
                <Button
                  as={Link}
                  to={''}
                  className='h-9 w-9 rounded-full p-0 bg-blue-700 dark:bg-blue-700'>
                  <TbBrandFacebook size={20} />
                </Button>
                <Button
                  as={Link}
                  to={''}
                  className='h-9 w-9 rounded-full p-0 bg-skyblue dark:bg-skyblue'>
                  <TbBrandTwitter size={20} />
                </Button>
                <Button
                  as={Link}
                  to={''}
                  className='h-9 w-9 rounded-full p-0 bg-pink-500 dark:bg-pink-500'>
                  <TbBrandDribbble size={20} />
                </Button>
                <Button
                  as={Link}
                  to={''}
                  className='h-9 w-9 rounded-full p-0 hover:bg-primary'
                  color={'error'}>
                  <TbBrandYoutube size={20} />
                </Button>
                <Button color={'primary'}>Add To Story</Button>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Tabs */}
        <ProfileTab />
      </CardBox>
    </>
  );
};

export default ProfileBanner;
