import React from 'react'
import YAML from 'yamljs'
import marked from 'marked'

import TableOfContents from './components/TableOfContents.jsx'
import ChapterList from './components/ChapterList.jsx'
import Nav from './components/Nav.jsx'

import './styles/app.scss'

marked.setOptions({
  breaks: true
});

const App = React.createClass({

  getInitialState() {
    return YAML.load('../website_data.yaml');
  },

  componentDidMount() {
    $('video').each(function(){
      $(this).prop('volume', 0); // set initial volume of all videos to zero
      $(this).fracs(function(fracs, previousFracs){
        if (fracs.visible > 0.5) {
          $(this).stop().animate({'volume': 1}, 2000);
        }
        else
          $(this).stop().animate({'volume': 0}, 2000);
      });
    });
  },

  render() {
    function createMarkup(html) {
      return {__html: html};
    };
    return (
      <div id="app">
        <Nav chapters={this.state.chapters} />
        <header>
          <div className="video-wrapper">
            <video src={this.state.video} autoPlay loop />
          </div>
          <a href="http://dailybruin.com" id="mainsite-refer">
            <img src="/assets/img/db_logo.svg" />
          </a>
          <h1>{this.state.title}</h1>
          <span className="authors">
            {this.state.byline}
          </span>
          <span className="instructions">
            <p>Headphones recommended.</p>
            <i className="fa fa-headphones"></i>
          </span>
          <div className="continue-arrow">
            <i className="fa fa-chevron-down"></i>
          </div>
        </header>
        <TableOfContents chapters={this.state.chapters}
                         description={this.state.description} />
        <ChapterList chapters={this.state.chapters} />
        <footer>
          <div className="acknowledgements" dangerouslySetInnerHTML={createMarkup(marked(this.state.acknowledgements))} />
          <p className="copyright">© 2015 Daily Bruin</p>
        </footer>
      </div>
    );
  }

});

React.render(<App />, document.body);
