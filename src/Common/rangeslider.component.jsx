import React, { Component } from 'react';
import Slider from 'react-rangeslider';
// To include the default styles
import 'react-rangeslider/lib/index.css';

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: this.props.value
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
    var loancalcInstance = this.props.classinstance;

    var loanAmount = loancalcInstance.refs.loanAmount.state.value;
    var interest = loancalcInstance.refs.interest.state.value;
    var term = loancalcInstance.refs.MaximumTerm.state.value;

    var totalAmount = ((loanAmount*interest*term)/1200)+loanAmount;

    var percentPrincipal = (loanAmount*100)/totalAmount;
    var percentInterest = ((loanAmount*interest*term)/1200)*100/totalAmount;
    percentPrincipal = percentPrincipal.toFixed(2);
    percentInterest = percentInterest.toFixed(2);


    loancalcInstance.setState({
      principalValue: Number(percentPrincipal),
      interestValue: Number(percentInterest)
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={this.props.min}
          max={this.props.max}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default Horizontal
