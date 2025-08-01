
import ContactApp from "src/components/apps/contacts";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


export const Contact = () => {
  const BCrumb = [
    {
      href: "/",
      text: "Dashboard",
    },
    {
      href: '',
      text: "Contact | Employee",
    },
  ];
  return (
    <>
      <BreadcrumbComp title="Contact App" links={BCrumb} />
      <ContactApp />
    </>
  )
}

export default Contact