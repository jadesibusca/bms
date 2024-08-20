import React from 'react'
import { Image } from "./image";
import { Navigation } from './navigation';


export const Gallery = (props) => {
  return (
    <div>
      <Navigation />
      <div id='gallery' className='text-center'>
        <div className='container'>
      <div className='section-title'>
        <h2>GALLERY</h2>
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
