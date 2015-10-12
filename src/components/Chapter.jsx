import React from 'react'
import marked from 'marked'

marked.setOptions({
  breaks: true
});

const Chapter = React.createClass({

  propTypes: {
    chapter: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      transcriptVisible: false
    };
  },

  toggleTranscriptVisible() {
    let transcriptVisible = this.state.transcriptVisible;
    this.setState({transcriptVisible: !transcriptVisible});
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
    let transcriptButtonText;
    let transcriptClassName = "transcript";
    if (this.state.transcriptVisible) {
      transcriptButtonText = <span><i className="fa fa-picture-o"></i> View photos</span>;
      transcriptClassName += " visible";
    } else {
      transcriptButtonText = <span><i className="fa fa-bars"></i> View transcript</span>;
    }
    return (
      <section className="chapter">
        <div className="intro">
          <div className="video-wrapper">
            <video src={this.props.chapter.video} autoPlay loop />
          </div>
          <h2>{this.props.chapter.title}</h2>
          <p className="description">{this.props.chapter.description}</p>
        </div>
        <div className="story">
          <button className="view-transcript" onClick={this.toggleTranscriptVisible}>
            {transcriptButtonText}
          </button>
          <div className={transcriptClassName}
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
