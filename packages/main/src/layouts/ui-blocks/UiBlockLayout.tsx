import { Outlet } from 'react-router';
import Header from 'src/components/landing-page/layout/header';
import Footer from 'src/components/landing-page/layout/footer';
import Hero from 'src/components/uiblocks-page/hero';
import Categories from 'src/components/uiblocks-page/categories';
import ScrollToTop from 'src/components/shared/ScrollToTop';

export default function ComponentLayout() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <div className="min-h-screen container max-w-7xl px-4 pb-6">
        {/* Main Content */}
        <div className="w-full">
          <ScrollToTop>
            <Outlet />
          </ScrollToTop>
        </div>
      </div>
      <Footer />
    </>
  );
}
