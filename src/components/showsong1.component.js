import React, { Component } from 'react';
import '../App.css';

class Profile extends Component {

    render() {
        let artist = { name: '', followers: { total: '' }, images: [{ url: '' }], genres: [] };
        artist = this.props.artist ? this.props.artist : artist;
        return (
            <div className='profile'>
                <img
                    alt='Profile'
                    className='profile-img'
                    src={artist.images[0].url} />
                <div className='profile-info'>
                    <div className='profile-name'>{artist.name}</div>
                    <div className='profile-followers'>{artist.followers.total} followers</div>
                    <div className='profile-genres'>
                        {
                            artist.genres.map(function (genre, key) {
                                genre = genre !== artist.genres[artist.genres.length - 1]
                                    && genre !== artist.genres[artist.genres.length - 2] ? ` ${genre},` : (genre === artist.genres[artist.genres.length - 2] ? ` ${genre}` : ` & ${genre}`);
                                return <span key={key}>{genre}</span>;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    };
};

export default Profile;