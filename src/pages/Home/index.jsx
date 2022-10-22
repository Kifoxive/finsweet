import React from 'react'

import Hero from './Hero'
import Featured from './Featured'
import AboutUs from './AboutUs'
import Category from './Category'
import SpecialPost from './SpecialPost'
import Authors from './Authors'
import Logos from './Logos'
import Testimonials from './Testimonials'
import Join from '../../@components/Join'

const Home = () => {
   return (
      <>
         <Hero />
         <Featured />
         <AboutUs />
         <Category />
         <SpecialPost />
         <Authors />
         <Logos />
         <Testimonials />
         <Join />
      </>
   )
}

export default Home