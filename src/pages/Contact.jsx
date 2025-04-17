import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Contact() {

    const navigateAbout = useNavigate()
      const goToHome = ()=>{
        navigateAbout('/')
      }
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>

        <button onClick={goToHome} className= "  bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:text-green-600 hover:bg-white transition duration-300" > Home </button>
      </div>
    );
  }
  
