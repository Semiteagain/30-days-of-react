import React from 'react';

function Header(props) {
  

  return (
    <>
       <div className="header">
      <div className="menuIcon">
        <div className="dashTop"></div>
        <div className="dashBottom"></div>
        <div className="circle"></div>
      </div>
      <span className="title">
        {props.title}
        {props.title}
        {props.title}
        {props.title}
      </span>

      <input
        type="text"
        className="searchInput"
        placeholder="Search ..." />

      <div className="fa fa-search searchIcon"></div>
    </div>
  
    </>
  )
}

  
export default Header;