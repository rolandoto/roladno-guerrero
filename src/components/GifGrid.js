import React, {useState,useEffect} from 'react'
import { useFicts } from './hel/hook/userfgigts'
import { Grigritem } from './Grigritem'
//import { gefgifs } from './hel/Gegif'

export const  GifGrid = ({categor}) => {
    const [image,setimages] =  useState([])
     
    
     const {data:images, loading} = useFicts(categor);

    /*
   console.log(categor)
    useEffect( () => {
//de aqui sale un  hook paa que sea ejecutado  por el setimages 
        gefgifs(categor).then(setimages)
    },[categor] )
*/
 


    return( 
        <>
            <h3> {categor} </h3>
            <div className="cars-grid">
                

                    {loading && <p>loading</p>}
                
                {
                    images.map( img  => (
                            <Grigritem 
                            key={img.id}
                            {...img}/>
                    ) )
                    
                }
                        
                </div>
           </>
    )
}

