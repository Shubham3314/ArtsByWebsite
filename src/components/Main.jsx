import "../Styles/Main.css";
import logo from "../assets/main.jpg"
function Main (){
  return(
    <>
        <div className="main">
            <img src={logo} alt="mainImage"/>
        </div>
        <div className="welcome-text">
          <h1>Welcome to Artsby</h1>
        </div>
    </>
  )
}

export default Main;