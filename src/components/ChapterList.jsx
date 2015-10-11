import React from 'react'

import Chapter from './Chapter.jsx'

const ChapterList = React.createClass({

  propTypes: {
    chapters: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    $('.slider').flexslider({
      animation: 'slide'
    });
  },

  render() {
    let chapters = this.props.chapters.map((chapter, index) => {
      return (
        <Chapter chapter={chapter} key={index} />
      );
    });
    return (
      <section id="chapters">
        {chapters}
      </section>
    );
  }

});

module.exports = ChapterList;
