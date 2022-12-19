import React from "react";
import "../styles/Navbar.css";
import olx from "../styles/logo1.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faLocationDot,
  faChevronUp,
  faPlus,
  faMobileScreen,
  faG,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter_data_1 } from "../Redux/AppReducer/actionTypes";

//firebase

import { signInWithGoogle } from "../Redux/AuthReducer/action";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../Services/firebase";

const provider = new GoogleAuthProvider();

const auth = getAuth(firebaseApp);

const Navbar = () => {
  const [login, Setlogin] = useState(false); //login button
  const [filters, Setfilters] = useState([]); //for filtered city data
  const [state, Setstate] = useState(); // location for city
  const [select, Setselect] = useState(false);
  const [lang, Setlang] = useState(false);
  const data = useSelector((state) => state.AppReducer.home_data);
  const dispatch = useDispatch();

  const change = () => {
    Setselect(!select);
  };

  const change1 = () => {
    Setlang(!lang);
  };

  const handleClick = () => {
    dispatch(signInWithGoogle(auth, provider));
  };

  const functionChange = (datas) => {
    Setstate(datas);
    if (datas == "All") {
      dispatch({ type: filter_data_1, payload: [] });
    } else {
      let y = data.filter((item) => {
        return item.location === datas;
      });
      dispatch({ type: filter_data_1, payload: y });
    }
  };

  const Login_function = () => {
    Setlogin(!login);
  };

  return (
<> 
    {login? <div className='opacity_div' >  <div className='login_form' >
    <span><FontAwesomeIcon icon={faXmark} onClick={Login_function}  /></span>
    <img src="https://hotemoji.com/images/dl/d/guitar-emoji-by-twitter.png" />
    <p>Close deals fromm the comfort of ypur home</p>
    <div className="inner_div" >
    <FontAwesomeIcon icon={faMobileScreen} />
    <p>Continue with phone</p>
    </div>
    <div className="inner_div" >
    <FontAwesomeIcon icon= {faG} />
    <p onClick={handleClick}>Continue with google</p>
    </div>
    <p>All your personal details are safe with us</p>
 </div> </div> :
    <div className='maindiv'>
    <Link to="/"  > <img className='oolx' src={olx} /> </Link>
    <div className='outerdiv' onClick={change} >
      <div className='innerdiv'>
        <div className='innerdiv1'> 
      <FontAwesomeIcon icon={faMagnifyingGlass} />
        <p>{state?state:"All"}</p> </div>
        {select?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> } 
      </div>
    
     <ul className={select?'option1':'option'}  >
   <li className='option_list' onClick={()=>functionChange("All")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>All</p></li>
   <li className='option_list' onClick={()=>functionChange("kerala")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Kerala</p></li>
   <li className='option_list'onClick={()=>functionChange("Tamil_Nadu")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Tamil Nadu</p></li>
   <li className='option_list' onClick={()=>functionChange("Punjab")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Punjab</p></li>
   <li className='option_list' onClick={()=>functionChange("Maharashtra")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Maharashtra</p></li>
     </ul>

            <ul className={select ? "option1" : "option"}>
              <li className="option_list" onClick={() => functionChange("All")}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>All</p>
              </li>
              <li
                className="option_list"
                onClick={() => functionChange("kerala")}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Kerala</p>
              </li>
              <li
                className="option_list"
                onClick={() => functionChange("Tamil_Nadu")}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Tamil Nadu</p>
              </li>
              <li
                className="option_list"
                onClick={() => functionChange("Punjab")}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Punjab</p>
              </li>
              <li
                className="option_list"
                onClick={() => functionChange("Maharashtra")}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Maharashtra</p>
              </li>
            </ul>
          </div>
          <div className="inputdiv">
            <input
              className="biginput"
              placeholder="Find Cars, Mobile Phones and more..."
            />
            <p>
              {" "}
              <FontAwesomeIcon
                className="glass"
                icon={faMagnifyingGlass}
                id="search"
              />{" "}
            </p>
          </div>

          <div className="languages" onClick={change1}>
            <div className="select">
              <p>ENGLISH</p>
              {lang ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: "white" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "white" }}
                />
              )}
            </div>

            <ul className={lang ? "option3" : "option2"}>
              <li className="lang_list">
                <p> English</p>
              </li>
              <li className="lang_list">
                <p> हिन्दी</p>
              </li>
            </ul>
          </div>

  <h3 id='login_button' onClick={Login_function}  >Login</h3>
  <Link to="/admin/addProduct" ><button className='sell_Button' > <FontAwesomeIcon icon={faPlus} /> <p>Sell</p></button> </Link>
  <Link to="/admin" ><p className='Admin_button'>Admin</p></Link>

        </div>
         }   </>
      )
  
}

export default Navbar;