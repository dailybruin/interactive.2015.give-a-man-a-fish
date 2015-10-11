import React from 'react'

const Chapter = React.createClass({

  propTypes: {
    chapter: React.PropTypes.object.isRequired
  },

  render() {
    function createMarkup(html) {
      return {__html: html};
    };
    let slides = this.props.chapter.photos.map((photo, index) => {
      return (
        <li key={index}>
          <img src={photo.file} />
          <p className="caption">{photo.caption}</p>
        </li>
      );
    });
    return (
      <section className="chapter">
        <div className="intro">
          <video src={this.props.chapter.video} autoPlay loop />
          <h2>{this.props.chapter.title}</h2>
        </div>
        <div className="story">
          <div dangerouslySetInnerHTML={createMarkup(this.props.chapter.transcript)} />
          <div className="slider">
            <ul className="slides">
              {slides}
            </ul>
          </div>
          <audio src={this.props.chapter.audio} />
        </div>

      </section>
    );
  }

})

module.exports = Chapter;
