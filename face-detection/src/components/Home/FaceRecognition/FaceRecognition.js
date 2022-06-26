import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
  console.log(box)
  return (
    <div className="design">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;






































// import React from "react";
// import "./faceDetection.css"

// const FaceRecognition = ({ imageUrl, box}) => {
// console.log(box)
//   return (
//     <div>
//       <div className='design'>
//       <div className='absolute mt2 '>
//         <img id='inputimage' alt='' src={imageUrl}  width='500px'  />
//         <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FaceRecognition;
