import "../App.css";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import {  responsive } from "./dataEvents";
import eventImage from "../pics/Header (1).png"; // Import your event image
import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const [productData,setproductdata]=useState([])
  const baseurl = 'http://localhost:3080/';


// Remove any leading slashes from thumbnailPath

// const color = [
//   "#34A853",
//   "#F9AB00",
//   "#4285F4",
  
// ];

// Now the color array contains more than 10 colors



const options = { year: 'numeric', month: 'short', day: 'numeric' };




  const product = productData.map((item) => (
    <Product
      name1={new Date(item.date).toLocaleDateString('en-US', options)}
      name2={item.startTime+"-"+item.endTime}
      url={`${baseurl}${item.thumbnailurl}`}
      price={item.price}
      description1={item.title}
      description2={item.category}
      clr = {item.color}
    />
  ));
  const fetchdata = async ()=>{
              const response= await axios.get('http://localhost:3080/api/v1/displayevents')
              console.log(response.data)
              setproductdata(response.data)
  }
  useEffect(()=>{
     fetchdata()

},[])

  return (
    <div className="App" id="events">
         <h1>
        <img src={eventImage} alt="Events" className="event-image" />
      </h1>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#555' }}>The Google Developer Student Clubs (GDSC) at the National Institute of Technology (NIT) Jamshedpur have become a beacon of innovation and collaboration, illuminating the tech landscape with a fusion of knowledge and creativity. NIT Jamshedpur, in partnership with GDSC, has orchestrated a series of transformative events that have not only enriched the learning experience but have also etched a lasting impact on the tech community.

In the heart of NIT Jamshedpur, GDSC has created a dynamic platform where students, faculty, and industry professionals converge to explore the realms of technology. Through hackathons, workshops, and engaging sessions, the collaboration between GDSC and NIT Jamshedpur has become a catalyst for cultivating a culture of continuous learning and innovation on the campus.
</p>

      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
