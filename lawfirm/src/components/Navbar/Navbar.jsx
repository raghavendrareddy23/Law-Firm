import React from 'react'
import SectionButtons from '../SectionButtons/SectionButtons'
import Logo from '../Logo/Logo'
import ContactButton from '../ContactButton/ContactButton'
import styles from './Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SectionButtons />
      <ContactButton children={"Contact Now"} />
    </nav>
  )
}

export default NavBar