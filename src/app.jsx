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
    return (
      <div id="app">
        <Nav chapters={this.state.chapters} />
        <header>
          <video src={'/assets/video'+this.state.video} autoPlay loop />
          <h1>{this.state.title}</h1>
          <h2>{marked(this.state.descripton)}</h2>
          <span className="authors">
            {this.state.byline}
          </span>
        </header>
        <TableOfContents chapters={this.state.chapters}
                         description={this.state.description} />
        <ChapterList chapters={this.state.chapters} />
        <footer>
          {marked(this.state.acknowledgements)}
        </footer>
      </div>
    );
  }

});

React.render(<App />, document.body);
