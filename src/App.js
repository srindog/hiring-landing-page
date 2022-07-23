import './App.css';
import React, {useState} from 'react';
import validator from 'validator'

const SWES = 'swes'
const COMPANIES = 'companies'

const LANDING_PAGE_DATA = {
  'companies': {
    'toggleTitle': SWES,
    'header': 'A contracting platform for top tech companies',
    'subheader': 'Hire highly skilled software engineers that hit the ground running',
    'signUpTitle': 'Sign up and we\'ll contact you!'
  },
  'swes' : {
    'toggleTitle': COMPANIES,
    'header': 'Make a career out of SWE contracting',
    'subheader': 'Work in top tech, get promoted, get paid your worth',
    'signUpTitle': 'Sign up for early access!'
  }
}

const getLandingTitle = (whichLanding) => {
  return whichLanding ? SWES : COMPANIES
}

function App() {
  const [whichLanding, setWhichLanding] = useState(true)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const landingTitle = getLandingTitle(whichLanding)
  const data = LANDING_PAGE_DATA[landingTitle]
  console.log(email)
  const toggleLanding = () => {
    setWhichLanding(!whichLanding)
  }

  const validateEmail = (email) => {
    validator.isEmail(email) ? setIsValidEmail(true) : setIsValidEmail(false)
  }

  const onEmailChange = (e) => {
    let email = e.target.value
    setEmail(email)
    validateEmail(email)
  }

  return (
    <div className="justify-center px-10 md:px-20 lg:px-40 bg-gray-100 bg-cover bg-top min-h-screen antialiased">
      <header>
          <nav className="mx-auto pt-5">
            <div className="mx-auto ">
              <div className="flex flex-col md:flex-row items-center text-gray-900 justify-between h-20">
                <a href="#" className="text-3xl mb-6 md:text-4xl lg:text-5xl mr-4 font-semibold">🌌Orbit</a>
                <div className="flex text-lg md:text-xl lg:text-2xl space-x-4">
                  <a 
                    className='p-2 border-4 border-emerald-400 active:bg-gray-200 rounded-lg font-semibold' 
                    href="#"
                    onClick={toggleLanding}
                  >
                    for {data.toggleTitle}
                  </a>
                </div>
              </div>
            </div>
          </nav>
      </header>
      

      
      <section className="relative">
        <div className="flex flex-col-reverse lg:flex-row items-center font-semibold text-gray-900 mx-auto gap-12 mt-24 md:mt-32 lg:mt-48">
          <div class="flex flex-col">
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-7'>
              {data.header}
            </h3>
            <h4 className='text-lg md:text-2xl lg:text-3xl text-gray-600 font-semibold mb-6'>
              {data.subheader}
            </h4>
            <div className="flex flex-row p-2 text-xs md:text-md lg:text-lg">
                <input 
                  className='pl-3 mr-1 rounded-lg outline-emerald-400'
                  value={email}
                  onChange={onEmailChange}
                />         
              <button className='bg-emerald-400 p-2 text-gray-600 font-semibold rounded-lg border-2 border-emerald-400 hover:border-emerald-200 active:bg-emerald-500'>
                {data.signUpTitle}
              </button>
            </div>
            {!isValidEmail && <span className='text-red-600'>Please enter a valid email!</span>}
          </div>
        </div>

        
      </section>


    </div>
  );
}

export default App;
