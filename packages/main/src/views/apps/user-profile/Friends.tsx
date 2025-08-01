

import FriendsApp from "src/components/apps/userprofile/friends";
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
    text: "Friends",
  },
];


const Friends = () => {
  return (
    <>
      <BreadcrumbComp title="Friends" links={BCrumb} />
      <FriendsApp />
    </>
  );
};

export default Friends;
