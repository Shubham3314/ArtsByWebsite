import React from 'react'
//import "../Styles/ArtistDashboard.css"
import {Link,BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import AddNewArt from "./AddNewArt";

function ArtistDashboard() {

    const ArtistName = "Shubham";


  return (
    <>
        <Router>
        <div className='navbar'>
            <div className='welcomeArtistHeading'>
                <h1>Welcome, {ArtistName}</h1>
            </div>
            <div className='AddNewArt'>
                <button>Order List</button>
                    <Link to={'/AddNewArt'} replace={true}>
                        <button className='button2'>Add New Art</button>
                    </Link>
                
            </div>
        </div>
        <div className='MainPage'>
            <h2>Posted Arts</h2>
            <div className='ShowArtByArtist'>
                <h1>efef</h1>
                <h1>sefsef</h1>
                <h1>sefsef</h1>
            </div>
        </div>     
        <Routes>
            <Route path='/AddNewArt' element={<AddNewArt/>}/>
                   
        </Routes>
    </Router>
    
   
    </>

  )
}

export default ArtistDashboard