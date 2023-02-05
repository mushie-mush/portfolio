import { useMediaQuery } from "@/hooks/useMediaQuery"
import { motion, useTransform, useScroll } from "framer-motion"
import React from "react"

import * as styles from "../styles/components/works.module.scss"

export default function Works({ projects }) {

  const { scrollYProgress } = useScroll()

  const cardParallax = useTransform(scrollYProgress, [0, 1], [-300, 600])

  const imgParallax2 = useTransform(
    scrollYProgress,
    value => -65 + value * 30 + "%"
  )

  const isDesktop = useMediaQuery(
    "(min-width: 1200px) and (orientation: landscape)"
  )
  return (
    <motion.section
      className={styles.works}
      id="works"

    >
      <h2 className={"heading-underline " + styles.works__title}>
        Things i've built
      </h2>
      <div className={styles.works__container}>
        {projects.map((project, index) => (
          <motion.div
            className={styles.works__card}
            key={project.fields.title}
            // style={index % 2 !== 0 && isDesktop ? { y: cardParallax } : ""}
            initial={{ opacity: 0, x: "5%" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: .6,
                ease: [0.17, 0.67, 0.83, 0.67]
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <figure>
              <motion.img
                src={project.fields.thumbnail.fields.file.url}
                alt={project.fields.title}
                style={{ y: imgParallax2 }}
                whileHover={{ scale: 1.1 }}
              ></motion.img>
            </figure>
            <div className={styles['works__card-body']}>
              <h3>{project.fields.title}</h3>
              <p>{project.fields.headline}</p>
              <hr />
              <div className={styles['works__card-actions']}>
                <a
                  href={project.fields.liveView}
                  target="_blank"
                  rel="noreferrer"
                  className={"button"}
                >
                  Live
                </a>
                {project.fields.github && (
                  <a
                    href={project.fields.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    GitHub
                  </a>)
                }
              </div>
            </div>
          </motion.div>
        ))}

      </div>
      <a
        href="https://github.com/mush-mush-mush?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className={"button " + styles.works__button}
      >
        See more in GitHub →
      </a>
    </motion.section>
  )
}
