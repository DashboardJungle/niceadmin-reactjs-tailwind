import { useState } from 'react';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react';

const ControllTabSelectCode = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex gap-3">
          <Tab className="rounded-full py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-black data-[selected]:text-white data-[hover]:bg-lightprimary dark:data-[hover]:bg-darkprimary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary hover:cursor-pointer">
            Tab 1
          </Tab>
          <Tab className="rounded-full py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-black data-[selected]:text-white data-[hover]:bg-lightprimary dark:data-[hover]:bg-darkprimary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary hover:cursor-pointer">
            Tab 2
          </Tab>
          <Tab className="rounded-full py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-black data-[selected]:text-white data-[hover]:bg-lightprimary dark:data-[hover]:bg-darkprimary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary hover:cursor-pointer">
            Tab 3
          </Tab>
        </TabList>
        <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">
          <TabPanel>
            One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy
            text that is not meant to mean anything. It is used as a placeholder in magazine
            layouts, for example, in order to give an impression of the finished document.
          </TabPanel>
          <TabPanel>
            Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy
            text that is not meant to mean anything. It is used as a placeholder in magazine
            layouts, for example, in order to give an impression of the finished document.
          </TabPanel>
          <TabPanel>
            Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy
            text that is not meant to mean anything. It is used as a placeholder in magazine
            layouts, for example, in order to give an impression of the finished document.
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default ControllTabSelectCode;
