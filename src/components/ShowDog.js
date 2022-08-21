import React from 'react'; 

import Resource from './Resource'; 

const ShowDog = () => {

    const webURL = 'https://dog.ceo/api/breeds/image/random/50'

    const render = ( data ) => {

        if ( data.loading === true ) return <p>loading ...</p>

        console.log('Got the data', data );
        console.log(data)

     return (data.imgurl.message.map(( dog, index) => (
            
            <div key={index} >
                
                <img className='image' src= {dog} alt='dog img' />
                
            </div>
           )     
        )
        )
    }

    return (
        <div>

            <Resource path={ webURL  } render={ render } />

        </div>
    )
}

export default ShowDog

// {
//     "message": [
//         "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_326.jpg",
//         "https://images.dog.ceo/breeds/kuvasz/n02104029_4696.jpg",
//         "https://images.dog.ceo/breeds/terrier-russell/iguet3.jpeg"
//     ],
//     "status": "success"
// }
