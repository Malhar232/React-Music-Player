import React from 'react';


const Song = ({currentSong,LibraryReveal,isPlaying}) => {
    return (
        <div  className={`song-container ${LibraryReveal ? "SelectingSong" : ""}`}>
            <img style={isPlaying?{animation:"rotation 20s infinite linear"}:{}} src={currentSong.cover} alt="SongCover" />
            
            <h1>{currentSong.name} </h1> 
            
            <h4>{currentSong.artist}</h4>
            
        </div>
        );

}

export default Song;