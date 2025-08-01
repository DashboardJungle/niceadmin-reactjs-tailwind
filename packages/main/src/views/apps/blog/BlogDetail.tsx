import BlogDetailData from "../../../components/apps/blog/detail";
import { BlogProvider } from "../../../context/BlogContext";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";




const BCrumb = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: "/apps/blog/post",
    text: "Blog",
  },
  {
    href: '',
    text: "Post",
  },
];
const BlogDetail = () => {
  return (
    <>
      <BlogProvider>
        <BreadcrumbComp title="Blog Detail" links={BCrumb} />
        <BlogDetailData />
      </BlogProvider>
    </>
  )
}

export default BlogDetail
