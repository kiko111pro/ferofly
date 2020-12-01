import React from "react";
import "./bodystyles.css";
import {TextField, Button} from "@material-ui/core"

function Contact() {
  return (
    <div className="contact">
      <h1>CONTACT US</h1><br/><br/>
      <div className=" container contact_address d-flex justify-content-around my-auto">
        <p>info@mysite.com</p>
        <p>/</p>
        <p>500 Terry Francois Street, San Francisco, CA 94158</p>
        <p>/</p>
        <p>Tel: 123-456-7890 </p>
      </div><br/><br/>
      <form className="container">
        <div className="d-flex justify-content-between">
          <TextField
            id="outlined-primary"
            label="Name*"
            fullWidth
            className='mr-3'
            variant="outlined"
            color="primary"
          />
          <TextField
            id="outlined-primary"
            label="Email*"
            variant="outlined"
            fullWidth
            className='ml-3'
            color="primary"
          />
        </div>
        <div className='my-3'>
        <TextField
          id="outlined-secondary"
          label="Subject"
          variant="outlined"
          fullWidth
          className=''
          color="secondary"
        />
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          fullWidth
          className='my-3'
          rows={4}
          variant="outlined"
        />
        <Button variant='contained' style={{fontSize: '1.3rem', fontWeight: '700'}} fullWidth >Submit</Button>
      </form>
    </div>
  );
}

export default Contact;
