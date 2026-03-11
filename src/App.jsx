import React from 'react'
import Nav from './components/Nav'
import Trends from './components/Trends'
import Reasons from './components/Reasons'
import Questions from './components/Questions'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black text-white lg:px-30 sm:p-10 overflow-hidden'>
    <Nav />
    <Trends />
    <Reasons/>
    <Questions/>
    <Subscription/>
    <Footer/>
    </div>
  )
}

export default App
