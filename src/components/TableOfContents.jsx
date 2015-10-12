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
    function createMarkup(html) {
      return {__html: html};
    };
    let chapters = this.props.chapters.map((chapter, index) => {
      let chapterNumberClassName = "chapter-number " + "chapter" + (index + 1);
      return (
        <li key={index} className={chapter.released ? '' : 'unreleased'}>
          <a href={"#chapter"+(index+1)}>
            <span className={chapterNumberClassName}>{index + 1}</span>
            {chapter.title}
          </a>
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
