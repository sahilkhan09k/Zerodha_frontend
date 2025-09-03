import React from 'react'
import { useNavigate } from 'react-router-dom';

function Universe() {
   const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  }
  return (
    <div className='container mt-5' style={{ marginTop: '5rem' }}>
      <div className='row text-center p-5' style={{ marginBottom: '5rem' }}>
        <h1>The Zerodha Universe</h1>
        <p className='fs-5 text-muted mt-2'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className='col-4 p-3 mt-5 text-center'>
          <img style={{ height: '80px' }} src='images/smallcaseLogo.png' />
          <p className='fs-5 text-muted mt-2'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5 text-center'>
          <img style={{ height: '80px' }} src='images/streakLogo.png' />
          <p className='fs-5 text-muted mt-2'>Algo & strategy platform</p>
        </div>
        <div className='col-4 p-3 mt-5 text-center'>
          <img style={{ height: '80px' }}  src='images/sensibullLogo.svg' />
          <p className='fs-5 text-muted mt-2'>Options trading platform</p>
        </div>
        <div className='col-4 p-3 mt-5 text-center'>
          <img style={{ height: '80px' }} src='images/zerodhaFundhouse.png' />
          <p className='fs-5 text-muted mt-2'>Asset Management</p>
        </div>
        <div className='col-4 p-3 mt-5 text-center'>
          <img style={{ height: '80px' }} src='images/goldenpiLogo.png' />
          <p className='fs-5 text-muted mt-2'>Bonds trading platform</p>
        </div>
        <div className='col-4 p-3 mt-5 text-center mb-5'>
          <img style={{ height: '80px' }} src='images/dittoLogo.png' />
          <p className='fs-5 text-muted mt-2'>Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignup}
        >
          Signup Now
        </button>
      </div>
    </div>
  )
}

export default Universe