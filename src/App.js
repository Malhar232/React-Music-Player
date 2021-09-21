import React, {useState,useRef} from 'react';

import './styles/style.scss';
import Player from './components/Player';
import Song from './components/Song';
import SongList from './SongList';
import Library from './components/Library';
import Nav from './components/Nav';


function App() {
  const [songsList,setsongList]=useState(SongList);

  const [searchsongsList,setsearchsongList]=useState(SongList);
  

  const [currentSong,setcurrentSong]=useState(songsList[0]);
  const [isPlaying,setisPlaying]=useState(false);
  const [LibraryReveal,setLibraryReveal]=useState(false);
  
  const [searchSong,setsearchSong]=useState({
    searchfieldValue:'',
    songsMatchSearch:[]
  });
  const [input,setInput]=useState('');
  // useState(songsList[Math.floor(Math.random() * songsList.length)]);
  // console.log(currentSong);
  const AudioRefer=useRef("null");

  const [playTime,setplayTime]=useState({
    currentTime:0,
    totalDuration:0, 
    animationpercentage:0,
 });
 const UpdateTimeHandler=(e)=>{
  const startTime=e.target.currentTime;
  const duration=e.target.duration;
  // percentage
  const roundstartTime=Math.round(startTime);
  const roundDuration=Math.round(duration);
  const percentage=Math.round((roundstartTime/roundDuration)*100);
  setplayTime({ ...playTime,currentTime:startTime,totalDuration:duration,animationpercentage: percentage})

  
}

const songEndHandler =async ()=>{
    const CurrentSongIndex=songsList.findIndex((song) => song.id === currentSong.id);
      await setcurrentSong(songsList[((CurrentSongIndex+1) % songsList.length)])
      if(isPlaying) AudioRefer.current.play();
}

  return (
    
    <div className="App">
      <Nav LibraryReveal={LibraryReveal} setLibraryReveal={setLibraryReveal}/>
      <Song currentSong={currentSong} LibraryReveal={LibraryReveal} isPlaying={isPlaying}/>
      <Player songsList={songsList} isPlaying={isPlaying} setisPlaying={setisPlaying}  currentSong={currentSong} setcurrentSong={setcurrentSong} AudioRefer={AudioRefer} playTime={playTime} setplayTime={setplayTime} LibraryReveal={LibraryReveal} setsongList={setsongList} searchsongsList={searchsongsList}/>
      <Library searchsongsList={searchsongsList} setsearchsongList={setsearchsongList} input={input} setInput={setInput} searchSong={searchSong} setsearchSong={setsearchSong} songsList={songsList} setcurrentSong={setcurrentSong} AudioRefer={AudioRefer} isPlaying={isPlaying} setsongList={setsongList} LibraryReveal={LibraryReveal}/>

      <audio onLoadedMetadata={UpdateTimeHandler} onTimeUpdate={UpdateTimeHandler} ref={AudioRefer} src={currentSong.audio} onEnded={songEndHandler}></audio>

    </div>
  );
}

export default App;
