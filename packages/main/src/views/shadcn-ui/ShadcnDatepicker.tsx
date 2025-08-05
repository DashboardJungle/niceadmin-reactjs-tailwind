


import BasicDatepicker from 'src/components/shadcn-ui/Datepicker/BasicDatepicker';
import DateRangePicker from 'src/components/shadcn-ui/Datepicker/DateRangePicker';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/',
    text: "Datepicker",
  },
];

const page = () => {

  return (
    <>
      <BreadcrumbComp title="Datepicker" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">

        <div className="col-span-12">
          <BasicDatepicker />
        </div>
        <div className="col-span-12">
          <DateRangePicker />
        </div>
      </div>
    </>
  )
}

export default page