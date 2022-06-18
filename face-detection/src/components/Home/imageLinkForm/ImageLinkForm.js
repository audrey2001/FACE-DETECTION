import React from 'react'

const ImageLinkForm = ({onInput,onSubmit}) => {
    return (
        <div className="imageLinkForm">
            <p className="text">This Magic Brain will detect faces from an image,let's get started</p>
          <div className=" pa4 br5 shadow-5 center image-input">
           <input type="text" placeholder="enter image url here" onChange={onInput}/>
            <button className="grow center btn-style" onClick ={onSubmit} >Detect</button>
       
        </div>
        </div>
    )
}

export default ImageLinkForm
