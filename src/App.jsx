import React from 'react'
import styles from "./style"

import { Routes, Route } from "react-router-dom"
import { Home } from './pages'
import {
  Navbar,
  Footer
} from './@components'

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <div className="flex flex-col justify-between w-full min-h-[100vh]">
      <div className={`${styles.boxWidth} sticky inset-x-0 top-0`}>
        <Navbar />
      </div>

      <div className={`${styles.boxWidth} flex-1`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </React.Suspense>
)


export default App