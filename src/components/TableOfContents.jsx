import React from 'react'
import marked from 'marked'

marked.setOptions({
  breaks: true
});

const TableOfContents = React.createClass({

  propTypes: {
    chapters: React.PropTypes.array.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render() {
    console.log(this.props.description);
    function createMarkup(html) {
      return {__html: html};
    };
    let chapters = this.props.chapters.map((chapter, index) => {
      return (
        <li key={index} className={chapter.released ? '' : 'unreleased'}>
          <span className="chapter-number">{index + 1}</span>
          {chapter.title}
        </li>
      );
    });
    return (
      <section id="table-of-contents">
        <ul>
          {chapters}
        </ul>
        <div className="description"
             dangerouslySetInnerHTML={createMarkup(marked(this.props.description))} />
      </section>
    );
  }

});

module.exports = TableOfContents;
