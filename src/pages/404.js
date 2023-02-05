import React from "react"

import * as styles from "../styles/components/404.module.scss"

function errorPage() {
  return (
    <main className={styles.notfound}>
      <h1>404</h1>
      <h3>Page not found!</h3>
    </main>
  )
}

export default errorPage
