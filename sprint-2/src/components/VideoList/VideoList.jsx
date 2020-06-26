import React, { Component } from "react";
import NextVideo from "../NextVideo/NextVideo";
import "./VideoList.scss";
// import NextVideoData from "../../BrainFlixData/NextVideo.json";

export default class VideoList extends Component {
 

  render() {
    return (
      <section className="videos">
        <h5 className="videos__heading">NEXT VIDEO</h5>
        {this.state.nextVideoContent.map((nextVideo) => (
          <NextVideo
            key={nextVideo.id}
            title={nextVideo.title}
            channel={nextVideo.channel}
            image={nextVideo.image}
          />
        ))}
      </section>
    );
  }
}