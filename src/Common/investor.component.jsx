import React, { Component } from 'react';

class Investor extends Component {
    render(){
        return (<div>
              <section className="roc-banner-investor">
                <div className="container">
                  <div className="banner-container">

                    <div className="default-banner">
                      <h1><span className="dft-banner-head">We offer</span> high quality <span className="dft-banner-head">real-estate backed</span> loans <span className="dft-banner-head">for you to</span> buy <span className="dft-banner-head">and service them throughout their</span> life-cycle</h1>
                      <p>Get in touch with us and we'll Match our loans to your underwriting criteria and service them on your behalf</p>
                      <div className="deft-btns">
                          <button type="button" className="btn btn-lg dft-banner-btn emailbtn">EMAIL</button><span className="emailspan"><i className="fa fa-envelope-o acc" aria-hidden="true"></i>CREATE A NEW ACCOUNT</span>
                          <button type="button" className="btn btn-lg dft-banner-btn pwbtn">PASSWORD</button><span className="pwspan"><i className="fa fa-key acc" aria-hidden="true"></i>FORGOT PASSWORD</span>
                          <a className="btn btn-primary btn-lg dft-banner-btn getstarted" href="investor_dash.html" target="_self">GET STARTED</a>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
        </div>);
    }
}

export default Investor
