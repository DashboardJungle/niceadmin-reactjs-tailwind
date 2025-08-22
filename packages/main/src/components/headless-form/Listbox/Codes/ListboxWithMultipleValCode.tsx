import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

const ListboxWithMultipleValCode = () => {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);
  return (
    <>
      <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
        <ListboxButton className="ui-button bg-success justify-between items-center gap-3">
          {selectedPeople.map((person) => person.name).join(', ')}
        </ListboxButton>
        <ListboxOptions anchor="bottom" className="origin-top ui-dropdown">
          {people.map((person) => (
            <ListboxOption key={person.id} value={person} className="ui-dropdown-item">
              {person.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </>
  );
};

export default ListboxWithMultipleValCode;
