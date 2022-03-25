import React from "react";
import "./image.css";
export default function Image(img) {
  let images = img.img;
  
  const [current, setCurrent] = React.useState(0);
  const length = img.img.length;
  

  if (!Array.isArray(img.img) || length <= 0) {
    return null;
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className="slider">
      <img src="https://img.icons8.com/material-rounded/48/000000/more-than.png" className="right-arrow" onClick={prevSlide} alt="imagej"/>
      <img src="https://img.icons8.com/material-two-tone/48/000000/less-than.png" className="left-arrow" onClick={nextSlide} alt="imagej"/>
    
      {images.map((item, index) => {
        return (
          
          <div
            className={index === current ? "slideactive" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={item} alt="images" className="image"></img>
            )}

            {console.log('hi',index)}
          </div>
        );
        
      })}
    </section>
  );
}
