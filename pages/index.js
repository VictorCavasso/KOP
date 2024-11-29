import React from 'react'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Repos from '../components/Repos'

const Index = (props) => {
  return (
    <div className='container mx-auto bg-network-left lg:bg-network-right'>
      <PageHead />
      <Hero />
      <Summary />
      <Education />
      <Repos />
      <Footer currentDate={props.currentDate} />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      currentDate: new Date().toString()
    }
  }
}

export default Index
