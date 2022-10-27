import React from 'react'
import styles from "./style"

import { Routes, Route } from "react-router-dom"
import { Home, Blog, BlogPost, AboutUs, Category, Author, Contact, Privacy, NoPage } from './pages'
import {
  Navbar,
  Footer
} from './@components'

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <div className="flex flex-col justify-between w-full min-h-[100vh]">
      <div className={`${styles.boxWidth} sticky inset-x-0 top-0 z-50`}>
        <Navbar />
      </div>

      <div className={`${styles.boxWidth} flex-1`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/category/:selectedCategory" element={<Category />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>

      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </React.Suspense>
)


export default App