import CalendarApp from "src/components/apps/calendar";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: '',
    text: "Calendar",
  },
];

const BigCalendar = () => {
  return (
    <>
      <BreadcrumbComp title="Calendar" links={BCrumb} />
      <CalendarApp />
    </>
  );
};

export default BigCalendar;
