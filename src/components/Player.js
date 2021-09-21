import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faAngleLeft, faAngleRight, faPause, faPlay} from '@fortawesome/free-solid-svg-icons';

const  Player=({searchsongsList,AudioRefer,currentSong,isPlaying,setisPlaying,setplayTime,playTime,LibraryReveal,songsList,setcurrentSong,setsongList})=>{
   

    const songPlayHandler=()=>{
        if(isPlaying){
            setisPlaying(!isPlaying);
            AudioRefer.current.pause();

        }else{
            setisPlaying(!isPlaying);
            
            AudioRefer.current.play();

        }
    }

    
   
    
    const formatTime=(time)=>{
        return(
            Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
        )
    }

    
    

     const DragHandler=(e)=>{

        AudioRefer.current.currentTime=e.target.value;
        setplayTime({ ...playTime,currentTime:e.target.value })
        
        
    }

    const ActiveLibraryHandler=(nextprev)=>{
        
        const setActiveStatus=songsList.map((song)=>{
            if(song.id === nextprev.id){
                return{
                    ...song,
                    active:true,
                }
            }else{
                return{
                    ...song,
                    active:false,
                }
            }
        });
        setsongList(setActiveStatus); 
    }

    const skipHandler=async (direction)=> {
        const CurrentSongIndex=songsList.findIndex((song) => song.id === currentSong.id);
        if(direction === 'next'){
           await setcurrentSong(songsList[((CurrentSongIndex+1) % songsList.length)]);
            ActiveLibraryHandler(songsList[((CurrentSongIndex+1) % songsList.length)])
        }
        if(direction === 'prev'){
            if((CurrentSongIndex-1) % songsList.length === -1)
                {
                    await setcurrentSong(songsList[songsList.length-1]);
                     ActiveLibraryHandler(songsList[songsList.length-1]);
                    if(isPlaying) AudioRefer.current.play();
                    return;

                }    
            await setcurrentSong(songsList[((CurrentSongIndex-1) % songsList.length)]);
            ActiveLibraryHandler(songsList[((CurrentSongIndex-1) % songsList.length)])

           

        }
        if(isPlaying) AudioRefer.current.play();
    }


    const TrackAnimationSlider={
        transform:`translateX(${playTime.animationpercentage}%)`
    }
    return(
    <div className={`player ${LibraryReveal ? "SelectingSong" : ""}`}>
        <div className="time-controller">
            <p>{formatTime(playTime.currentTime)}</p>
            <div className="tracker" style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}}>
                <input min={0} max={playTime.totalDuration || 0} value={playTime.currentTime} onChange={DragHandler} type="range"/>
                <div style={TrackAnimationSlider} className="animate-tracker"></div>
            </div>
            
            <p>{playTime.totalDuration ? formatTime(playTime.totalDuration) : "0:00"}</p>
        </div>
        <div className="music-controller">
            <FontAwesomeIcon className="skip-before" icon={faAngleLeft} size="2x" onClick={()=>skipHandler('prev')}/>
            <FontAwesomeIcon className="play_button" icon={isPlaying ? faPause : faPlay} size="2x" onClick={songPlayHandler}/>
            <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" onClick={()=>skipHandler('next')}/>
        </div>
    </div>
    );
    
    
}

export default Player;