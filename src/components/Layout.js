import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./Loader"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function Layout({ children }) {
    const router = useRouter();
    const mediaQuery = useMediaQuery("(max-width: 576px)");
    const [isLoading, setIsLoading] = useState(true)
    const [isHome, setIsHome] = useState(true)

    useEffect(() => {
        const element = router.asPath.replace("/", "")

        if (element) {
            setIsHome(false)
            const id = element.substring(1)
            setTimeout(() => {
                const el = document.getElementById(id)
                if (el) {
                    el.scrollIntoView()
                }
            }, 50)
        }
    }, [router])

    return (
        <div className="layout">
            {isHome && isLoading ? (
                <Loader onComplete={() => setIsLoading(false)} />
            ) : (
                <div className="layout__container wrapper">
                    <Header mediaQuery={mediaQuery} />
                    <main className="layout__content">
                        <div className="layout__content-background"></div>
                        {children}
                        <Footer />
                    </main>
                </div>
            )}
        </div>
    )
}
