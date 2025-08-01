
import FormCustoms from "src/components/form-components/FormCustom";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Form Custom',
  },
]
const FormCustom = () => {
  return (
    <>
      <BreadcrumbComp title="Form Custom" links={BCrumb} />
      <FormCustoms />
    </>
  )
}

export default FormCustom