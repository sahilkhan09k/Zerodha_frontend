import React from 'react'

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h3>Support Portal</h3>
        <a className='fs-5' href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <div className='mt-3'>
          <a style={{marginLeft:'20px', fontSize:'18px'}} href="">Track account opening</a>
          <a style={{marginLeft:'20px', fontSize:'18px'}} href="">Track segment activation</a>
          <a style={{marginLeft:'20px', fontSize:'18px'}} href="">Intraday margins</a>
          <a style={{marginLeft:'20px', fontSize:'18px'}} href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-5 fs-5" style={{ lineHeight: "2" }}>
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Hero