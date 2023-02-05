import { motion } from "framer-motion"
import React from "react"

import * as styles from "../styles/components/contact.module.scss"

export default function Contact() {

  const contacts = [
    {
      label: "marcello.sebastian09@gmail.com",
      link: "mailto:marcello.sebastian09@gmail.com",
    },
    {
      label: "+886 909 568 271",
      link: "tel:+886909568271",
    },
  ]

  const socials = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/marcello-sebastian/",
    },
    {
      label: "GitHub",
      link: "https://github.com/mush-mush-mush",
    },
  ]

  return (
    <motion.section
      className={styles.contact}
      id="contact"
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: .6,
          ease: [0.17, 0.67, 0.83, 0.67]
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.contact__heading}>
        <h2 className="heading-underline">Get in touch</h2>
        <p>
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>

      <div className={styles.contact__details}>
        <div>
          <h4>Contact details</h4>
          {contacts.map((contact, index) => (
            <a
              href={contact.link}
              key={index}
            >
              {contact.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Socials</h4>
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.contact__background}>
        <div className={styles['contact__background-object--1']}></div>
        <div className={styles['contact__background-object--2']}></div>
      </div>
    </motion.section>
  )
}
