import React from "react"
import styles from "./text.module.css"

export { Title, SubHeader, Emph, EmphList }

export default function Blurb(props) {
  return <p className={styles.info}>{props.text}</p>
}

function Emph(props) {
  return (
    <span className={styles.emph} style={{ color: props.col }}>
      {props.text}
    </span>
  )
}

function Title(props) {
  let text = props.headerText
  let firstWord = text.substr(0, text.indexOf(" "))
  let rest = text.substr(text.indexOf(" ") + 1)
  return (
    <h1 className={styles.title}>
      <span className={styles.accent}>{firstWord}</span> {rest}
    </h1>
  )
}

function SubHeader(props) {
  return <h3 className={styles.subheader}>{props.headerText}</h3>
}

function EmphList(props) {
    if (props.hasOwnProperty("items")) {
        return (
            <ul className={styles.emphlist}>
              {props.items.map(item => (
                <li>
                  {" "}
                  <span className={styles.emote}> {item[0]} </span>{" "}
                  <Emph text={item[1]} col="#FE3A8F" /> {item[2]}{" "}
                </li>
              ))}
            </ul>
          )
    } else {
        return <ul></ul>
    }
}
