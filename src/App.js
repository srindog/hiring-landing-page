import './App.css';
import React, { useState } from 'react';
import validator from 'validator'

import galaxy from "./animations/103322-galaxy-cycle.json"
import leadership from "./animations/48604-leadership.json"
import screening from "./animations/56922-code-typing-concept.json"
import work from "./animations/103520-freelancer-working-on-laptop.json"
import progression from "./animations/90507-money-saving.json"


import Animation from './components/Animation'

const COMPANY_NAME = 'Orbit'

function App() {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  const validateEmail = (email) => {
    validator.isEmail(email) ? setIsValidEmail(true) : setIsValidEmail(false)
  }

  const onEmailChange = (e) => {
    let email = e.target.value
    setEmail(email)
    validateEmail(email)
  }



  return (
    <div className="min-w-screen min-h-screen bg-gray-100 bg-cover bg-top antialiased">
      <div className="flex flex-col justify-center text-left mx-10 md:mx-20 lg:mx-52">
      
        <header>
            <nav className="mx-auto pt-5">
              <div className="mx-auto">
                <div className="flex flex-col md:flex-row items-right text-gray-900 justify-between h-20">
                  <div className="flex flex-row">
                    <Animation 
                        data={galaxy}
                        speed={.5}
                        className='w-24 h-24'
                    />
                    <a href="#" className="flex flex-row text-3xl md:text-4xl lg:text-5xl mr-4 font-semibold">
                      <p className='pt-6 md:pt-3'>{COMPANY_NAME}</p>
                    </a>
                  </div>

                  {/* <div className="flex text-lg md:text-xl lg:text-2xl space-x-20">
                    <a 
                      className='p-2 hover:bg-gray-200 active:bg-gray-300 rounded-lg font-semibold' 
                      href="#"
                    >
                      About Us
                    </a>
                  </div> */}
                </div>
              </div>
            </nav>
        </header>
            
      
        <section className="relative mt-10 mb-20">
          
          <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 gap-14 md:gap-22 lg:gap-48 items-center font-semibold text-gray-900 mx-auto">
            <div className="flex flex-col flex-wrap">
              {/* title content */}
              <h3 className='lg:leading-tight text-2xl md:text-4xl lg:text-5xl font-bold mb-10'>
                Make a career out of SWE contracting
              </h3>
              
              <h4 className='text-lg md:text-xl lg:text-2xl text-gray-700 mb-9'>
              Work in top tech, level up, get paid your worth
              </h4>
              <div className="flex flex-row p-2 text-xs md:text-md lg:text-lg">
                  <input 
                    className='pl-3 mr-1 rounded-lg outline-emerald-400'
                    value={email}
                    onChange={onEmailChange}
                  />         
                <button className='bg-emerald-400 p-2 text-gray-700 rounded-lg border-2 border-emerald-400 hover:border-emerald-200 active:bg-emerald-500'>
                  Sign up for early access!
                </button>
              </div>
              {!isValidEmail && <span className='text-red-600'>Please enter a valid email!</span>}
            </div>

            {/* image */}
            <Animation 
              data={leadership}
              speed={2}
              className=''
            />
            
          </div>

          
        </section>

        <hr/>

        <section className="relative mt-20 mb-20">
          <div className="flex flex-col-reverse lg:flex-row md:grid md:grid-cols-2 gap-14 md:gap-22 lg:gap-48 items-center font-semibold text-gray-900">
          
            {/* image */}
            <Animation 
              data={screening}
              speed={.6}
              className=''
            />
          
          
        
            {/* jobs content */}
            <div className="flex flex-col flex-wrap">
              <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-10'>
              Once you're in, you're in
              </h3>
              <h4 className='text-lg md:text-xl lg:text-2xl text-gray-700'>
                Pass our screening assessment and you never have to take it again.
                If you fail, no matter! We'll give you feedback, so that you can improve your skills before you take it again!
              </h4>
            </div>
          </div>
        </section>

        <hr/>

        <section className="relative mt-20 mb-20">
          <div className="flex flex-col lg:flex-row items-center md:grid md:grid-cols-2 gap-14 md:gap-22 lg:gap-48 font-semibold text-gray-900">
            

            {/* levels content */}
            <div className="flex flex-col flex-wrap">
              <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-10'>
              Work on what you want
              </h3>
              <h4 className='text-lg md:text-xl lg:text-2xl text-gray-700'>
              Based on your past contracting reviews, we will do our best to find you a job that works for you!
              Prior to your assignment, we will send you documentation of your next tech stack and put you in contact 
              with your new team, so that on day 1, you can hit the ground running
              </h4>
            </div>

            
            {/* image */}
            <Animation 
              data={work}
              speed={2}
              className=''
            />
          </div>
        </section>

        <hr/>

        <section className="relative mt-20 mb-20">
          <div className="flex flex-col-reverse lg:flex-row md:grid md:grid-cols-2 gap-14 md:gap-22 lg:gap-48 items-center font-semibold text-gray-900">
          
          {/* image */}
          
              <Animation 
                  data={progression}
                  speed={1.25}
                  className=''
                />

        
          
        
            {/* jobs content */}
            <div className="flex flex-col">
              <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-10'>
              Own your career growth
              </h3>
              <h4 className='text-lg md:text-xl lg:text-2xl text-gray-700 mb-9'>
                Based on your years of experience and the results of your screening, we assign you an initial level.
                This determines your hourly rate. If you receive consistently positive feedback from your employers or contribute something amazing, you get leveled up, woohoo!


              </h4>
              
            </div>
            </div>


        </section>
    
      </div>

      <footer className='min-w-screen bg-white px-10 md:px-20 lg:px-52 py-8'>
          <div className='flex flex-wrap md:justify-start gap-12'>
            <ul>
              <li>
                <div class="flex flex-row">
                  <Animation 
                          data={galaxy}
                          speed={.5}
                          className='w-10 h10'
                  />{COMPANY_NAME}
                </div>
                
              </li>
              <li>
                Made with 💖 {'&'} 💡
              </li>
            </ul>
          </div>
        </footer>
    </div>
    
    
  );
}

export default App;
