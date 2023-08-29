import React from 'react'
import styles from './ContactButton.module.css'

const ContactButton = ({children}) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default ContactButton