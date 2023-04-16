import Navbar from "../components/Navbar";
import React, { useState } from 'react'
import '../Styles/BecomeSellerForm.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { db } from "../firebase";
import { set,ref } from "firebase/database";
import { auth } from "../firebase";
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import ArtistDashboard from "../pages/ArtistDashboard";
import { Navigate, Routes, Route } from "react-router-dom";

function BecomeSeller (){
  const [PhoneNumber, setPhoneNumber] = useState()
  const [nameOfArtist, setName] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [confPass, setConfPass] = useState('');
  const [AddressOfArtist, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [DOB, setdob] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const IsSigned = false;
    console.log(PhoneNumber,nameOfArtist,pass,email,confPass,AddressOfArtist,pinCode,DOB)  
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        const user = userCredential.user;
        set(ref(db, 'Artists/'+ user.uid), {
          ArtistName: nameOfArtist,
          email: email,
          AddressOfArtist: AddressOfArtist,
          PinCode: pinCode,
          DOB:DOB,

        });  
        console.log("User Logged In")
        IsSigned = true;
        Navigate('/ArtistDashboard');
  
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    if (!IsSigned) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            set(ref(db, 'Artists/'+ user.uid), {
              ArtistName: nameOfArtist,
              email: email,
              AddressOfArtist: AddressOfArtist,
              PinCode: pinCode,
              DOB:DOB,
    
            });  
            Navigate('/ArtistDashboard');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
    }
  }

  return(
    <>
    <Navbar/>

    <div className='MainFormPart'>
      <form  onSubmit={handleSubmit}>
      <div className='innerForm'>
        <label htmlFor="Name" >Name :</label>
        <input value={nameOfArtist} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name'/>

        <label htmlFor="Email">Email :</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='Enter Email'/>

        <label htmlFor="Password">Password :</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Enter Password'/>

        <label className='confPass' htmlFor="ConfPass">Confirm Password :</label>
        <input  value={confPass} onChange={(e) => setConfPass(e.target.value)} type="password" placeholder='Enter Password again'/>

        <label htmlFor="Address">Address :</label>
        <input value={AddressOfArtist} onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Enter Your Address'/>

        <label htmlFor="pincode">Pincode :</label>
        <input value={pinCode} onChange={(e) => setPinCode(e.target.value)} type="text" placeholder='Enter PinCode'/>

        <label htmlFor="DOB">Date Of Birth :</label>
        <input value={DOB} onChange={(e) => setdob(e.target.value)} type="Date" placeholder='Enter Name'/>

        <label htmlFor="DOB">Phone Number :</label>

        <PhoneInput
        className="phoneNum"
        placeholder="Enter your Phone number"
        value={PhoneNumber}
        onChange={setPhoneNumber}
        />

      </div>
      <button type="submit">Submit</button>
      </form>
      <Routes>
      <Route path='/ArtistDashboard' element={<ArtistDashboard/>}></Route>
    </Routes>
    </div>
   
    </>
  )
}

export default BecomeSeller;