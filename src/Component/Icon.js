import React from 'react'; 
import './Icon.css'

function Icon({iconId}) {
   
    return(
        <div>
            <img className='Icon' 
                 src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} 
                 alt='icon'
                 />
        </div>
    );
}

export default Icon;

