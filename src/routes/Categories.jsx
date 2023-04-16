import Navbar from "../components/Navbar";
import "../Styles/Categories.css"
import mandala from "../assets/img1.png"
import digitalart from "../assets/img2.jpg"
import Photography from "../assets/img3.jpg"
import canvasart from "../assets/img4.jpg"
import sketch from "../assets/img5.jpg"

function Categories (){
  
  return(
    <>
    <Navbar/>
      <div className="main-container">
        <div className="inner-box">
            <div className="category-image">
                <img src={mandala} alt="" />
                <button type="submit" >Mandala Art</button>
            </div>
        </div>
        <div className="inner-box">
            <div className="category-image">
                <img src={sketch} alt="" />
                <button type="submit">Sketch</button>
            </div>
        </div>
        <div className="inner-box">
            <div className="category-image">
                <img src={canvasart} alt="" />
                <button type="submit">Canvas Art</button>
            </div>
        </div>
        <div className="inner-box">
            <div className="category-image">
                <img src={Photography} alt="" />
                <button type="submit">Photography</button>
            </div>
        </div>
        <div className="inner-box">
            <div className="category-image">
                <img src={digitalart} alt="" />
                <button type="submit">Digital art</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Categories;