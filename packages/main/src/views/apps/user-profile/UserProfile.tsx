import UserProfileApp from "src/components/apps/userprofile/profile";
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
    text: "User Profile",
  },
];

const UserProfile = () => {
  return (
    <>
      <BreadcrumbComp title="User Profile" links={BCrumb} />
      <UserProfileApp />
    </>
  );
};

export default UserProfile;
