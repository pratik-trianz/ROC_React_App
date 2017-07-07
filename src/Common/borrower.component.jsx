import React, { Component } from 'react';
import { Link } from 'react-router';

class Borrower extends Component {
    render(){
        return (<div>
          <section className="roc-banner-borrower">
            <div className="container">
              <div className="banner-container">
                <div className="default-banner">

                    <h1><span className="dft-banner-head">We will refer you to a</span> qualifying lender<span className="dft-banner-head"> on our platform who will offer you a</span> best-in-class <span className="dft-banner-head">solution</span></h1>
                    <p>Get in touch, tell us what you need, and we'll customize a plan for you when financing a residential property that you want to buy and fix, or build a commercial property</p>
                    <div className="deft-btns">
                        <Link to="/loancalc" className="btn btn-primary btn-lg dft-banner-btn applyLoan">APPLY FOR A LOAN</Link>
                        <Link to="" className="btn btn-primary btn-lg dft-banner-btn borrwlogin">EXISTING USER? LOG IN</Link>
                    </div>

                  </div>
              </div>
            </div>
          </section>
        </div>);
    }
}

export default Borrower
