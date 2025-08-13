import { Link } from "react-router";


export default function Footer() {
    return (
        <>
            <div className=' flex items-center justify-between mt-6 lg:flex-nowrap flex-wrap lg:gap-0 gap-2 relative z-20'>
                <p className='text-sm text-muted font-normal dark:text-lightgray'>
                    © 2025 NiceAdmin - Designed & Developed by{' '}
                    <Link
                        to='https://www.wrappixel.com/'
                        target='_blank'
                        className='text-muted hover:text-primary dark:text-lightgray text-sm font-medium'>
                        WrapPixel
                    </Link>
                </p>
                <div className='flex items-center gap-5'>
                    <Link
                        to='/'
                        className='text-muted hover:text-primary dark:text-lightgray text-sm font-medium'>
                        About Us
                    </Link>
                    <Link
                        to='/'
                        className='text-muted hover:text-primary dark:text-lightgray text-sm font-medium'>
                        Blog
                    </Link>
                    <Link
                        to='/'
                        className='text-muted hover:text-primary dark:text-lightgray text-sm font-medium'>
                        License
                    </Link>
                </div>
            </div>
        </>
    )
}
