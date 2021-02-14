import React, {Component} from 'react';
class Contact extends Component {
    render() {
	    return (
		<div className="row ">
	           <div className="medium-12 columns">
                   </div>
                   <div id="contact" className="text-center">
<div className="container">
    <div className="section-title text-center">
      <h2>Contact Us</h2>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div className="col-md-10 col-md-offset-1 contact-info">
      <div className="col-md-4">
        <h3>Address</h3>
        <hr/>
        <div className="contact-item">
          <p>4321 California St,</p>
          <p>San Francisco, CA 12345</p>
        </div>
      </div>
      <div className="col-md-4">
        <h3>Working Hours</h3>
        <hr/>
        <div className="contact-item">
          <p>Monday-Saturday: 07:00 - 18:00</p>
          <p>Sunday: CLOSED</p>
        </div>
      </div>
      <div className="col-md-4">
        <h3>Contact Info</h3>
        <hr/>
        <div className="contact-item">
          <p>Phone: +1 123 456 1234</p>
          <p>Email: info@company.com</p>
        </div>
      </div>
    </div>
    <div className="col-md-8 col-md-offset-2">
      <h3>Leave us a message</h3>
      <form name="sentMessage" id="contactForm" novalidate>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
          <p className="help-block text-danger"></p>
        </div>
        <div id="success"></div>
        <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
      </form>
    </div>
  </div>
</div>
<div id="footer">
  <div className="container text-center">
    <div className="col-md-8 col-md-offset-2">
      <div className="social">
        <ul>
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
        </ul>
      </div>
      <p>&copy; 2016 Landscaper. Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
    </div>
  </div>
</div>

                </div>  
	     );
    }
}
export default Contact;

