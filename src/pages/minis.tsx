import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import { Title, SubHeader, Emph, EmphList } from "../components/text"
import styles from "../styles/minis.module.css"


function getMiniFiles() {
    return []
}

const Minis = ({data}) => (
  <Container>
    <nav>
        <a className={styles.backbutton} href="/">🏠</a>
    </nav>
    <main>
      <Title headerText=" Mini Projects"></Title>
      <p>
        Using pure HTML/CSS/JavaScript to create delightful pieces of user
        interface. No frameworks.
      </p>
      <ul>
          {data.allFile.edges.map(val => {
              const nd = val.node
          return <li key={nd.id}><a href={"/static-minis/" + nd.relativePath}>{nd.relativeDirectory}</a></li>
          })}
      </ul>
    </main>
  </Container>
)

export const query = graphql`
   query MinisQuery {
    allFile(filter: {extension: {eq: "html"}}) {
      edges {
        node {
          absolutePath
          id
          relativeDirectory
          relativePath
        }
      }
    }
  }`
export default Minis
