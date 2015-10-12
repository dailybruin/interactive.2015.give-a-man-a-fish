import React from 'react'

const Nav = React.createClass({

  propTypes: {
    chapters: React.PropTypes.array.isRequired
  },

  render() {
    let chapters = this.props.chapters.map((chapter, index) => {
      if (chapter.released) {
        return (
          <li key={index}>
            <span className="chapter-number">{index + 1}</span>
            {chapter.title}
          </li>
        );
      }
    });
    return (
      <nav>
        <ul>
          {chapters}
        </ul>
      </nav>
    );
  }

});

module.exports = Nav;
