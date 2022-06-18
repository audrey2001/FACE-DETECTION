import React, { useState, Fragment } from "react";
import Navigation from "../navigation/Navigation";
import ImageLinkForm from "./imageLinkForm/ImageLinkForm";
import FaceRecognition from "./FaceRecognition/FaceRecognition";
import Rank from "./Rank";
import Clarifai from "clarifai";
import "./home.css";
// import Loading from "../Loader/Loading";

const app = new Clarifai.App({
  apiKey: "37a3190dcd314207935889bffeded4d2"
  
});

const Home = ({user}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [input, setInput] = useState("");
  const [box, setBox] = useState({});
  

  function onInput(event) {
    setInput(event.target.value);
  }
  // https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80
  // the boundary box
  const calculateImageLocation = (data) => {
    const clarifaiData =  data.outputs[0].data.regions[0].region_info.bounding_box;
      
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiData.left_col * width,
      topRow: clarifaiData.top_row * height,
      rightCol: width - (clarifaiData.right_col * width),
      bottomRow: height - (clarifaiData.bottom_row * height)
    };
  }
  
  function displayBox(box) {
    setBox(box);
    console.log(box)
  }

  // end of boundary box

    function onSubmit() {
      setImageUrl(input);


      //working with the api
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL, input)
        .then(response => {
          console.log(response)
          displayBox(calculateImageLocation(response))
        })
        .catch(err => console.log(err))
    };
  
      // end of working with api
    

  return (
    <div className="body-contanier">
      <Fragment>
        <Navigation />
        <Rank user={user} />
        <ImageLinkForm
          onInput={onInput}
          onSubmit ={onSubmit}
          imageUrl ={imageUrl}
        />
        <FaceRecognition imageUrl={imageUrl} />
      </Fragment>
    </div>
  );
  }

export default Home;
