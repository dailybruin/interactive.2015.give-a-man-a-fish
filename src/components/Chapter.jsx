import React from 'react'
import marked from 'marked'

marked.setOptions({
  breaks: true
});

const Chapter = React.createClass({

  propTypes: {
    chapter: React.PropTypes.object.isRequired,
    index: React.PropTypes.number.isRequired
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
          <p className="caption">{photo.caption}</p>
          <img src={photo.file} />
        </li>
      );
    });
    let transcriptButtonText;
    let transcriptClassName = "transcript";
    if (this.state.transcriptVisible) {
      transcriptButtonText = <span><i className="fa fa-picture-o"></i> Back to photos</span>;
      transcriptClassName += " visible";
    } else {
      transcriptButtonText = <span><i className="fa fa-bars"></i> View transcript</span>;
    }
    return (
      <section className="chapter" id={"chapter"+(this.props.index+1)}>
        <div className="intro">
          <div className="video-wrapper">
            <video src={this.props.chapter.video} autoPlay loop muted />
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
          <audio className="mejs-player" width="100%">
            <source type="audio/mp3" src={this.props.chapter.audio} />
          </audio>
        </div>

      </section>
    );
  }

})

module.exports = Chapter;
