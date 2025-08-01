import BlogPosts from "../../../components/apps/blog/BlogPosts";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/apps/blog/post',
    text: 'Blog',
  },
  {
    href: '',
    text: 'Blog Detail',
  },
]
const Blog = () => {
  return (
    <>
      <BreadcrumbComp title="Blog app" links={BCrumb} />
      <BlogPosts />
    </>
  );
};
export default Blog;
