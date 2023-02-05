import { motion } from "framer-motion"
import React from "react"

import * as styles from "../styles/components/about.module.scss"

export default function About() {
  return (
    <motion.section
      className={styles.about}
      id="about"
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: [0.17, 0.67, 0.83, 0.67]
        },
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className={styles.about__title}>
        <p>
          Hi, my name is
          <span className={styles['about__title-name']}>Marcello</span>
          <span className={styles['about__title-name']}>Sebastian</span>
        </p>
      </div>
      <div className={styles.about__content}>
        <p>
          A <strong>javascript developer</strong> who focuses on{" "}
          <strong>modern front end web development</strong>. Passionate in
          building beautiful, intuitive and functional user interfaces. This
          includes strong interest in <strong>UI/UX design</strong>,{" "}
          <strong>SPA (Single Page Application)</strong>,{" "}
          <strong>PWA (Progressisve Web App)</strong>, and{" "}
          <strong>serverless technology</strong>.
        </p>
        <a
          href="https://drive.google.com/file/d/17yYigXLwflZhlvas5tyn22f-i1vJ9UQr/view?usp=sharing"
          className="button"
        >
          My Resume →
        </a>
      </div>
    </motion.section>
  )
}
