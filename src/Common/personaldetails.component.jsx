import React, { Component } from 'react';
import { Link } from 'react-router';
import { FormErrors } from './formvalidation.component.jsx';
import '../styles/personaldetails.css';

class PersonalDetails extends Component {
  constructor (props) {
super(props);
this.state = {
  email: '',
  formErrors: {email: ''},
  emailValid: false,
  formValid: false
}
}

handleUserInput = (e) => {
const name = e.target.name;
const value = e.target.value;
this.setState({[name]: value},
              () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
let fieldValidationErrors = this.state.formErrors;
let emailValid = this.state.emailValid;

switch(fieldName) {
  case 'email':
    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    break;
  default:
    break;
}
this.setState({formErrors: fieldValidationErrors,
                emailValid: emailValid
              }, this.validateForm);
}

validateForm() {
this.setState({formValid: this.state.emailValid});
}

errorClass(error) {
return(error.length === 0 ? '' : 'has-error');
}
    render(){
        return (<div>
          <form className = "demoForm">
        <section className = "apply-forms">
        <div className = "container">
        <div className = "row">
         <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className = "apply-loan">
           <h1>Applying for the loan is quick and easy</h1>
           <p>Just enter your information, verify and apply</p>
          </div>
         </div>
        <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className = "layer">
           <span className = "text-one">1</span> <hr /><span className="text-two">2</span>
          </div>
         </div>
        </div>
        <div className = "row">
        <div className = "personal-loan">
         <div className = "col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className = "loan-details">
           <div className = "details"><h3>LOAN DETAILS</h3><hr/></div>
           <form action = "/action_page.php">
            <div className = "form-group">
            <label for = "product">Product</label>
             <select className = "form-control">
               <option value="">Residential Fix And Flip Portfolio Lending Program</option>
           <option value="">Residential Fix And Flip High Loan to Value Program</option>
         <option value="">Residential Fix And Flip Transparent Processing Program</option>
         <option value="">Residential Fix And Flip Single Scrip Service Program</option>

       </select>
            </div>

            <div className = "form-group">
            <label for="loantype">Loan Type</label>
            <input type="text" className = "form-control" placeholder="Residential" name="residential" disabled></input>
            </div>

            <div className = "form-group">
            <label for="loanamount">Loan Amount</label>
            <input type="" className = "form-control" placeholder="2,000,000" name="loanamount"></input>
            </div>

            <div className = "form-group">
            <label for="maximumterm">Maximun Term</label>
             <select className = "form-control">
              <option value="">24 months</option>
          <option value="">20 months</option>
        <option value="">18 months</option>
        <option value="">12 months</option>
       </select>
            </div>

            <div className = "form-group">
            <label for="amortization">Amortization</label>
            <input type="text" className = "form-control" placeholder="Interest Only" name="interest" disabled></input>
            </div>

            <div className = "form-group">
            <label for="maximumterm">If my loan is approved, I would like</label>
             <select className = "form-control">
              <option value="">my documents ELECTRONICALLY delivered to me</option>
       </select>
            </div>

           </form>
          </div>
         </div>

         <div className = "col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className = "loan-details">
          <div className = "details"><h3>PERSONAL DETAILS</h3><hr/></div>
           <form action="/action_page.php">

            <div className = "form-group">
            <label for="fname">Firstname</label>
            <input type="text" className = "form-control" placeholder="" name="fname"></input>
            </div>

            <div class="form-group">
            <label for="lname">Lastname</label>
            <input type="text" className = "form-control" placeholder="" name="lname"></input>
            </div>

            <div className = "form-group">
            <label For="dob">Date of Birth</label>
            <input type="date" className = "form-control" placeholder="mm/dd/yyyy" name="dob"></input>
            </div>

            <div className = "form-group">
            <label for="ssn">SSN</label>
            <input type="text" className = "form-control" placeholder="" name="ssn"></input>
            </div>

            <div className = "form-group">
            <label for="phone">Phone Number</label>
            <input type="text" className = "form-control" placeholder="" name="phone"></input>
            </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <FormErrors formErrors={this.state.formErrors} />
           </form>
          </div>
         </div>

         <Link to='addressdetails'><button type="button" className ="btn btn-primary goto">Goto Step 2</button></Link>
        </div>
        </div>

        </div>
        </section>
    </form>
        </div>);
    }
}

export default PersonalDetails
