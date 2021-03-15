import {useEffect, useState} from 'react'
import { gefgifs } from '../Gegif'


export  const useFicts = (categor) => {

    const [state,setsatet] = useState({
        data:[],
        loading: true

    })

    useEffect( ()=>{
        gefgifs(categor).then(img =>{
            
                console.log(img)
                setsatet({
                    data:img,
                    loading:false
                })
           
        } )
    })


    return state

}   