import React from 'react';
import './header.css';
import 'animate.css';
import Screenshot from '/Screenshot.png'
import Time from '/Time.png'
import Forbes from '/Forbes.png'
import download from '/download.png'
import mashable from '/mashable.png'
import travelleisure from '/travelleisure.png'



function Header() {
  return (
   <section>
    <div className='head-row'>
      <h3>
      <span>TRAVEL</span>PORTAL
      </h3>
      <h5>CALL US <span style={{color: "red"}}>TOLL FREE</span>  0800 123-4567</h5>
    </div>
    <div className='head-container'>
      <div>
        <h1 className='animate__animated animate__flash animate__infinite animate__slower'>BOOK ONLINE</h1>
        <p>Its safe, easy, and secure.</p>
        <div>
        <input type="text" style={{outline: 'none', padding: '5px', border: "2px solid white"}}/>
        <input type="submit" className='butn' style={{backgroundColor: "red", color: "white", padding: '5px', border: '2px solid red'}} />
        </div>
        <div className='statment-div'>
         <h4>Your shortcut to the world's best luxury hotels</h4>
        </div>
      </div>    
    </div>
    <div className='header-end'>
      <div className='scroll'>
      <div>
        <p style={{padding: "0", color: "grey", textAlign: "center", fontFamily: "Aclonica, sans-serif", fontWeight: "200" }}s>FEATURED ON: </p>
      </div>
      <div className='item'><img src={Time} alt="" style={{width: "100px" , height : "27px"}} />
      <p style={{margin: "0", padding: "0", color: "grey", textAlign: "center", fontFamily: "Aclonica, sans-serif", fontWeight: "200" }}>50 Best Websites</p></div>
      <div className='item'><img src={download} alt="" style={{width: "100px" , height : "27px"}} />
      <p style={{margin: "0", padding: "0", color: "grey", textAlign: "center", fontFamily: "Aclonica, sans-serif", fontWeight: "200" }}>Best Travel Websites</p></div>
      <div className='item'><img src={mashable} alt="" style={{width: "100px" , height : "27px"}} />
      <p style={{margin: "0", padding: "0", color: "grey", textAlign: "center", fontFamily: "Aclonica, sans-serif", fontWeight: "200" }}>Best Travel App</p></div>
      <div className='item'><img src={Forbes} alt="" style={{width: "100px" , height : "27px"}} />
      <p style={{margin: "0", color: "grey", textAlign: "center", fontFamily: "Aclonica, sans-serif", fontWeight: "200" }}>Best Travel Websites</p></div>
      <div className='item'><img src={travelleisure} alt="" style={{width: "100px" , height : "27px"}} />
      <p style={{margin: "0", padding: "0", color: "grey", textAlign: "center", fontFamily: "Aclonica, sans-serif", fontWeight: "200" }}>Top Travel Websites</p></div>


      </div>
      <div className='fade'></div>
      
    </div>
    
   </section>
  )
}

export default Header;
