import Questions from "src/components/theme-pages/faq/Questions";
import StillHaveQst from "src/components/theme-pages/faq/StillHaveQst";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'FAQ',
  },
]


const faq = () => {
  return (
    <>
      <BreadcrumbComp title="FAQ" links={BCrumb} />
      <Questions />
      <StillHaveQst />
    </>
  );
};

export default faq;
