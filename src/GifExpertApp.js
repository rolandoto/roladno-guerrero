import React , {useState} from 'react'
import {Addcatgory} from './components/Addcatgory'
import {GifGrid} from './components/GifGrid'



export const  GifExpertApp = () => {

   
    const [categories, setcategories] = useState(['naruto'])
    console.log(setcategories)
    /*
    //BOTON PARA AGREGAR 
    const hadleAdd = () =>{
    setcategories([...categories,'rolando'])
    }
    
*/  //<button onClick={hadleAdd}> agregar</button>

    return (
        <div>
             <h2>girespertapp</h2>  
             <Addcatgory setcategories={setcategories} />
             <hr/>
             <ol>
          {
              //MAP E PARA RECORRRER UN DE LA CATEGORIES EN ESTE EJEMPLO ES UN ARRAAY
              categories.map( categor => (
                  //aqui me vaa pasar los props que son los parametros
                <GifGrid key={categor} categor={categor}/>
                ))
          }
          </ol>
        </div>
    )
}

