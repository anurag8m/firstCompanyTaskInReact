import React, { Component } from 'react';
import '../App.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playingurl: '',
            audio: null,
            playing: false
        }
    }
    playAudio(previewurl) {
        let audio = new Audio(previewurl);
        if (!this.state.playing && this.state.playingurl !== previewurl) {
            audio.play();
            this.setState({
                playingurl: previewurl,
                playing: true,
                audio
            });
        } else if (!this.state.playing && this.state.playingurl === previewurl) {
            this.state.audio.play();
            this.setState({
                playing: true,
            });
        } else if (this.state.playingurl === previewurl) {
            this.state.audio.pause();
            this.setState({
                playing: false
            });
        } else {
            this.state.audio.pause();
            audio.play();
            this.setState({
                playingurl: previewurl,
                playing: true,
                audio
            });
        }
    }
    render() {
        console.log(this.props);
        const { tracks } = this.props;
        const self = this;
        return (
            <div>
                {
                    tracks.map(function (track, key) {
                        const trackimg = track.album.images[0].url;
                        return (
                            <div
                                onClick={() => self.playAudio(track.preview_url)}
                                className='track'
                                key={key}>
                                <img
                                    className='track-img'
                                    alt='track'
                                    src={trackimg} />
                                <div className='track-play'>
                                    <div className='track-play-inner'>
                                        {
                                            self.state.playingurl === track.preview_url &&
                                                self.state.playing ? <span><b>| |</b></span> : <span>&#9654;</span>
                                        }
                                    </div>
                                </div>
                                <p className='track-text'>
                                    {track.name}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
};

export default Gallery; 