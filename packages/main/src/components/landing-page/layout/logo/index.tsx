import { Link } from "react-router"
import DarkLogo from 'src/assets/images/landingpage/logo/dark-logo.svg'
import WhiteLogo from 'src/assets/images/landingpage/logo/white-logo.svg'



const Logo = () => {
  return (
    <Link to='/'>
      <img
        src={DarkLogo}
        alt='logo'
        width={155}
        height={40}
        className='block dark:hidden'
      />
      <img
        src={WhiteLogo}
        alt='logo'
        width={155}
        height={40}
        className='hidden dark:block'
      />
    </Link>
  )
}

export default Logo
