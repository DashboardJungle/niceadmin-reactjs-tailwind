import DefaultList from 'src/components/ui-components/ListGroup/DefaultList';
import LinkList from 'src/components/ui-components/ListGroup/LinkList';
import ListButton from 'src/components/ui-components/ListGroup/ListButton';
import ListIcon from 'src/components/ui-components/ListGroup/ListIcon';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'ListGroup',
  desc: 'An Avatar is a UI component used to represent a user with an image, icon, or initials.',
};

const allApis = [
  {
    id: '1',
    prop: 'href',
    description: 'The URL to link to for this list group item.',
    type: `'#'`,
    default: '-',
  },
  {
    id: '2',
    prop: 'active',
    description: 'Indicates whether the list group item is active.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '3',
    prop: 'disabled',
    description: 'Indicates whether the list group item is disabled.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '4',
    prop: 'onClick',
    description: 'Callback function triggered when the list group item is clicked.',
    type: `'() => alert("Profile clicked!")'`,
    default: '-',
  },
  {
    id: '5',
    prop: 'icon',
    description: 'An optional icon to display alongside the list group item.',
    type: `'HiUserCircle' | 'HiInbox'`,
    default: '-',
  },
];

const FlowbiteListgroup = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <DefaultList />
        </div>
        {/* LinkList */}
        <div className="col-span-12">
          <LinkList />
        </div>
        {/* ListButton */}
        <div className="col-span-12">
          <ListButton />
        </div>
        {/* ListIcon */}
        <div className="col-span-12">
          <ListIcon />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="List Group" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteListgroup;
