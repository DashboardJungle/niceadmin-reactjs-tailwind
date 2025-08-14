import { LibraryProvider } from 'src/context/LibraryContext';
import ComponentWrapper from './ComponentWrapper';

const ComponentLayout = () => {
  return (
    <>
      <LibraryProvider>
        <ComponentWrapper />
      </LibraryProvider>
    </>
  );
};

export default ComponentLayout;
