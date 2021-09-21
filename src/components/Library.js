// import React from 'react';
// import AllMusic from './AllMusic';
// import SearchBar  from './searchBar.js';

// const Library = ({songsList,setcurrentSong,AudioRefer,isPlaying,setsongList,LibraryReveal,input,setInput,searchsongsList,setsearchsongList}) => {

//     const copyArr=searchsongsList

//     const updateInput =  (input) => {
            
//     const filtered = searchsongsList.filter(songSearch => {
//         return (songSearch.name.toLowerCase().includes(input.toLowerCase()))
//     })
            
//      setInput(input);
//      if(input===null){
//         setsongList(songsList);
//      }else{
//         setsongList(filtered);  
//      }
    
//     }
// // if(!LibraryReveal){
// //     setsongList(songsList);
// //     setInput("");
// // }

        
    

//     return (
//         <div className={`Library ${LibraryReveal ? 'libraryActive' : ''}`}>
//             <h1>Library</h1>
//             <br/>
//             <div className="library-songs">
//             <SearchBar input={input} onChange={updateInput}/>
//                 {songsList.map(song => <AllMusic copyArr={copyArr} setInput={setInput} setsongList={setsongList} songsList={songsList} searchsongsList={searchsongsList} song={song} setcurrentSong={setcurrentSong} id={song.id} key={song.id} AudioRefer={AudioRefer} isPlaying={isPlaying} setssearchsongList={setsearchsongList}/>)}
//             </div>
//         </div>
            
//         );

// }

// export default Library;


import React from 'react';
import AllMusic from './AllMusic';

const Library = ({songsList,setcurrentSong,AudioRefer,isPlaying,setsongList,LibraryReveal}) => {
    
    
    return (
        <div className={`Library ${LibraryReveal ? 'libraryActive' : ''}`}>
            <h1>Library</h1>
            <br/>
            <div className="library-songs">
                {songsList.map(song => <AllMusic songsList={songsList} song={song} setcurrentSong={setcurrentSong} id={song.id} key={song.id} AudioRefer={AudioRefer} isPlaying={isPlaying} setsongList={setsongList}/>)}
            </div>
        </div>
            
        );

}

export default Library;