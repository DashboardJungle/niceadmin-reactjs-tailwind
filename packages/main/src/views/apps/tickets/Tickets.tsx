

import TicketsApp from "src/components/apps/tickets";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: '',
    text: "Tickets",
  },
];
const Tickets = () => {
  return (
    <>
      <BreadcrumbComp title="Tickets App" links={BCrumb} />
      <TicketsApp />
    </>
  );
};

export default Tickets;
