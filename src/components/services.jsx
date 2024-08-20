import React from 'react'

export const Services = (props) => {

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            These are the services offered.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                {' '}
                <div className="ic"   
                 ><i className={d.icon}>    
        
       
        </i></div>
       
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  { <p>{d.text}</p> }

                </div>
                
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
