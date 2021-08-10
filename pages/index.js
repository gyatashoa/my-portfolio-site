import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Skills from '../components/Skills'
import Works from '../components/Works'

export default function Home() {
  return (
    <>
     <Nav/>
     <Header/>
     <Works/>
     <Skills/>
     <About/>
    </>
  )
}
