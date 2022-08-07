import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Section6 from '../components/Section6'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Format from '../layout/format'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Format>
      <Header />
        <Section1 />
        <Section6 />
        <Section3 />
        <Section4 />

    </Format>
  
  )
}
