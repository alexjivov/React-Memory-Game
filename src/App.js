import React, { Component } from 'react';
//import minified CSS
import './Assets/css/default.min.css';
import {Layout, Header, Footer} from 'react-mdl';

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
            <Header className="header-color" title={<h1 style={{ textDecoration: 'none', color: 'white',}} to="/"><i class="fas fa-brain" style={{marginRight: '10px'}}></i>Click Game</h1>} scroll>
            </Header>
          </Layout>
        </div>
    
    



        <Footer className ="footer-color">
                <h4 style={{color: '#fff',textAlign:'center',fontSize:'15px'}}>University of Toronto Coding Bootcamp & Alexander Jivov 2018</h4>
            
            </Footer>
 
    </div>
    );
  }
}

export default App;
