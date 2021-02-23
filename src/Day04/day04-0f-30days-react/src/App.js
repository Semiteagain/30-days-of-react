import React, { Component } from 'react';
import Header from './Components/Header';
import Content from './Components/Content'
import Toggle from './Components/Toggle';




 function App() {
    return (
        <div className="notificationsFrame">
        <div className="panel">
            <Header 
            title= 'Timeline'
            title= 'Profile'
            title= 'Settings'
            title= 'Chat'
            />
     
            <Content />
            <Toggle 
            text= 'Toggle text'/>

        </div>
        </div>
        ); 
 }
  

    export default App