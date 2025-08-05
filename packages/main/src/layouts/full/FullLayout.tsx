import { FC, useContext } from 'react';
import { Outlet } from "react-router";
import { Customizer } from './shared/customizer/Customizer';
import { CustomizerContext } from '../../context/CustomizerContext';
import Sidebar from './vertical/sidebar/Sidebar';
import Header from './vertical/header/Header';
import ScrollToTop from 'src/components/shared/ScrollToTop';
import { CartDrawer } from './vertical/header/CartDrawer';
import Profile from './vertical/header/Profile';
import Footer from './shared/footer/Footer';
import AuthGuard from 'src/guards/jwt/AuthGuard';



const FullLayout: FC = () => {
  const { activeLayout, isLayout } = useContext(CustomizerContext);

  return (
    <AuthGuard>
      <div className='flex w-full min-h-screen'>
        <div className='page-wrapper bg-body dark:bg-darkbody flex w-full'>
          {/* Header/sidebar */}
          {activeLayout == 'vertical' ? <Sidebar /> : null}
          <div className='body-wrapper w-full'>
            {/* Top Header  */}
            {activeLayout == 'horizontal' ? (
              <Header layoutType='horizontal' />
            ) : (
              <Header layoutType='vertical' />
            )}

            {/* Body Content  */}
            <div
              className={`${isLayout == 'full'
                ? 'w-full py-6 md:px-30 px-5'
                : 'container mx-auto  py-6'
                } ${activeLayout == 'horizontal' ? 'xl:mt-3' : ''}
             flex flex-col min-h-[calc(100vh-70px)]
            `}>

              <div className="flex-grow">
                <ScrollToTop>
                  <Outlet />
                </ScrollToTop>
              </div>
              <Footer />
            </div>
            <Customizer />
            {/* Cart Drawer */}
            <CartDrawer />
            {/* Profile Drawer */}
            <Profile />
          </div>
        </div>
      </div >
    </AuthGuard>
  );
};

export default FullLayout;
