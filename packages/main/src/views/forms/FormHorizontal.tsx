

import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";





import BasicLayout from 'src/components/form-components/Form-Horizontal/BasicLayout'
import BasicWithIcon from 'src/components/form-components/Form-Horizontal/BasicWithIcon'
import FormSeprator from 'src/components/form-components/Form-Horizontal/FormSeprator'
import FormLableAlignment from 'src/components/form-components/Form-Horizontal/FormLableAlignment'
import CollapsibalForm from 'src/components/form-components/Form-Horizontal/CollapsibalForm'
import FormWithTabs from 'src/components/form-components/Form-Horizontal/FormWithTabs'

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Form Horizontal',
  },
]
const FormHorizontal = () => {
  return (
    <>
      <BreadcrumbComp title="Form Horizontal" links={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        <div className="col-span-12">
          <BasicLayout />
        </div>
        <div className="col-span-12">
          <BasicWithIcon />
        </div>
        <div className="col-span-12">
          <FormSeprator />
        </div>
        <div className="col-span-12">
          <FormLableAlignment />
        </div>
        <div className="col-span-12">
          <CollapsibalForm />
        </div>
        <div className="col-span-12">
          <FormWithTabs />
        </div>
      </div>
    </>
  );
};

export default FormHorizontal;
