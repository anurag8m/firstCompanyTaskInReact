import React, { Component } from 'react';
// import Search from './components/Search';
import Profile from './showsong1.component.js';
import Gallery from './showsong.component.js';
import '../App.css';

class Apptest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: '',
            query: '',
            tracks: [],
            BASE_URL: 'https://api.spotify.com/v1/search?',
            ALBUM_URL: 'https://api.spotify.com/v1/artists',
            loader: false,
            notfound: false
        };
        this.search = this.search.bind(this);
        this.getData = this.getData.bind(this);
    };

    search() {



        let FETCH_URL = `${this.state.ALBUM_URL}/1vCWHaC5f2uS3yhpwWbIA6/top-tracks?country=us`;
        fetch(FETCH_URL, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('username:password'),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then(response => response.json())
            .then(json => {
                const { tracks } = json;
                this.setState({ tracks, loader: false, notfound: false });
            })


    }
    getData(e) {
        if (e.key === 'Enter') {
            this.setState({ loader: true, notfound: false });
            this.search();
        }
    }

    render() {
        return (
            <div className='app'>
                <div> <h1 className='app-title'>Music Master</h1></div>
                <input
                    className='search'
                    type='text'
                    onChange={event => { this.setState({ query: event.target.value }) }}
                    onKeyPress={this.getData}
                    placeholder='Search for Music...'
                />
                {
                    this.state.loader ? <div className='loader'>Loading...</div> : ''
                }
                {
                    this.state.notfound ? <div className='notfound'>Nothing found</div> : ''
                }
                {
                    this.state.artist && !this.state.loader && !this.state.notfound ?
                        <div>
                            <Profile artist={this.state.artist} />
                            <Gallery
                                className='gallery'
                                tracks={this.state.tracks}
                            />
                        </div> :
                        <div></div>
                }
            </div>
        );
    };
};
export default Apptest;