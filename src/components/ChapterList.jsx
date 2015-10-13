import React from 'react'

import Chapter from './Chapter.jsx'

const ChapterList = React.createClass({

  propTypes: {
    chapters: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    $('.slider').flexslider({
      animation: 'fade',
      controlNav: false,
      slideshow: false
    });
  },

  render() {
    let chapters = this.props.chapters.map((chapter, index) => {
      if (chapter.released) {
        return (
          <Chapter chapter={chapter} key={index} index={index} />
        );
      }
    });
    return (
      <section id="chapters">
        {chapters}
      </section>
    );
  }

});

module.exports = ChapterList;
