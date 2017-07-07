import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render(){
        return (<div>
          <section className="roc-banner-home">
            <div className="container">
              <div className="banner-container">
                <div className="default-banner">
                  <h1>All <span className="dft-banner-head">our</span> counterparties <span className="dft-banner-head">have an exceptionally</span> high quality <span className="dft-banner-head">experience with </span>Roc Capital</h1>
                    <p>Roc Capital is a specialty finance company that originates and services non-owner occupied residential real estate and commercial real estate loans and provides related advisory services. Roc Capital has a unique business model that produces loans of exceptional credit quality. We partner with local private lenders, align interests through co-participations and underwrite each loan through a rigorous and transparent process.</p>
                      <div className="deft-btns">
                        <Link to="borrower" className="btn btn-primary btn-lg dft-banner-btn applyLoan">BORROWER</Link>
                        <Link to="" className="btn btn-primary btn-lg dft-banner-btn investmentOpt">INVESTMENT OPPORTUNITY</Link>
                    </div>
                  </div>
            </div>
          </div>
          </section>
        </div>);
    }
}

export default Home
