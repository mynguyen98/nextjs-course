import Link from 'next/link'

import Logo from '../icons/logo/logo-company'
import classes from './main-navigation.module.css'
import IconChevronDown from '../icons/icons/icon-chevron-down'
function MainNavigation() {
  return (
    <nav className={classes.navContainer}>
      <div className={classes.navCenter}>
        <div className={classes.navLogo}>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <ul className={classes.navLinks}>
          <li>
            <Link href='/'>Company</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/culture'>Culture</Link>
          </li>
          <li>
            <Link href='/portfolio'>Porfolio</Link>
          </li>
        </ul>
        <div>
          <span>EN</span>
          <IconChevronDown />
        </div>
      </div>
    </nav>
  )
}

export default MainNavigation
