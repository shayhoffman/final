import React, { Component } from 'react';
import './App.css';

const portfolioImageList = [
  {id: 'plane', title: 'UX ATLANTIC', description: 'Booking page for the UX Atlantic Airline', link: 'https://codepen.io/shayhoffman/'},
  {id: 'trip', title: 'ESRI MAP', description: 'A map made using ESRI Story Map software', link: 'https://www.arcgis.com/apps/MapJournal/index.html?appid=e4b0729b324c4f15914d940f54c217fe'},
  {id: 'disasters', title: 'ARC GIS MAP', description: 'A map made using national data to determine occurrences of natural disasters', link: 'GISportfolio.pdf'},
  {id: 'NDVI', title: 'NDVI MAP', description: 'A map made using NDVI data to determine plant growth in Austin, TX', link: 'GISportfolio.pdf'},
  {id: 'equestrians', title: 'EQUESTRIAN MAP', description: 'A map made using data to determine best cities for Equestrians', link: 'GISportfolio.pdf'},
  {id: 'writing', title: 'WRITING SAMPLES', description: 'A few samples of my writing', link: 'jewishpaper.pdf'}
]

const footerIconList = [
  {id: 'homeIcon', link: 'https://www.linkedin.com/in/shay-hoffman-89600a151/'},
  {id: 'githubIcon', link: 'https://github.com/shayhoffman'},
  {id: 'codepenIcon', link: 'https://codepen.io/shayhoffman/'},
  {id: 'twitterIcon', link: 'https://twitter.com/ShayHoffman'},
  {id: 'linkedinIcon', link: 'https://www.linkedin.com/in/shay-hoffman-89600a151/'}
]

class App extends Component {
  state = {
    portfolioPieces: [],
    footerIcons: [],
    items: null,
    error: null,
  }

  /* add API call here? componentDidMount ? */

  render() {
    return (
      <div className="portfolio">
        <NavBar id = 'nav'/>
        <Header id = 'home'/>
        <div className = 'otherPieces'>
          <h2>Portfolio</h2><hr/>
          <div className = 'myStuff'>
            {this.state.portfolioPieces.map((obj, key) => {
              return (
                <OtherPieces
                  key = {key}
                  is = {obj.id}
                  title = {obj.title}
                  description = {obj.description}
                  link = {obj.link}/>); })}
          </div>
        </div>

        <About id = 'about'/>

        <div className = "footer">
          {this.state.footerIcons.map((icon, key) => {
            return(
              <footer
                key = {key}
                id = {icon.id}
                link = {icon.link}/>)})}
        </div>
      </div>
    );
  }
}

export default App;
