import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faMusic,faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const Nav = ({LibraryReveal,setLibraryReveal}) => {
    return (
        <div  className="NavBar">
            <div className="Logo">
                <h1>MYUZIC</h1>
            </div>
            
            <button onClick={()=> setLibraryReveal(!LibraryReveal)}>
                <FontAwesomeIcon icon={LibraryReveal ? faArrowLeft : faMusic}/>
            </button>
        </div>
        );

}

export default Nav;