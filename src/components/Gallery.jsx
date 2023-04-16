import "../Styles/Gallery.css"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

const Gallery = () => {
    return(
        <div className="gallery">
            <h1>Gallery</h1>
            <div class="imggallery">
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>      
                <img src={img5} alt=""/>      
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>      
                <img src={img5} alt=""/>      
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>      
                <img src={img5} alt=""/>      

            </div>
        </div>
    );
};

export default Gallery;