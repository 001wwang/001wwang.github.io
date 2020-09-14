import React from "react"
import { Title, SubHeader, Emph, EmphList } from "../components/text"
import SideBarLinks from "../components/links"
import Container from "../components/container"
import styles from "../styles/index.module.css"
import headshot from "../assets/will.svg"
import EmphItem from "../utils/emphitem"

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

          <div className={styles.blurb}>
            <SubHeader headerText="I am" />
            <p>
              a software engineer, originally from California 🌴. Usually I say
              Los Angeles, sometimes I say 20 miles east of it, and rarely I
              just say Arcadia. I left “paradise” to study computer science at
              the
              <Emph text=" University of Chicago." col="#FE3A8F" />
            </p>

            <p>
              Software is a tool that I leverage to build beautiful products. My
              end goal is always to delight people.
            </p>
          </div>

          <div className={styles.blurb}>
            <SubHeader headerText="I code" />
            <p>
              for myself and others. I've been fortunate to work in big tech and
              propietary trading firms.
            </p>
            <div style={{ fontWeight: "bold" }}>
              <EmphList
                items={[
                  new EmphItem(
                    "🤝",
                    "AWS Marketplace",
                    "@ Amazon",
                    "https://aws.amazon.com/marketplace"
                  ),
                  new EmphItem(
                    "🏦",
                    "Exchange Infra",
                    "@ Belvedere Trading",
                    "http://www.belvederetrading.com/"
                  ),
                  new EmphItem(
                    "📊",
                    "Research Infra",
                    "@ DRW",
                    "https://drw.com/"
                  ),
                ]}
              />
            </div>
          </div>

          <div className={styles.blurb}>
            <SubHeader headerText="I like" />
            <p>
              daydreaming, eating, reading, and hiking. Not necessarily in that
              order and definitely not all at once. Currently, I'd recommend:
            </p>

            <EmphList
              items={[
                new EmphItem("💭", "Closing your eyes", "during a haircut"),
                new EmphItem(
                  "🍽️",
                  "Hainan Chicken Rice",
                  "from Bangkok Street Food",
                  "https://bangkokstfood.com/"
                ),
                new EmphItem(
                  "📚",
                  "Code",
                  "by Charles Petzold",
                  "https://www.goodreads.com/book/show/44882.Code"
                ),
                new EmphItem(
                  "👟",
                  "Bridge to Nowhere",
                  "in Azusa, CA",
                  "https://www.hikespeak.com/trails/bridge-to-nowhere-hike-los-angeles/"
                ),
              ]}
            />
          </div>

          <div className={styles.blurb}>
            <SubHeader headerText="I build" />
            <p>designs, projects, perpetual works-in-progress. Check some out!</p>
            <EmphList
              items={[
                new EmphItem(
                  "📝",
                  "HuntWord",
                  "Elm",
                  "https://huntword.herokuapp.com/"
                ),
                new EmphItem(
                  "🏆",
                  "Leaderboard Design",
                  "Figma",
                  "https://www.figma.com/proto/X4Bi764c8KGVoHQRfQJau6/Leaderboard?node-id=1%3A2&scaling=scale-down"
                ),
                new EmphItem(
                  "🖼",
                  "Minis",
                  "HTML/CSS/JavaScript",
                  "/minis"
                ),
                new EmphItem("🤫", "more coming soon"),
              ]}
            />
          </div>

        </div>
      </div>
      <SideBarLinks />
    </Container>
  )
}
