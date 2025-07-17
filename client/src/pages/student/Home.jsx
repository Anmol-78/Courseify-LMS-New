import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimnialsSection from '../../components/student/TestimnialsSection'
import CalltoAction from '../../components/student/CalltoAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CoursesSection/>
      <TestimnialsSection/>
      <CalltoAction/>
      <Footer/>
    </div>
  )
}

export default Home