import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  }

  return (
    <div className='container p-5'>
      <div className='row text-center'>
        <img className='mb-5' src='images/homeHero.png' alt='Home hero' />
        <h1>Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignup}
        >
          Signup Now
        </button>
      </div>
    </div>
  )
}

export default Hero