import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Skills from '../components/Skills'
import Works from '../components/Works'
import firebase from '../firebase/config'
import { useCollection } from "react-firebase-hooks/firestore";



const Home = ({projects}) => {
  

  return (
    <>
     <Nav/>
     <Header/>
     <Works projects = {projects}/>
     <Skills/>
     <About/>
     <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const res = await firebase.firestore().collection("projects").get();
  const projects =  res.docs.map(e => ({...e.data(),id: e.id}));
  return {
    props: {
      projects,
    },
  }
}

export default Home
