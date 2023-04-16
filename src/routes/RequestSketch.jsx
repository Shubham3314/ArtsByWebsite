import Navbar from "../components/Navbar";
import "../Styles/RequestSketch.css"
import mandala from "../assets/img1.png"

function RequestSketch (){
  return(
    <>
    <Navbar/>
      <div className="out-box">
        <div className="heading">
          <h1>Choose an Artist</h1>    
        </div>
        <div className="artist-main-container">     
      
          <div className="show-artist">
              <div className="image">
                <img src={mandala} alt="" />
              </div>
              <h2>Artist Name</h2>
          </div>

          <div className="show-artist">
              <div className="image">
                <img src={mandala} alt="" />
              </div>
              <h2>Artist Name</h2>
          </div>
          <div className="show-artist">
              <div className="image">
                <img src={mandala} alt="" />
              </div>
              <h2>Artist Name</h2>
          </div>
               
        </div>
      </div>
      
    </>
  )
}

export default RequestSketch;