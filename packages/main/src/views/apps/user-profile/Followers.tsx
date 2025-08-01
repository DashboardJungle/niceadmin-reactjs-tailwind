

import FollowersApp from "src/components/apps/userprofile/followers";
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
    text: "Followers",
  },
];
const Followers = () => {
  return (
    <>
      <BreadcrumbComp title="Followers" links={BCrumb} />
      <FollowersApp />
    </>
  );
};

export default Followers;
