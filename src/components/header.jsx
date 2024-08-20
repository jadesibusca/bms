import React from 'react'

export const Header = (props) => {
  // const videoSource = "https://drive.google.com/file/d/1VF-oSv690o2bg0oickc2muqO9IDG-khj/preview";
  return (
    <header id='header'>
      <div className='intro'>
        <video className='VideoTag' autoPlay loop muted>
          <source src="../img/banner.mp4" type='video/mp4' />
        </video>

        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                {/* <iframe title="qwe" src="https://drive.google.com/file/d/1VF-oSv690o2bg0oickc2muqO9IDG-khj/preview" width="640" height="480" allow="autoplay"></iframe> */}
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Hire Now
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
