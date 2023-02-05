import { createClient } from "contentful"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Works from '@/components/Works'

import Head from 'next/head'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({ content_type: 'project' })

  return {
    props: {
      projects: res.items
    }
  }
}

export default function Home({ projects }) {

  return (
    <>
      <Head>
        <title>Made by Cello</title>
        <meta
          name="description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <link rel="icon" type="image/x-icon" href="./images/favicon.ico"></link>

        <meta property="og:url" content="https://madebycello.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Made by Cello" />
        <meta
          property="og:description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <meta
          property="og:image"
          content="https://madebycello.netlify.app/og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="madebycello.netlify.app" />
        <meta
          property="twitter:url"
          content="https://madebycello.netlify.app/"
        />
        <meta name="twitter:title" content="Made by Cello" />
        <meta
          name="twitter:description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <meta
          name="twitter:image"
          content="https://madebycello.netlify.app/og.png"
        />
      </Head>
      <Hero />
      <About />
      <Works projects={projects} />
      <Contact />
    </>
  )
}
