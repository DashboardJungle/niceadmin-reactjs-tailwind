

import NotesApp from "src/components/apps/notes";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: '',
    text: "Notes",
  },
];

const Notes = () => {
  return (
    <>
      <BreadcrumbComp title="Notes app" links={BCrumb} />
      <NotesApp />
    </>
  );
};

export default Notes;
