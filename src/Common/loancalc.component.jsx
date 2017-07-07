import React, { Component } from 'react';
import { Link } from 'react-router';
import DonutChart from 'react-donut-chart';
import Horizontal from './rangeslider.component.jsx';
import PersonalDetails from './personaldetails.component.jsx'

class Loancalc extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      principalValue: 75,
      interestValue: 25
    }
  }
  render(){
    const { principalValue,interestValue } = this.state
        return (<div>
          <section className="roc-banner-borrower">
            <div className="container">
              <div className="banner-container">

                <div id="loan-calculator">
                  <div className="col-md-12">
                    <div className="col-md-4 leftSliderSection">
                      <div className="range-slider">
                        <div className="slider-block">
                          <label className="sliderLabel">Loan Amount <span className="sliderLabelSpan">($)</span></label>
                          <Horizontal min={75000} max={10000000} value={85000} classinstance={this} ref="loanAmount"/>
                        </div>
                        <div className="slider-block">

                          <label className="sliderLabel">Maximum Term <span className="sliderLabelSpan">(Months)</span></label>
                          <Horizontal min={6} max={24} value={12} classinstance={this} ref="MaximumTerm"/>

                        </div>
                      </div>
                        <div className="blockDetails">
                              <Link to='personaldetails' className="btn btn-primary btn-lg">CONTINUE</Link>
                        </div>
                    </div>
                    <div className="col-md-4 leftSliderSection">
                          <div className="range-slider">
                            <div className="slider-block">

                              <label className="sliderLabel">Renovation Budget <span className="sliderLabelSpan">($)</span></label>
                              <Horizontal min={0} max={10000000} value={1000000} classinstance={this} ref="renovation"/>

                            </div>
                            <div className="slider-block">

                              <label className="sliderLabel">Interest Rate <span className="sliderLabelSpan">(%)</span></label>
                              <Horizontal min={8} max={12} value={10} classinstance={this} ref="interest"/>

                            </div>
                          </div>
                    </div>
                    <div className="col-md-4">
                            <div className="padding0">
                                <div className="donutChartContainer">
                                  <DonutChart
                                        data={[{
                                            label: 'Principal',
                                            value: principalValue
                                        },
                                        {
                                            label: 'Interest',
                                            value: interestValue
                                        }]} colors={["#56be47","#253d63"]} width={610} height={500} legend={true}/>
                                </div>
                                <div className="text-center">

                               </div>
                             </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>);
    }
}

export default Loancalc
