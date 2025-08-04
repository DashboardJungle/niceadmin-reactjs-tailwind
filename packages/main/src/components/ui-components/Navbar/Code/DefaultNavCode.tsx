import FullLogo from 'src/layouts/full/shared/logo/FullLogo'
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react'
import { Link } from 'react-router'


const DefaultNavCode = () => {
  return (
    <>
      <div>
        <Navbar fluid className='rounded-md'>
          <FullLogo />
          <NavbarToggle />
          <NavbarCollapse className='overflow-x-auto'>
            <NavbarLink href='#' active className='hover:bg-transparent hover:text-blue'>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href='#'>
              About
            </NavbarLink>
            <NavbarLink href='#'>Services</NavbarLink>
            <NavbarLink href='#'>Pricing</NavbarLink>
            <NavbarLink href='#'>Contact</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </>
  )
}

export default DefaultNavCode
