import React from 'react'

const TableOfContents = React.createClass({

  propTypes: {
    chapters: React.PropTypes.array.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render() {
    let chapters = this.props.chapters.map((chapter, index) => {
      return (
        <li key={index} className={chapter.released ? '' : 'unreleased'}>
          <span className="number">{index + 1}</span>
          {chapter.title}
        </li>
      );
    });
    return (
      <section className="table-of-contents">
        <ul>
          {chapters}
        </ul>
        <p className="description">{this.props.description}</p>
      </section>
    );
  }

});

module.exports = TableOfContents;
