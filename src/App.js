import React, { Component } from 'react';
import './index.css';

/*image files*/
import Flower from './Flower.jpg';
import quirrell from './quirrell.jpeg';

/*navbar dependency*/
import Scrollspy from 'react-scrollspy';

/*child components*/
import {Quote} from './Quote.js';
import Time from './time.js';
import List from './toDoList.js';
import ListItem from './ListItem.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="body">

        <div className="navigation">
          <a className="myName" href="https://www.google.com/" target="_blank"><h2>Welcome to the best dashboard ever</h2></a>
          <Scrollspy className = 'linksContainer' items={['Blog', 'YouTube', 'FUD Stuff']} currentClassName='scrolled'>
            <div><a className = 'nav-link' href = 'https://wordpress.com/' target="_blank">Blog</a></div>
            <div><a className = 'nav-link' href = 'https://www.youtube.com/watch?v=uE-1RPDqJAY' target="_blank">YouTube</a></div>
            <div><a className = 'nav-link' href = 'https://www.youtube.com/user/bgfilms' target="_blank">FUD Stuff</a></div>
          </Scrollspy>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">

              <div className="col-md-4 headerItem" id="randomQuote">
              <h1>Refresh for a new quote!</h1>
                <Quote/>
              </div>

              <div className="col-md-4 headerItem" id="iGreetYou">
                <h1>Hey Friend!</h1>
                <p><Time/></p>
                <img className="quirrell" src={quirrell}/>
              </div>

              <div className="col-md-4 headerItem" id="makeMeDoThings">
                <h1 className="list">What Do You Want To Do Today?:</h1>
                <h3 className="list">Just Add It To the List</h3>
                  <List/>
              </div>

            </div>
          </div>
        </div>

        <div className="navigation">
          <a className="myName" href="https://www.google.com/" target="_blank"><h2>Social Media</h2></a>
          <Scrollspy className = 'linksContainer' items={['Facebook', 'Twitter', 'LinkedIn']} currentClassName='scrolled'>
            <div><a className = 'nav-link' href = 'https://www.facebook.com' target="_blank">Facebook</a></div>
            <div><a className = 'nav-link' href = 'https://twitter.com' target="_blank">Twitter</a></div>
            <div><a className = 'nav-link' href = 'https://www.linkedin.com/' target="_blank">LinkedIn</a></div>
          </Scrollspy>
        </div>

        <div className="main">
        </div>


      </div>
    )
  }
}

export default App;
