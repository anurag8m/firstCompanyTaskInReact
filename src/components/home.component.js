import React, { Component } from "react";
import "../App.css";
import boy from "../images/boy.png";
import cd from "../images/cd.png";
import playbutton from "../images/play.png";
import pausebutton from "../images/pause.png";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      newdesc: "",
      newtime: "",
      finaltime: "",
      finaltext: "Click Below songs to play",
      currentSong: null
    };
  }

  audio = null;

  togglePlay = e => {
    const song = e.target.id;
    var getdesc = e.target.getAttribute("getdesc");
    var gettime = e.target.getAttribute("gettime");
    console.log(getdesc);
    this.setState({ finaltext: getdesc, finaltime: gettime });
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
        desc: "01. Clouds In The Forest",
        time: "3:20"
      },
      {
        song1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        desc: "02. Rat In The River",
        time: "2:48"
      },
      {
        song1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        desc: "03. Giants And Companions",
        time: "2:27"
      },
      {
        song1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        desc: "04. Ashamed Of Light",
        time: "3:32"
      },
      {
        song1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        desc: "05. Doubting The Forest",
        time: "2:40"
      },
      {
        song1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        desc: "06. Criminals Of The Lake",
        time: "2:55"
      }
    ];
    return (
      <div>
        <div className="container-fluid bg-1 text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={boy} className="img-responsive img-circle" />
                <div class="centered">
                  <span className="curt">CURT</span> &nbsp;
                  <span className="sheard">SHEARD</span>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ marginTop: "100px" }}>
                  <span className="hellotest">
                    <p>
                      CURT SHEARD&nbsp;
                      <span class="dot" />
                      &nbsp; BASS
                    </p>
                  </span>

                  <span className="hellotest">
                    <p>
                      CURT SHEARD&nbsp;
                      <span class="dot" />
                      &nbsp; BASS
                    </p>
                  </span>

                  <br />
                  <br />
                  <br />
                  <h2 className="margin" style={{ marginTop: "50px" }}>
                    Meet our band
                  </h2>
                  <p className="text-left">
                    Court Sheard, swag iPhone neutra williamsburg. sriracha you
                    probably haven't heard of them PBR&B marfa seitan. Four
                    dollar toast wayfarers helveticaetsy, affogata pinterest
                    schlitz. Sqilk yr mlkshk pinterest pour-over polaroid photo
                    booth. Yr fixie plaid kogi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-3 text-left">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={cd}
                className="img-responsive margin img-new"
                alt="Image"
              />
            </div>
            <div className="col-sm-6">
              <h1>Now Playing</h1>
              <h2 style={{ color: "#827474", marginTop: "20px" }}>
                Surprise Without Flaws
              </h2>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {this.state.finaltext}
                </span>
                <span style={{ fontWeight: "bold", marginLeft: "20px" }}>
                  {this.state.finaltime}
                </span>
                {!this.state.currentSong ? (
                  ""
                ) : (
                  <audio controls autoplay="true">
                    >
                    <source src={this.state.currentSong} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </p>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "50px" }}>
            <div className="col-sm-6">
              <h1>Discography</h1>
              <br />
              <div class="table-responsive">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="discography-heading">
                          Surprise Without Flaws
                        </h3>
                      </td>
                      <td>
                        <span class="dot" />
                      </td>
                      <td>2015</td>
                      <td>
                        <button type="button" class="btn btn-info">
                          LISTEN
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-primary">
                          BUY
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="discography-heading">
                          Mists Of A Shadow
                        </h3>
                      </td>
                      <td>
                        <span class="dot" />
                      </td>
                      <td>2014</td>
                      <td>
                        <button type="button" class="btn btn-info">
                          LISTEN
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-primary">
                          BUY
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="discography-heading">
                          Heroes Of The Sun
                        </h3>
                      </td>
                      <td>
                        <span class="dot" />
                      </td>
                      <td>2013</td>
                      <td>
                        <button type="button" class="btn btn-info">
                          LISTEN
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-primary">
                          BUY
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="discography-heading">
                          Picure Of The Past
                        </h3>
                      </td>
                      <td>
                        <span class="dot" />
                      </td>
                      <td>2012</td>
                      <td>
                        <button type="button" class="btn btn-info">
                          LISTEN
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-primary">
                          BUY
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-6">
              <h2>Surprise Without Flaws</h2>
              <br />
              {songs.map(song => (
                <div className="row" style={{ color: "#827474" }}>
                  <div className="col-md-7">
                    <a
                      style={{ cursor: "pointer", display: "inline-flex" }}
                      getdesc={song.desc}
                      gettime={song.time}
                      id={song.song1}
                      key={song.song1}
                      onClick={this.togglePlay}
                    >
                      {this.state.currentSong !== song.song1 ||
                      !this.state.play ? (
                        <img
                          src={playbutton}
                          className="img-responsive img-new"
                          alt="Image"
                        />
                      ) : (
                        <img
                          src={pausebutton}
                          className="img-responsive img-new"
                          alt="Image"
                        />
                      )}
                      &nbsp;&nbsp;&nbsp;
                      {song.desc}
                    </a>
                  </div>
                  <div className="col-md-3">
                    <p>..................................</p>
                  </div>
                  <div className="col-md-2">
                    <p>{song.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
