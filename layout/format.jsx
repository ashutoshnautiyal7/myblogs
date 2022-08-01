import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function format( {children}) {
  return (
    <>

        <Head><title>blog</title></Head>

        
        <Header />
        <main>{children}</main>
        <Footer/>
    </>
  )
}
