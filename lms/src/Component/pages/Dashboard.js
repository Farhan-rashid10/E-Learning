// src/Dashboard.js
import React from 'react';
import Sidebar from '../Sidebar';
import './Pages.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faNodeJs,faJs,faPython,faReact } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faDatabase } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className='sidenav'>
      <section className="popular-courses">

        <Link  className="link" to="/html">
          <div className="cards6">
            <div className="popular2">
              <div className="clourontd"><FontAwesomeIcon icon={faHtml5} size='10x' style={{color: "brown", textAlign: 'center'}} /></div>
                <hr />
                <h4>HTML5 for Begginer</h4>
               
              </div>
              </div>
      </Link>
      <Link  className="link" to="/css">
          <div className="cards6">
            <div className="popular2">
              <div className="clourontd"><FontAwesomeIcon icon={faCss3} size='10x' style={{color: "blue", textAlign: 'center'}} /></div>
                <hr />
                <h4>CSS3 Animation</h4>
               
              </div>
              </div>
      </Link>
      <Link  className="link" to="/data">
          <div className="cards6">
            <div className="popular2">
              <div className="clourontd"><FontAwesomeIcon icon={faChartBar} size='10x' style={{color: "dark blue", textAlign: 'center'}} /></div>
                <hr />
                <h4>Data Analysis</h4>
               
              </div>
              </div>
      </Link>
      <Link  className="link" to="/node">
          <div className="cards6">
            <div className="popular2">
              <div className="clourontd"><FontAwesomeIcon icon={faNodeJs} size='10x' style={{color: "green", textAlign: 'center'}} /></div>
                <hr />
                <h4>Node js</h4>
               
              </div>
              </div>
      </Link>
   

<Link  className="link" to="/node">
  <div className="cards6">
    <div className="popular2">
      <div className="clourontd"> <FontAwesomeIcon icon={faJs} size='10x' style={{color: "yellow",}}/></div>
        <hr />
        <h4>Advance For JavaScript</h4>
       
      </div>
      </div>
</Link>
<Link  className="link" to="/node">
  <div className="cards6">
    <div className="popular2">
      <div className="clourontd"><FontAwesomeIcon icon={faReact} size='10x' style={{color: "blue",}}/></div>
        <hr />
        <h4>React</h4>
       
      </div>
      </div>
</Link>
<Link  className="link" to="/node">
  <div className="cards6">
    <div className="popular2">
      <div className="clourontd"><FontAwesomeIcon icon={faPython} size='10x' style={{color: "linear-gradient(360deg, darkblue, #ffb800",}}/></div>
        <hr />
        <h4>Python</h4>
       
      </div>
      </div>
</Link>
<Link  className="link" to="/node">
  <div className="cards6">
    <div className="popular2">
      <div className="clourontd"><FontAwesomeIcon icon={faDatabase} size='10x' style={{color: "#74c0fc", textAlign: 'center'}} /></div>
        <hr />
        <h4>Database</h4>
       
      </div>
      </div>
</Link>
</section>

   
      
    </div>
    </>
  );
};

export default Dashboard;
