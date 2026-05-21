import React from 'react'
import { Link } from 'react-router-dom'
import spa from './../../img/spa.png'
export default function Admin() {
  return (
    <>
      <div className=' container'>
      <h2 className=" bg-info-subtle text-center p-3 mb-4"> Single Page Applications </h2>
      <p className='text-black fw-medium'>  An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown.

This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring. </p>
      <img src={spa}  alt="SPA" className="img-fluid d-block mx-auto" />
      </div>

    </>
  )
}
