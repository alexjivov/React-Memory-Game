import React, { Component } from 'react';
//import minified CSS
import './Assets/css/default.min.css';
import {Layout, Header} from 'react-mdl';

// // REACT ROUTER - Allows navigation of different webpages - npm react-router-dom
// import { Link } from 'react-router-dom';





/////////////////
////COMPONENTS////
/////////////////


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout fixedHeader>
            <Header className="header-color" title={<h1 style={{ textDecoration: 'none', color: 'white'}} to="/">Click Game</h1>} scroll>
            </Header>
          </Layout>
          </div>
    

      </div>
    );
  }
}

export default App;
