import EmaiilApp from "src/components/apps/email";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: "",
    text: "Email",
  },
];
const Emaiil = () => {
  return (
    <>
      <BreadcrumbComp title="Email App" links={BCrumb} />
      <EmaiilApp />
    </>
  );
};
export default Emaiil;
