import React, { Component } from "react";
import { Button, Input, Icon, Dropdown, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      newdesc: "",
      currentSong: null
    };
  }

  audio = null;

  togglePlay = e => {
    const song = e.target.id;
    var getdesc = e.target.getAttribute("getdesc");
    this.setState({ newdesc: getdesc });
    if (this.state.currentSong === song) {
      this.state.play ? this.audio.pause() : this.audio.play();
      this.setState({ play: !this.state.play });
    } else {
      if (this.audio) {
        this.audio.pause();
      }

      this.setState({
        currentSong: song,
        play: true
      });
      this.audio = new Audio(song);
      this.audio.play();
    }
  };

  render() {
    const songs = [
      {
        song1: "http://streaming.tdiradio.com:8000/house.mp3",
        desc: "test"
      },
      {
        song1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        desc: "test1"
      },
      {
        song1: "http://streaming.tdiradio.com:8000/house.mp3",
        desc: "test2"
      },
      {
        song1: "http://streaming.tdiradio.com:8000/house.mp3",
        desc: "test3"
      }
    ];
    return (
      <div>
        {songs.map(song => (
          <div>
            <button
              getdesc={song.desc}
              id={song.song1}
              key={song.song1}
              onClick={this.togglePlay}
            >
              {this.state.currentSong !== song || !this.state.play
                ? "Play"
                : "Pause"}
            </button>
          </div>
        ))}
        <div>ANurag {this.state.newdesc}</div>
      </div>
    );
  }
}

export default Music;
