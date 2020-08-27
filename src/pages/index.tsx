import React from "react"
import { Title, SubHeader, Emph, EmphList } from "../components/text"
import Container from "../components/container"
import styles from "../components/index.module.css"
import linkedin from "../assets/icons/linkedin.svg"
import github from "../assets/icons/github.svg"
import mail from "../assets/icons/mailbox.svg"
import headshot from "../assets/will.svg"

export default function Home() {
  return (
    <Container>
      <title>Will</title>
      <div className={styles.header}>
        <Title headerText="Hey, I'm" />
        <Title headerText=" Will Wang" />
        <img className={styles.headshot} src={headshot} />
      </div>
      <div>
        <div className={styles.content}>
          <SubHeader headerText="I am" />
          <p>
            a software engineer, originally from California 🌴. Usually I say
            Los Angeles, sometimes I say 20 miles east of it, and rarely I just
            say Arcadia. I left “paradise” to study computer science at the
            <Emph text=" University of Chicago." col="#FE3A8F" />
          </p>

          <p>
            Software is a tool that I leverage to build beautiful products. My
            end goal is always to delight people.
          </p>

          <SubHeader headerText="I code" />
          <p>
            for myself and others. I've been fortunate to work in big tech and
            propietary trading firms.
          </p>
          <div style={{ fontWeight: "bold" }}>
            <EmphList
              items={[
                ["🤝", "AWS Marketplace", "@ Amazon"],
                ["🏦", "Exchange Infra", "@ Belvedere Trading"],
                ["📊", "Research Infra", "@ DRW"],
              ]}
            />
          </div>

          <SubHeader headerText="I like" />
          <p>
            daydreaming, eating, reading, and hiking. Not necessarily in that
            order and definitely not all at once. Currently, I'd recommend:
          </p>

          <p></p>
          <EmphList
            items={[
              ["💭", "Closing your eyes", "during a haircut"],
              ["🍽️", "Hainan Chicken Rice", "from Bangkok Street Food"],
              ["📚", "Code", "by Charles Petzold"],
              ["👟", "Bridge to Nowhere", "in Azusa, CA"],
            ]}
          />

          <SubHeader headerText="I build" />
          <p>designs, projects, perpetual works-in-progress. Check some out!</p>
          <EmphList
            items={[
              ["📝", "HuntWord", "- Elm"],
              ["🏆", "Leaderboard Design", "- Figma"],
              ["🤫", "more coming soon", ""],
            ]}
          />
        </div>
      </div>
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
    </Container>
  )
}
