import React, {useState} from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const navToggler = () => setSidebar(!sidebar);

  return (
    <div className="header container-fluid py-3 d-flex justify-content-between align-items-center">
      <ul className={`d-flex align-items-center my-auto justify-content-around ${sidebar ? 'active': ''}`}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>ROOMS</li>
        <li>SERVICES</li>
        <li>GALLERY</li>
        <li>SEE & DO</li>
        <li>CONTACT</li>
      </ul>
      <button className="header_btn">Book A Room</button>
      <div className="bars">
        <FaBars onClick={navToggler} style={{display: `${sidebar?'none': 'inline-block'}`}} />
        <ImCross onClick={navToggler} style={{display: `${sidebar?'inline-block': 'none'}`}} />
      </div>
    </div>
  );
}
