import React from 'react'
import "../Styles/AddNewArt.css"

import { useState } from 'react';
import { storage,auth,db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

import { onAuthStateChanged } from 'firebase/auth';
import { set,ref as dbref } from 'firebase/database';
import { Link } from 'react-router-dom';

function AddNewArt() {

  const [file1, setFile1] = useState("");
  // const [file2, setFile2] = useState("");
  // const [file3, setFile3] = useState("");

  const [ImageName, setImageName] = useState("");
  const [ImageDescription, setImageDescription] = useState("");
  const [ImagePrice, setImagePrice] = useState("");
  const [ImageTags, setImageTags] = useState("");

  const [selectedImages1, setSelectedImages1] = useState([]);
  // const [selectedImages2, setSelectedImages2] = useState([]);
  // const [selectedImages3, setSelectedImages3] = useState([]);

  

  function onSelectFile1(event) {
      setFile1(event.target.files[0]);
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);

      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
      
      setSelectedImages1(imagesArray);

      // FOR BUG IN CHROME
      event.target.value = "";
    }

   

    // function onSelectFile2(event) {
    //   setFile2(event.target.files[0]);
    //   const selectedFiles = event.target.files;
    //   const selectedFilesArray = Array.from(selectedFiles);

    //   const imagesArray = selectedFilesArray.map((file) => {
    //     return URL.createObjectURL(file);
    //   });
      
    //   setSelectedImages2(imagesArray);

    //   // FOR BUG IN CHROME
    //   event.target.value = "";
    // }
    // function onSelectFile3(event) {
     
    //   setFile3(event.target.files[0]);
    //   const selectedFiles = event.target.files;
    //   const selectedFilesArray = Array.from(selectedFiles);

    //   const imagesArray = selectedFilesArray.map((file) => {
    //     return URL.createObjectURL(file);
    //   });
      
    //   setSelectedImages3(imagesArray);

    //   // FOR BUG IN CHROME
    //   event.target.value = "";
    // }

    
    const uploadImage = (PickedImage,name,index) =>
    {
      
      if (!PickedImage) {
        alert("Please choose a file first!")
      }
  
      const storageRef = ref(storage, `/Images/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, PickedImage);
      uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    // update progress
                    console.log(percent)
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                       // console.log(index)
                      onAuthStateChanged(auth, (user) => {
                        if (user) {
                          
                          const date = new Date();

                          let currentDay= String(date.getDate()).padStart(2, '0');

                          let currentMonth = String(date.getMonth()+1).padStart(2,"0");

                          let currentYear = date.getFullYear();

                          // we will display the date as DD-MM-YYYY 

                          let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
                  
                          
                          var today = new Date();
                          var time = today.getHours() + ":" + today.getMinutes();
                          // uploadImage(file2,ImageName +"2","2")
                          // uploadImage(file3,ImageName +"3","3")
                          
                            set(dbref(db, 'Artists/'+user.uid+'/Arts/' + ImageName + currentDate + time), {
                              ImageName: ImageName,
                              ImageDescription: ImageDescription,
                              ImagePrice: ImagePrice,
                              ImageTags: ImageTags,
                              ImageLink1: url,
                              TimeStamp: currentDate + time
                            });  
                          
                        } else {
                          // User is signed out
                          // ...
                        }
                      });
                    
                    });
                }
            );

        
      
    }

  const handlesubmit = (event) => {
    console.log("Aedawdw")

    uploadImage(file1,ImageName +"1","1")

  };  


  return (
   <>
    <div className='AddArtNavbar'>
      <Link to={'/ArtistDashboard'}>
      <button type='submit' >Cancel</button>
      </Link>
      
      <h1>Upload Your Art</h1>
    </div>
    <div className='UploadArtForm'>
      <div className='SelectImages'>
        <h2>Select your Images</h2>
        <div className='ImagePlaceholder'>
        <section>
          <div className="images">
              {selectedImages1 &&
                selectedImages1.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img src={selectedImages1} height="200" alt="upload" />
                      
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
          
              <input
                type="file"
                name="images"
                onChange={onSelectFile1}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
        </section>
        {/* <section>
          <div className="images">
              {selectedImages2 &&
                selectedImages2.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img src={image} height="200" alt="upload" />
                      
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
          
              <input
                type="file"
                name="images"
                onChange={onSelectFile2}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
        </section>
        <section>
          <div className="images">
              {selectedImages3 &&
                selectedImages3.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img src={image} height="200" alt="upload" />
                      
                      <p>{index + 1}</p>
                    </div>
                  );
                })}
            </div>
          
              <input
                type="file"
                name="images"
                onChange={onSelectFile3}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
        </section> */}

       
        </div>
        
        <div>
          <h2>Fill in the Details</h2>
          <form className='form' >
                <label htmlFor="Name For the Art">Name :</label>
                <input onChange={(e) => setImageName(e.target.value)} type="text" placeholder='Enter Name' />
                <label htmlFor="Description">Description :</label>
                <textarea onChange={(e) => setImageDescription(e.target.value)} placeholder='Enter Description' rows={4} cols={40} />
                <label htmlFor="Price">Price :</label>
                <input onChange={(e) => setImagePrice(e.target.value)} type="text" placeholder='Enter Price' />
                <label htmlFor="Tags">Tags :</label>
                <textarea onChange={(e) => setImageTags(e.target.value)} placeholder='Enter Tags' rows={4} cols={40} />
          </form>
          <button type="submit" onClick={handlesubmit}>Submit</button>

        </div>
       
      
      </div>
    </div>
   </>
  )
}

export default AddNewArt