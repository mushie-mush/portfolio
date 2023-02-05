import { motion, useTransform, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react"
import * as styles from "../styles/components/Hero.module.scss"

let W, H, L, n = 15, c = 0, dc = 0.25;
const { sin, cos, PI, random, round } = Math;

const sectionAnimate = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .8
        },
    },
}

const titleVariants = {
    animate: {
        transition: {
            staggerChildren: .6,
        },
    },
}

const titleAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
}

const backgroundVariants = {
    animate: {
        transition: {
            staggerChildren: 0.5,
        },
    },
}

const bubbleAnimation = {
    initial: {
        opacity: 0,
        scale: 1.2,
    },
    animate: {
        opacity: 0.3,
        scale: 1.0,
        transition: {
            duration: 3,

        },
    },
}

export default function Hero() {

    const canvasBg = useRef();

    useEffect(() => {
        let cnv = canvasBg.current;
        let ctx = cnv.getContext("2d");
        function init() {
            W = window.innerWidth;
            H = window.innerHeight;
            cnv.width = W;
            cnv.height = H;
            L = (W < H ? W : H) * 4;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, W, H);
        }
        init();

        function Point() {
            this.ang = 2 * PI * random();
            this.dang = (-0.5 + random()) / 300;
            this.r = 2 * L / 3;
            this.x = W / 2 + this.r * cos(this.ang);
            this.y = H / 2 + this.r * sin(this.ang);
            this.update = function () {
                this.ang += this.dang;
                this.x = W / 2 + this.r * cos(this.ang);
                this.y = H / 2 + this.r * sin(this.ang);
            }
        }

        let ctrls = [];
        for (let i = 0; i < n; i++) {
            ctrls.push(new Point());
        }

        function backgroundAnimate() {
            ctx.fillStyle = "rgba(0,0,0,0.04)";
            ctx.fillRect(0, 0, W, H);
            ctx.beginPath();
            ctx.moveTo((ctrls[0].x + ctrls[n - 1].x) / 2, (ctrls[0].y + ctrls[n - 1].y) / 2);
            for (let p = 0; p < n; p++) {
                let q = p + 1;
                if (q == n) q = 0;
                ctx.quadraticCurveTo(ctrls[p].x, ctrls[p].y, (ctrls[p].x + ctrls[q].x) / 2, (ctrls[p].y + ctrls[q].y) / 2);
                ctrls[p].update();
            }
            ctx.strokeStyle = `hsl(${round(180 + c)}deg, 10%, 70%)`;
            ctx.shadowBlur = L * 30 / 432;
            ctx.shadowColor = `hsl(${round(200 + c)}deg, 50%, 50%)`;
            ctx.lineWidth = L * 2 / 432;

            ctx.stroke();
            ctx.shadowColor = "transparent";
            c += dc;
            if (c >= 200 || c <= 190) dc = -dc;

            window.requestAnimationFrame(backgroundAnimate);
        }
        backgroundAnimate();
    }, []);

    const { scrollYProgress } = useScroll()

    const bubbleYValue1 = useTransform(scrollYProgress, [0, 0.2], [-350, -320])
    const bubbleYValue2 = useTransform(scrollYProgress, [0, 0.2], [0, -50])
    const bubbleYValue3 = useTransform(scrollYProgress, [0, 0.2], [50, -50])
    const bubbleYValue4 = useTransform(scrollYProgress, [0, 0.2], [-300, -330])

    return (
        <motion.section className={styles.hero} variants={sectionAnimate} initial="initial" animate="animate">
            <motion.h1 variants={titleVariants} initial="initial" animate="animate">
                <motion.span variants={titleAnimation}>Dream. </motion.span>
                <motion.span variants={titleAnimation}>Design. </motion.span>
                <motion.span variants={titleAnimation}>Develop. </motion.span>
                <br />
                <motion.span variants={titleAnimation}>For the web.</motion.span>
            </motion.h1>
            <div className={styles.hero__background}>
                <canvas ref={canvasBg} className={styles['hero__background-container']}>
                </canvas>
                <motion.div className={styles['hero__background-container--2']}
                    variants={backgroundVariants}
                    initial="initial"
                    animate="animate">
                    <motion.div
                        className={styles['hero__background-object--1']}
                        variants={bubbleAnimation}
                        style={{ y: bubbleYValue1 }}
                    ></motion.div>
                    <motion.div
                        className={styles['hero__background-object--2']}
                        variants={bubbleAnimation}
                        style={{ y: bubbleYValue2 }}
                    ></motion.div>
                    <motion.div
                        className={styles['hero__background-object--3']}
                        variants={bubbleAnimation}
                        style={{ y: bubbleYValue3 }}
                    ></motion.div>
                    <motion.div
                        className={styles['hero__background-object--4']}
                        variants={bubbleAnimation}
                        style={{ y: bubbleYValue4 }}
                    ></motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}