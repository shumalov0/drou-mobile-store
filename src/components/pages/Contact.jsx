import React from "react";
import BreadCumb from "../HomeUi/BreadCumb";
const Contact = () => {
  return (
    <div>
      <BreadCumb page1="Home" mainPage="Contact" />
      <div className="container px-8 mx-auto">
        <h2>We're always eager to hear from you!</h2>
        <p>
          You can call us in working time or visit our office. All mails will
          get the response within 24 hours. Love to hear from you!
        </p>
        <div className="adresBoxList">
          <div className="aderessBox">
            <div className="icon"></div>
            <div className="text">
              <h1>ADRESS</h1>
              <p>1800 Abbot Kinney Blvd. Unit D & E</p>
              <p>Venice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
