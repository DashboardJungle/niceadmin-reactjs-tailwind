import CardBox from "src/components/shared/CardBox";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Link } from "react-router";
import { HR } from 'flowbite-react'


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Tabler Icons',
  },
]
const TablerIcon = () => {
  return (
    <>
      <BreadcrumbComp title="Tabler Icons" links={BCrumb} />
      <CardBox>
        <h6>🔍 Explore Icons</h6>
        <p>
          Browse and search for icons directly on the{' '}
          <Link
            to='https://tabler-icons.io/'
            target='_blank'
            rel='noopener noreferrer'>
            Tabler Icons website
          </Link>
          .
        </p>

        <HR className='my-3' />

        <h6>⚙️ Installation</h6>

        <p>
          To use Tabler icons in your project, install the official React
          package:
        </p>
        <SyntaxHighlighter language='typescript' style={docco}>
          {` npm install @tabler/icons-react `}
        </SyntaxHighlighter>

        <HR className='my-3' />

        <h6>🧩 Usage Example</h6>

        <p>Import and use any icon in your components:</p>
        <SyntaxHighlighter language='typescript' style={docco}>
          {`import { IconHome } from '@tabler/icons-react';
function MyComponent() {
  return <IconHome />;
}`}
        </SyntaxHighlighter>
      </CardBox>
    </>
  );
};

export default TablerIcon;
