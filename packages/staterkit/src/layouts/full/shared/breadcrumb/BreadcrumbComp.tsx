

import React from "react";
import CardBox from "../../../../components/shared/CardBox";
import { Link } from "react-router";

interface BreadCrumbType {
  links: { href: string; text: string }[]
  title: string
}


const BreadcrumbComp = ({ links, title }: BreadCrumbType) => {
  const lastIndex = links.length - 1
  return (
    <>
      <CardBox
        className={`mb-8 py-5 bg-primary dark:bg-primary overflow-hidden rounded-md border-none shadow-none dark:shadow-none`}>
        <div>
          <div className='flex item-center justify-between'>
            <h4 className='font-semibold text-xl text-white'>{title}</h4>
            <ol
              className='flex items-center whitespace-nowrap'
              aria-label='Breadcrumb'>
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  {index !== lastIndex ? (
                    <>
                      <li className='flex items-center'>
                        <Link
                          to={link.href}
                          className='opacity-80 text-base font-medium text-darklink leading-none'>
                          {link.text}
                        </Link>
                      </li>
                      <li>
                        <span className='text-white/30 mx-3'>/</span>
                      </li>
                    </>
                  ) : (
                    <li
                      className='flex items-center text-base font-medium text-darklink leading-none'
                      aria-current='page'>
                      {link.text}
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </div>
        </div>
      </CardBox>
    </>
  )
};

export default BreadcrumbComp;
