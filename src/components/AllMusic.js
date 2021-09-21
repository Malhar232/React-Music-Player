// import React from 'react';

// const AllMusic = ({song,setcurrentSong,songsList,AudioRefer,id,isPlaying,setsongList,searchsongsList,setssearchsongList}) => {
//     const changeSongHandler= async ()=> {
        
//       const selectSong=searchsongsList.filter((IndividualSong) => IndividualSong.id === id);
//         await setcurrentSong(selectSong[0]);
//         const setActiveStatus=searchsongsList.map((song)=>{
//             if(song.id === id){
//                 return{
//                     ...song,
//                     active:true,
//                 }
//         }else{
//             return{
//                 ...song,
//                 active:false,
//             }
//         }
//         });
//         setssearchsongList(setActiveStatus);
//         if(isPlaying) AudioRefer.current.play();
        
//     };
//     return (
//         <div className={`library-song ${song.active ? "selected" : ""}`} onClick={changeSongHandler}>
//             <img src={song.cover} alt="SongCover" />
//             <div className="song-details">
//             <h2>{song.name} </h2> 
//             {/* <FontAwesomeIcon className="LoveIt" icon={faHeart} size="1x"/> */}
//             <h5>{song.artist}</h5>
//             </div>
            
            
//         </div>
//         );

// }

// export default AllMusic;


import React from 'react';

const AllMusic = ({song,setcurrentSong,songsList,AudioRefer,id,isPlaying,setsongList}) => {
    const changeSongHandler= async ()=> {
        
      const selectSong=songsList.filter((IndividualSong) => IndividualSong.id === id);
        await setcurrentSong(selectSong[0]);
        const setActiveStatus=songsList.map((song)=>{
            if(song.id === id){
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
        if(isPlaying) AudioRefer.current.play();
        
    };
    return (
        <div className={`library-song ${song.active ? "selected" : ""}`} onClick={changeSongHandler}>
            <img src={song.cover} alt="SongCover" />
            <div className="song-details">
            <h2>{song.name} </h2> 
            {/* <FontAwesomeIcon className="LoveIt" icon={faHeart} size="1x"/> */}
            <h5>{song.artist}</h5>
            </div>    

        </div>
        );

}

export default AllMusic;
