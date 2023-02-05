import React, { useState } from "react"
import Link from "next/link"

import * as styles from "../styles/components/Header.module.scss"
import { motion } from "framer-motion"

export default function Header({ mediaQuery }) {
    const [toggleNavbar, setToggleNavbar] = useState(false)

    const navs = [
        { menu: "About", link: "#about" },
        { menu: "Works", link: "#works" },
        { menu: "Contact", link: "#contact" },
    ]

    const headerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5
            },
        },
    }

    const navDesktopVariants = {
        initial: {
            x: "150%",
            y: 0
        },
        animate: {
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.2,
                ease: [0.6, 0.01, -0.05, 0.95],
            },
        },
    }

    const navMobileVariants = {
        initial: {
            x: 0,
            y: "-120%"
        },
        animate: {
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.2,
                ease: [0.6, 0.01, -0.05, 0.95],
            },
        },
    }

    return (
        <>
            <motion.nav
                className={styles.header}
                variants={headerVariants}
                initial="initial"
                animate="animate"
            >
                <motion.div className={`${styles.header__container}`} variants={mediaQuery ? navMobileVariants : navDesktopVariants}>
                    <Link href="/" className={styles.header__logo}>
                        Made by Cello
                    </Link>
                    <button
                        className={`${styles.header__toggler} ${toggleNavbar ? styles['header__toggler--active'] : ""
                            }`}
                        onClick={() => setToggleNavbar(!toggleNavbar)}
                    >
                        <span></span>
                        <span></span>
                    </button>
                    <ul
                        className={`${styles.header__nav} ${toggleNavbar ? styles['header__nav--open'] : ""
                            }`}
                    >
                        {navs.map((nav, index) => (
                            <li key={index}>
                                <Link
                                    href={nav.link}
                                    onClick={() => setToggleNavbar(false)}
                                    scroll={false}
                                >
                                    {nav.menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.nav>
            <div className={`${styles.header__cover} ${toggleNavbar ? styles['header__cover--open'] : ""
                }`}></div>
        </>
    )
}
