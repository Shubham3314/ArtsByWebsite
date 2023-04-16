import React from 'react'
import "../Styles/AddNewArt.css"

import { useState } from 'react';
import { storage } from '../firebase';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

function AddNewArt() {

  const [file,setFile] = useState("")
  const [selectedImages1, setSelectedImages1] = useState([]);
  const [selectedImages2, setSelectedImages2] = useState([]);
  const [selectedImages3, setSelectedImages3] = useState([]);

  function onSelectFile1(event) {
      setFile(event.target.files[0]);
      console.log(file);
    }

    function onSelectFile2(event) {
      setFile(event.target.files[0]);
      console.log(file);
    }
    function onSelectFile3(event) {
      setFile(event.target.files[0]);
      console.log(file);
    }

  const handlesubmit = (event) => {
    console.log("Aedawdw")
    if (!file) {
      alert("Please choose a file first!")
    }

    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
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
                      console.log(url);
                  });
              }
          );
  };  


  return (
   <>
    <div className='AddArtNavbar'>
      <button>Cancel</button>
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
                      <img src={image} height="200" alt="upload" />
                      
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
        <section>
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
        </section>

       
        </div>
        
        <div>
          <h2>Fill in the Deatails</h2>
          <form className='form' >
                <label htmlFor="Name For the Art">Name :</label>
                <input type="text" placeholder='Enter Name' />
                <label htmlFor="Description">Description :</label>
                <textarea placeholder='Enter Description' rows={4} cols={40} />
                <label htmlFor="Price">Price :</label>
                <input type="text" placeholder='Enter Price' />
                <label htmlFor="Tags">Tags :</label>
                <textarea placeholder='Enter Tags' rows={4} cols={40} />
          </form>
          <button type="submit" onClick={handlesubmit}>Submit</button>

        </div>
       
      
      </div>
    </div>
   </>
  )
}

export default AddNewArt