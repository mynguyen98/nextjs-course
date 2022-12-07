import Link from 'next/link'

import Logo from '../icons/logo/logo-company'
import classes from './main-navigation.module.css'
import IconChevronDown from '../icons/icons/icon-chevron-down'
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
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
      </nav>
      <div>
        <span>EN</span>
        <IconChevronDown />
      </div>
    </header>
  )
}

export default MainNavigation
