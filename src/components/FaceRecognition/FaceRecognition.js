import React from 'react';
import './FaceRecognition.css'

 const FaceRecognition = ({ box,imageUrl})=> {
 	return(
        <div className='center ma'>
            <div className='absolute'>
                <img id='inputImage' src={imageUrl} alt='' width='500px'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div> 
        </div>
 		)
 }

 export default FaceRecognition;