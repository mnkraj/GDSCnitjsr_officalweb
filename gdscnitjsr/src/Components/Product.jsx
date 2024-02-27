import React from "react";
// import './index.css'
export default function Product(props) {
  return (
    <div className="card">
      <div className="product-container">
        <img className="product--image" src={props.url} alt="product image" />
        <div className="rectangular-box" style={{ backgroundColor: props.clr }}>
          {props.description1}
        </div>
        <div className="rectangular-box2" style={{ backgroundColor: props.clr }}>
          {props.description2}
        </div>
      </div>
      <h4>DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TIME</h4>
      <h3>{props.name1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.name2}</h3>

      
      <p>
        <button style={{ backgroundColor: props.clr }}>Learn More</button>
      </p>
    </div>
  );
}
