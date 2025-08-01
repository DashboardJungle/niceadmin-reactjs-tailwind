import GalleryApp from "src/components/apps/userprofile/Gallery";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: "/apps/user-profile/profile",
    text: "User",
  },
  {
    href: '',
    text: "Gallery",
  },
];
const Gallery = () => {
  return (
    <>
      <BreadcrumbComp title="Gallery" links={BCrumb} />
      <GalleryApp />
    </>
  );
};

export default Gallery;
