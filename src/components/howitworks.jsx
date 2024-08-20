import React from 'react'
import { Image } from "./image";

export const Howitworks = (props) => {
  return (
    <div>
        
      <div id='howitworks' className='text-center'>
    <div className='container'>
      <div className='section-title'>
        <h2>How it Works</h2>
        <p>
       
        </p>
      </div>
      <div className='row'>
        <div className='portfolio-items'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  </div>
  </div>
    
  )
}
