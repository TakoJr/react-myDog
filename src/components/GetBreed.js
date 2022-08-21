import React from 'react'; 
import { useState } from 'react';
import ShowBreed from './ShowBreed'
import DropResource from './DropResource'; 

const GetBreed = () => {

    const [dogData, setDogData] = useState("appenzeller");
    const webURL = 'https://dog.ceo/api/breeds/list/all'
    const render = ( data ) => {

        if ( data.loading === true ) return <p>loading ...</p>

        console.log('Got the data', data );
        console.log(data)
        var arrayBreed = Object.values(data.imgurl)
        //console.log('Array breed here', arrayBreed)
        var arrayBreedList = Object.keys(arrayBreed[0])
        //console.log('Array Breed List', arrayBreedList)

    
    return (
        <div className='dropList-container'>
            <select className='dropList' id = "dogSelect" onChange={(e) => setDogData(e.target.value)}>  
                {arrayBreedList.map( dogOption => (              
                    <option value ={dogOption}>{dogOption}</option>
                    ))}
            </select>
            <div>
            <ShowBreed breedURL={'https://dog.ceo/api/breed/'+ dogData + '/images'}/>
            </div>
        </div>
        )
    }
    return (
        <div>
        <DropResource path={webURL} render={ render } />
    </div>
    )   
}


export default GetBreed; 


// {"message":{"affenpinscher":[],"african": [],"airedale": []},"status":"success"}