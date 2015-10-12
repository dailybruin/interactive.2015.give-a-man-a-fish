import React from 'react'
import marked from 'marked'

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
          <p className="description">{this.props.chapter.description}</p>
        </div>
        <div className="story">
          <button className="view-transcript">
            <i className="fa fa-bars"></i> View transcript
          </button>
          <div className="transcript"
               dangerouslySetInnerHTML={createMarkup(marked(this.props.chapter.transcript))} />
          <div className="slider">
            <ul className="slides">
              {slides}
            </ul>
          </div>
          <audio className="mejs-player" src={this.props.chapter.audio} />
        </div>

      </section>
    );
  }

})

module.exports = Chapter;
