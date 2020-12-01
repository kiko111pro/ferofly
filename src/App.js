import React from "react";
import "./styles.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import Body from "./components/Body"
import Footer from "./components/Footer"
import { IconButton } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <IconButton color="primary" className="iconbutton_top" onClick={()=>{window.scrollTo({top: '0', behavior: 'smooth'})}}> <ExpandLessOutlinedIcon className="iconbutton_top" /> </IconButton>
    </div>
  );
}
