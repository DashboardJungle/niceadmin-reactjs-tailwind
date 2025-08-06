import { Button } from "flowbite-react"
import GeneralDetail from "src/components/apps/blog/blogadd/GeneralDetail"
import Media from "src/components/apps/blog/blogadd/Media"

import CategoryTags from "src/components/apps/blog/blogadd/CategoryTags"
import PostDate from "src/components/apps/blog/blogadd/PostDate"
import Status from "src/components/apps/blog/blogadd/Status"

// import Variation from "src/components/apps/blog/blogadd/Variation"
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
        text: 'Blog Add',
    },
]
function BlogAdd() {
    return (
        <>
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
                            Add Blog
                        </Button>
                        <Button color={"lighterror"} className="w-fit">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogAdd