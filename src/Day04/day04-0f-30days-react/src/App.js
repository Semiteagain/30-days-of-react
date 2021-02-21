import React, { Component } from 'react';
import Header from './Components/Header';
import Content from './Components/Content'

export default class App extends React.Component {
    render() {
    return (
    <div className="notificationsFrame">
    <div className="panel">
        <Header />
        <Content />
    </div>
    </div>
    );
    }
    }
  