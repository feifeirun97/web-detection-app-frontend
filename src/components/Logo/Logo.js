import React from 'react';
import Tilt from 'react-tilt'

import rainbow from './rainbow.png';
import './Logo.css'

 const Logo = ()=> {
 	return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 5 }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner pa3">
                    <img alt='logo' src={rainbow}/>
                 </div>
            </Tilt>
        </div>
 		)
 }

 export default Logo;