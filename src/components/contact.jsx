import { useState } from 'react'
import emailjs from 'emailjs-com'
import React from 'react'

const initialState = {
  user_name: '',
  user_email: '',
  user_message: '',
}
export const Contact = (props) => {
  const [{ user_name, user_email, user_message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { user_name, value } = e.target
    setState((prevState) => ({ ...prevState, [user_name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user_name, user_email, user_message)
    emailjs
      .sendForm(
        'service_j1g0wvh', 'template_r5oq9fi', e.target, 'user_oNd72wdR6U0om9nH2Dv3o'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()

          alert("Sent",)
        },
        (error) => {
          console.log(error.text)
          alert("Error", error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Ready to Hire?</h2>
                <p>
                  Please fill out the form below and we'll call you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='user_name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='phone'
                        name='phone'
                        className='form-control'
                        placeholder='Phone Number'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='user_email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='user_message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Be My Secretary

          </p>
        </div>
      </div>
    </div>
  )
}
