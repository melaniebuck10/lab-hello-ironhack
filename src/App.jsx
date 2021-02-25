import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
                <img src="./images/ironhack-logo.svg" className="App-logo-nav"alt="logo"/>
                  <img src="./images/menu-top.svg" className="App-logo-nav2"alt="logo"/>
                  </ul>
                  </nav>
                  <section className="First-part">
                    <div className="part1">
                  <header >
                    <strong><h1>Say hello to <br/>ReactJS</h1></strong>
                  </header>
                  <p> You will learn a Frontend <br/>framework from scratch, to <br/>become a Ninka Developer.</p>
                  <button>Awesome!</button>
                  </div>
                  </section>
                  <section className="Second-part">
                    <div className="row">
                      <div className="column">
                      <img src="./images/icon1.png" alt=""/> <br/>
                    <p className="description"><h3>Declaractive</h3> <br/> React makes it <br/> painless to create <br/>interactive UIs.</p>
                      </div>
                      <div className="column">
                      <img src="./images/icon2.png" alt=""/> <br/>
                    <p className="description"><h3>Components</h3> <br/> Build encapsulated <br/> components that <br/> manage their state.</p>
                      </div>
                      <div className="column">
                      <img src="./images/icon3.png" alt=""/> <br/>
                    <p className="description"><h3>Single-Way</h3> <br/> A set of immutable <br/> values are passed to <br/> the component's.</p>
                      </div>
                      <div className="column">
                      <img src="./images/icon4.png" alt=""/> <br/>
                    <p className="description"><h3>JSX</h3> <br/> Statically-typed <br/> designed to run on <br/> modern browsers.</p>
                      </div>
                    </div>
                  </section>
        </header>
      </div>
    );
  }
}

export default App;
