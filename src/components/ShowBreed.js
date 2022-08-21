import React from 'react'; 

import Resource from './Resource'; 

const ShowBreed = ({breedURL}) => {
    
    console.log('weblink', breedURL)

    const render = ( data ) => {
  
        if ( data.loading === true ) return <p>loading ...</p>
        
        console.log('Got the data', data );

    return (data.imgurl.message.map(( dog, index) => (
            
                <div key={index} >
                    
                    <img className='image' src= {dog} alt='dog img' />
                    
                </div>
                )     
            )
        )      
    }

    return (
        <div className='dog-gallery-padding'>
            <Resource path={breedURL} render={render} />

        </div>
    )
}

export default ShowBreed


// {"message":{"affenpinscher":[],"african": [],"airedale": []},"status":"success"}