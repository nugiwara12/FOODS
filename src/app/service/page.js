import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import BackTop from '../../../components/BacktoTop/BacktoTop'

const Service = () => {
  return (
    <div>
      <Navbar />
        <section className="bg-black text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-lg mb-8">
        We provide top-notch services to help you achieve your goals.
      </p>
      <a
        href="#services"
        className="bg-white text-blue-600 py-2 px-4 rounded shadow hover:bg-gray-200"
      >
        Learn More
      </a>
    </div>
  </section>
  
  <section className="py-16 bg-gray-800 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-black p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Service One</h3>
          <p className="font-normal mb-4">
            Description of service one. It helps you with...
          </p>
          <a href="#" className="text-yellow-700 hover:underline">
            Read More
          </a>
        </div>

        <div className="bg-black p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Service Two</h3>
          <p className="font-normal mb-4">
            Description of service two. It provides you with...
          </p>
          <a href="#" className="text-yellow-700 hover:underline">
            Read More
          </a>
        </div>

        <div className="bg-black p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Service Three</h3>
          <p className="font-normal mb-4">
            Description of service three. It offers you...
          </p>
          <a href="#" className="text-yellow-700 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
      </section>
      <BackTop />
      <Footer />
      </div>
  )
}

export default Service