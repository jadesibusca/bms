import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

export const Navigation = (props) => {

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container-x'>
        <div className='navbar-header' >
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {/* Be My Secretary */}
          </a>{' '}

        
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Home  
              </a>0
            </li> */}
            <li>
              <a href='#whyhire' className='page-scroll'>
                Why Hire
              </a>

           
            </li>
            <li>
                <a href='#services' className='page-scroll'>
                  Services           
                </a>   

            </li>
            <li>
                <a href='#howitworks' className='page-scroll'>
                <div class="dropdown">
           How it Works
            <div class="dropdown-content">
            <a href="#howitworks">Gallery</a>
              <a href="#testimonials">Testimonials</a>
         
            </div>
          </div>         
                </a>   

            </li>
      
            
        
            {/* <li className='gallery'>
            <Link to="/gallery" className='page-scroll'>Gallery</Link>
              
             

            </li> */}
            {/* <li>
              <a href='#howitworks' className='page-scroll'>
                How it Works
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href='#team' className='page-scroll'>
                Services
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
