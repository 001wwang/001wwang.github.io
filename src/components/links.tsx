import React from "react"
import styles from "../styles/links.module.css"
import linkedin from "../assets/icons/linkedin.svg"
import github from "../assets/icons/github.svg"
import mail from "../assets/icons/mailbox.svg"

export default function SideBarLinks() {
  return (
    <div className={styles.sidebar}>
      <div>
        <a href="https://www.linkedin.com/in/william-wang-1b6660153/">
          <img className={styles.sidebar} src={linkedin}></img>
        </a>
      </div>
      <div>
        <a href="https://github.com/001wwang">
          <img className={styles.sidebar} src={github}></img>
        </a>
      </div>
      <div>
        <a href="mailto:williamwang@uchicago.edu">
          <img className={styles.sidebar} src={mail}></img>
        </a>
      </div>
    </div>
  )
}
