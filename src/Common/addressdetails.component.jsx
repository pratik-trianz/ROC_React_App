import React, { Component } from 'react';
import '../styles/personaldetails.css';

class AddressDetails extends Component {
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
                        <div className = "layer1">
                                         <span className = "text-one">1</span> <hr /><span className="text-two">2</span>
                        </div>
                </div>
          </div>

          <div className = "row">
          <div className = "address-employment">
          <div className = "col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className = "loan-details">
           <div className = "details"><h3>ADDRESS DETAILS</h3><hr/></div>
           <form>
            <div className = "form-group">
              <label for="address">Address</label>
              <input type="text" className = "form-control" placeholder="" name="address" />
            </div>

            <div className = "form-group">
                <label for="city">City</label>
                <select className = "form-control">
                  <option value="">New York City</option>
                 <option value="">Chicago</option>
                 <option value="">Washington, D.C</option>
                 <option value="">Los Angeles</option>

                </select>
            </div>

            <div className = "form-group">
              <label for="state">State</label>
              <select className = "form-control">
                <option value="">California</option>
  <option value="">Hawaii</option>
  <option value="">Florida</option>
  <option value="">Texas</option>

              </select>
            </div>

            <div className = "form-group">
                <label for="zip">Zip</label>
                 <select className = "form-control">
                   <option value="">90001</option>
                       <option value="">96701</option>
                       <option value="">32004</option>
                       <option value="">73301</option>

                </select>
            </div>

            <div className = "form-group">
            <label for="residence">Residence Status</label>
             <select className = "form-control">
              <option value="">US Citizen</option>
          </select>
            </div>

            <div className = "form-group">
            <label for="housing">Monthly Housing Payment</label>
             <select className = "form-control">
               <option value="">0.33%</option>
           <option value="">0.43%</option>
           <option value="">0.53%</option>
           <option value="">0.63%</option>

          </select>
            </div>

           </form>
          </div>
          </div>

          <div className = "col-xs-12 col-sm-6 col-md-6 col-lg-6">

          <div className = "loan-details">
           <div className = "details"><h3>EMPLOYMENT DETAILS</h3><hr/></div>
           <form action="/action_page.php">
            <div className = "form-group">
            <label for="address">Current Employer</label>
             <input type="text" className = "form-control" placeholder="" name="address" />
            </div>

            <div className = "form-group">
            <label for="employment">Employment Type</label>
            <select className = "form-control">
              <option value="">Full-Time</option>
    <option value="">Part-Time</option>
    <option value="">Part-Time</option>
<option value="">Contractor</option>
<option value="">Not-Working</option>

          </select>
            </div>

            <div className = "form-group">
            <label for="jobtitle">Current Job Title</label>
            <input type="text" className = "form-control" placeholder="" name="jobtitle" />
            </div>

            <div className = "form-group">
            <label for="monthlyincome">Gross Monthly Income</label>
            <input type="text" className = "form-control" placeholder="" name="monthlyincome"/ >
            </div>

            <div className =  "checkbox">
            <label><input type="checkbox" value="" />I have read all <a href="#">terms and conditions</a> </label>
            </div>

            <div className = "checkbox">
            <label><input type="checkbox" value="" />I authorize RoC Capital to contact me</label>
            </div>

           </form>
          </div>

          </div>
          <button type="button" className = "btn btn-primary goto" data-toggle="modal" data-target="#submit-application">Submit Application</button>
                    </div>
                    </div>
                  </div>
              </section>
          </form>
        </div>);
    }
}

export default AddressDetails
