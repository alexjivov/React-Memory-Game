import React, { Component } from 'react';
//import minified CSS
import './Assets/css/default.min.css';
import { Layout, Header, Footer } from 'react-mdl';

// // REACT ROUTER - Allows navigation of different webpages - npm react-router-dom
// import { Link } from 'react-router-dom';





/////////////////
////COMPONENTS////
/////////////////

// import Cards + Game from './Assets/Components/Cards/Card';
import Card from './Assets/Components/Cards/Card';
import cards from './cards.json';
import Wrapper from './Assets/Components/Wrapper/Wrapper';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Card,
      topScore: 0,
      currentScore: 0,
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }
  
  // check if a card has been clicked
  checkIfClicked(id) {
    // create a copy of the cards and use a random method to sort the array
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    let cardsCopy = this.state.cards.slice().sort(function(a, b){return 0.5 - Math.random()});
    // if a card has not been clicked, set its clicked state to true
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;
      
      // set the state and increment the counter
      this.setState({
        cards: cardsCopy,
        currentScore: this.state.currentScore + 1,
        topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
      });
    }
    
    // if a card has been clicked already, then set its click to false and reset the game
    else {
      
      let resetCardsCopy = cardsCopy.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cards: resetCardsCopy,
        currentScore: 0,
      });
    } 
  }
  
  render() {
    return (
      <div className="App">
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout className="layout" fixedHeader>
            <Header
              className="header-color" title={<h1 style={{ textDecoration: 'none', color: 'white', }} to="/"><i className="fas fa-brain" style={{ marginRight: '10px' }}></i>Click Game</h1>} scroll>
              <h4 style={{marginRight:'30%'}}>Click an Image to Begin!</h4>

              <h4> Score: {this.state.currentScore} | Top Score: {this.state.topScore}</h4>
            </Header>

            <div className="jumbotron">
            <h1 className="display-4">Test Your Memory!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>          
          </div>
          </Layout>
          
          <Wrapper>  
          {this.state.cards.map(card => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
        </Wrapper>

          <Footer className="footer-color">
            <h4 style={{ color: '#fff', textAlign: 'center', fontSize: '15px' }}>University of Toronto Coding Bootcamp & Alexander Jivov 2018</h4>

          </Footer>

        </div>
        </div>
        );
      }
    }
    
    export default App;
