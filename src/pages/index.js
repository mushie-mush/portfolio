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
    },
    revalidate: 60
  }
}

export default function Home({ projects }) {

  return (
    <>
      <Hero />
      <About />
      <Works projects={projects} />
      <Contact />
    </>
  )
}
