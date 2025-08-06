import { Button } from "flowbite-react"
import CategoryTags from "src/components/apps/blog/blogedit/CategoryTags"
import GeneralDetail from "src/components/apps/blog/blogedit/GeneralDetail"
import Media from "src/components/apps/blog/blogedit/Media"
import PostDate from "src/components/apps/blog/blogedit/PostDate"
import Status from "src/components/apps/blog/blogedit/Status"
import { BlogProvider } from "src/context/BlogContext"
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp"

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
        text: 'Blog Edit',
    },
]

function BlogEdit() {
    return (
        <>
            <BlogProvider>
                <BreadcrumbComp title="Blog app" links={BCrumb} />
                <div className="grid grid-cols-12 gap-[30px]">
                    <div className="lg:col-span-8 col-span-12">
                        <div className="flex flex-col gap-[30px]">
                            {/* General */}
                            <GeneralDetail />
                            {/* Media  */}
                            <Media />


                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className="flex flex-col gap-[30px]">

                            {/* Status */}
                            <Status />
                            {/* CategoryTags */}
                            <CategoryTags />
                            {/* PostDate */}
                            <PostDate />
                        </div>
                    </div>
                    <div className="lg:col-span-8 col-span-12">
                        <div className="sm:flex gap-3">
                            <Button color={"primary"} className="sm:mb-0 mb-3 w-fit">
                                Save changes
                            </Button>
                            <Button color={"lighterror"} className="w-fit">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </BlogProvider>
        </>
    )
}

export default BlogEdit