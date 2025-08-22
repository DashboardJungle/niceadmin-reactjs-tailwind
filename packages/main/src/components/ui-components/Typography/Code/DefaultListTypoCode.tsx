import { List, ListItem } from 'flowbite-react';

const DefaultListTypoCode = () => {
  return (
    <>
      <List>
        <ListItem>At least 10 characters (and up to 100 characters)</ListItem>
        <ListItem>At least one lowercase character</ListItem>
        <ListItem>Inclusion of at least one special character, e.g., ! @ # ?</ListItem>
      </List>
    </>
  );
};

export default DefaultListTypoCode;
