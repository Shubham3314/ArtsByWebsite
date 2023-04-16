import React from 'react'
import "../Styles/ArtistDashboard.css"
import {Link,BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import AddNewArt from "./AddNewArt";
import { db,auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ref,onValue  } from 'firebase/database';
import ImageCard from "../components/ImageCard"
function ArtistDashboard() {

    let Content = null
    let ArtList = []
    
   
    const ArtistName = "Shubham";

    const GetData = () => {

      

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(uid)
              // ...
            const dbRef = ref(db,"Artists/WAxoO1VmsBcRnudQkDrEzTSBP482/Arts");
              return onValue(dbRef, (snapshot) => {
                const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
                // ...
                //console.log(snapshot.val());
                snapshot.forEach(function(childsnap){
                    Content = <div> <h1>awkdowid</h1></div>
                    let item=childsnap.val()
                    
                    // childsnap.forEach(function(finalsnap) {
                    //   console.log(finalsnap.val());
                    // });
                    ArtList.push(item);
                   
                  });
                  
                
              }, {
                onlyOnce: true
              });
            } else {
              // User is signed out
              // ...
            }
          });
       
          console.log(ArtList);
         Content =  ArtList.map((art,key) => {
              <div> {art} </div>
              {console.log(art)}
          })

          Content = <div> <ImageCard art={ArtList}/></div>          
    }

  return (
    <>
        {GetData()}
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
                {Content}
            </div>
        </div>     
        
    
   
    </>

  )
}

export default ArtistDashboard