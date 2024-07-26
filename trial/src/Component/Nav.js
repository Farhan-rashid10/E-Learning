// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';


const Navbar = () => {
  
  // const pages = ['IT' , 'Data Analyse']
  // const [category setcategory] = useState("")
  // function handleClick(e){
  //   category
  //   setcategory(pages)

  // }
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "darkblue",
    marginLeft:"38px",
    marginBottom:"30px"
  };
  const button ={
    width: "85px",
    height: "50px",
    fontSize: "medium",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#FFD43B",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  
  
  }
 
 
  return (
    <>
        <nav className="Navbar">
      <FontAwesomeIcon icon={faGraduationCap} size="4x"  className="logo" style={{color: "darkblue",}}/>
     <span className='link'> E-learning</span>
        <Link  to="/" style={linkStyles}>Home</Link>
        <Link to="/about" style={linkStyles}>About</Link>
        <Link to="/courses" style={linkStyles}>Courses</Link>
        <Link to="/pages" style={linkStyles}>Pages</Link>
        <Link to="/category" style={linkStyles}>Category</Link>
        <Link to="/about" style={linkStyles}>Contact</Link>
        <Link to="/help" style={linkStyles}>Help</Link>
        <Link to="/signup" style={linkStyles} >< button style={button}>Login</button></Link>  


   
        

        
    </nav>
    </>
  );
};

export default Navbar;




