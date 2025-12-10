import React from 'react'
import Heropage from '../Components/Heropage'
import About from '../Components/About'
import Aboutproduct from '../Components/Aboutproduct'
import Services from '../Components/Services'

function Home() {
  return (
    <div>
      <Heropage/>
      <About/>
      <Services/>
    <Aboutproduct/>
    </div>
  )
}

export default Home
