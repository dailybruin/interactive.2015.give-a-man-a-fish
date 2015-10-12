import React from 'react'

const Nav = React.createClass({

  propTypes: {
    chapters: React.PropTypes.array.isRequired,
  },

  render() {
    let chapters = this.props.chapters.map((chapter, index) => {
      if (chapter.released) {
        let chapterNumberClassName = "chapter-number " + "chapter" + (index + 1);
        return (
          <li key={index}>
            <a href={"#chapter"+(index+1)}>
              <span className="chapter-title">{chapter.title}</span>
              <span className={chapterNumberClassName}>{index + 1}</span>
            </a>
          </li>
        );
      }
    });
    return (
      <nav id="menu">
        <ul>
          {chapters}
        </ul>
      </nav>
    );
  }

});

module.exports = Nav;
