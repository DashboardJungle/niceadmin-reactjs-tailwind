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
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Listbox',
  desc: 'A Listbox is a UI component that displays a list of options from which users can select one or more items.',
};

const ListboxForm = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
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
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ListBoxWidth />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <HorizontalListBox />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <TransitionListBox />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ListboxFramerMotion />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ListboxWithMultipleVal />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <RenderingAsDiffElemtns />
        </div>
      </div>
    </>
  );
};

export default ListboxForm;
