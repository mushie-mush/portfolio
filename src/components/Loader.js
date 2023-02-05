import React, { useState } from "react"
import { motion } from "framer-motion"

import * as styles from "../styles/components/loader.module.scss"

const title = "madebycello"

const titleContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "afterChildren",
        },
    },
}

const letterAnimation = {
    initial: {
        y: 100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    },
}

const containerAnimation = {
    animate: {
        y: "-100vh",
        transition: {
            type: "tween",
            duration: 2,
            delay: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    },
}

const backgroundAnimation = {
    animate: {
        y: "-100vh",
        transition: {
            type: "tween",
            duration: 2,
            delay: 0.9,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    },
}

function Loader({ onComplete }) {
    const [isComplete, setIsComplete] = useState(false)

    return (
        <motion.div
            className={styles.loader}
            variants={containerAnimation}
            animate={isComplete && "animate"}
            onAnimationComplete={onComplete}
        >
            <motion.h1
                variants={titleContainer}
                initial="initial"
                animate="animate"
                onAnimationComplete={() => setIsComplete(true)}
            >
                {[...title].map((letter, index) => (
                    <motion.span variants={letterAnimation} key={index}>
                        {letter}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.div
                className={styles.loader__background}
                variants={backgroundAnimation}
                animate={isComplete && "animate"}
            ></motion.div>
        </motion.div>
    )
}

export default Loader
