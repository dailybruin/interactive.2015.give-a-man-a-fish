import React from 'react'
import YAML from 'yamljs'
import marked from 'marked'

import TableOfContents from './components/TableOfContents.jsx'
import ChapterList from './components/ChapterList.jsx'
import Nav from './components/Nav.jsx'

import './app.scss'

const App = React.createClass({

  getInitialState() {
    return YAML.load('../website_data.yaml');
  },

  render() {
    function createMarkup(html) {
      return {__html: html};
    };
    return (
      <div id="app">
        <Nav chapters={this.state.chapters} />
        <header>
          <video src={this.state.video} autoPlay loop />
          <h1>{this.state.title}</h1>
          <span className="authors">
            {this.state.byline}
          </span>
          <div className="description"
               dangerouslySetInnerHTML={createMarkup(marked(this.state.description))} />
          <div className="continue-arrow">
            <i className="fa fa-chevron-down"></i>
          </div>
        </header>
        <TableOfContents chapters={this.state.chapters}
                         description={this.state.description} />
        <ChapterList chapters={this.state.chapters} />
        <footer dangerouslySetInnerHTML={createMarkup(marked(this.state.acknowledgements))} />
      </div>
    );
  }

});

React.render(<App />, document.body);
