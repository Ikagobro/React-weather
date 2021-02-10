import React, {useState}  from 'react';
import {fetch} from './fetchweather';
import Button from 'react-bootstrap/Button';
import Icon from './Icon'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CardComponent.css';
import 'weather-icons/css/weather-icons.css'

function Weather() {
    const[req, setreq]=useState('');
    const[data, setData]=useState({});
    const[show, setShow]=useState(false);
        
  
    const search = async (event) => {        
        if (req.length > 0 ) {            
            const responce = await fetch(req).catch();
            setData(responce);
            setreq(''); 
            setShow(true);
        }                  
    } 
    
    const keyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            search();
          }
    }

    return(
        
        <div className='Box'>
            <form className='Content'>
                <input text="text" 
                    className="search" 
                    placeholder="Enter city..."
                    id="input"
                    onChange={(event)=> setreq(event.target.value)}
                    onKeyPress={keyPress}                                         
                    />  
                <Button variant="outline-secondary"
                    onClick={search}
                    size="sm">Search!
                </Button>             
            </form>

            {show ?                         
            <div className='infocard'>
                <h3 className='pt-2 pb-0 mb-0'>{data.name},
                                               {data.sys.country}
                                               </h3>
                <Icon iconId={data.weather[0].icon}/>
                <h5 className='pt-0 mb-0 pb-2'>{data.main.temp}&deg;</h5>
                <div className='minmax'>
                    <h6 className='px-4'>Min:{data.main.temp_min}&deg;</h6>
                    <h6 className='px-4'>Max:{data.main.temp_max}&deg;</h6>
                </div>
                <h6>{data.weather[0].description}</h6>
            </div> : null}   
        </div>
    );
}

export default Weather;


