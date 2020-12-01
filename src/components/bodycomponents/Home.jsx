import React from "react";
import "./bodystyles.css";
// import DatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";

import "react-datepicker/dist/react-datepicker.css";

function Home() {
  // const [checkInDate, setCheckInDate] = useState(new Date());
  // const [checkOutDate, setCheckOutDate] = useState(new Date());

  return (
    <div className="home">
      <h1 className="home_title">Ferofly</h1>
      <h2 className="home_smalltitle">&mdash;Magnify Your Journey&mdash;</h2>
      <img
        className="img-fluid home_banner"
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
        alt=""
      />
      <form className="d-flex flex-wrap justify-content-between align-items-center my-4">
        <div className='mx-auto  align-items-center d-flex flex-wrap justify-content-around'><TextField
          id="date"
          label="Check-In"
          type="date"
          className='m-3'
          //   defaultValue="2017-05-24"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          className='m-2'
          label="Check-Out"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className='m-3 d-flex justify-content-around'><label className='m-2' >Child</label>
        <input  className='m-2' type="number" />

        <label className='m-2' >Adult</label>
        <input  className='m-2' type="number" /></div>
        <button className="header_btn">Search</button>
      </form>
    </div>
  );
}

export default Home;
