import { List, ListItem } from 'flowbite-react';
import { HiCheckCircle } from 'react-icons/hi';

const IconListTypoCode = () => {
  return (
    <>
      <List>
        <ListItem icon={HiCheckCircle}>At least 10 characters (and up to 100 characters)</ListItem>
        <ListItem icon={HiCheckCircle}>At least one lowercase character</ListItem>
        <ListItem icon={HiCheckCircle}>
          Inclusion of at least one special character, e.g., ! @ # ?
        </ListItem>
      </List>
    </>
  );
};

export default IconListTypoCode;
