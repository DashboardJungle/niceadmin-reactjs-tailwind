import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import BasicListbox from 'src/components/headless-form/Listbox/BasicListbox';
import LabelListbox from 'src/components/headless-form/Listbox/LabelListbox';
import DisableListBox from 'src/components/headless-form/Listbox/DisableListbox';
import DisableListAll from 'src/components/headless-form/Listbox/DisableListBoxAll';
import ListboxWithDescription from 'src/components/headless-form/Listbox/ListboxWithDescription';
import ListBoxWithHtmlForm from 'src/components/headless-form/Listbox/ListBoxWithHtmlForm';
import ListBoxWidth from 'src/components/headless-form/Listbox/ListboxWidth';
import HorizontalListBox from 'src/components/headless-form/Listbox/HorizontalListBox';
import TransitionListBox from 'src/components/headless-form/Listbox/ListboxTransition';
import ListboxFramerMotion from 'src/components/headless-form/Listbox/ListboxFramerMotion';
import ListboxWithMultipleVal from 'src/components/headless-form/Listbox/ListboxWithMultipleVal';
import RenderingAsDiffElemtns from 'src/components/headless-form/Listbox/RenderingAsDiffElemtns';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Listbox',
  },
];

const ListboxForm = () => {
  return (
    <>
      <BreadcrumbComp title="Listbox" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicListbox />
        </div>
        <div className="col-span-12">
          <LabelListbox />
        </div>
        <div className="col-span-12">
          <DisableListAll />
        </div>
        <div className="col-span-12">
          <DisableListBox />
        </div>
        <div className="col-span-12">
          <ListboxWithDescription />
        </div>
        <div className="col-span-12">
          <ListBoxWithHtmlForm />
        </div>
        <div className="col-span-12">
          <ListBoxWidth />
        </div>
        <div className="col-span-12">
          <HorizontalListBox />
        </div>
        <div className="col-span-12">
          <TransitionListBox />
        </div>
        <div className="col-span-12">
          <ListboxFramerMotion />
        </div>
        <div className="col-span-12">
          <ListboxWithMultipleVal />
        </div>
        <div className="col-span-12">
          <RenderingAsDiffElemtns />
        </div>
      </div>
    </>
  );
};

export default ListboxForm;
