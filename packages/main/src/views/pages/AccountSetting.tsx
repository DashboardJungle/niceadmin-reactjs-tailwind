import AccountSettingIndex from "src/components/theme-pages/account-settings";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: 'Account Setting',
  },
]

const Accountsettings = () => {
  return (
    <>
      <BreadcrumbComp title="Account Setting" links={BCrumb} />
      <AccountSettingIndex />
    </>
  );
};

export default Accountsettings;
