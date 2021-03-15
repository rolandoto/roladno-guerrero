import React,{useState} from 'react'
import PropTypes from 'prop-types'


export const Addcatgory = ({setcategories}) => {

// es l que quiero que salga en el input  enn este caso hola mundo
    const [inputvalue, setInputValue] = useState('hola mundo')

// aqui esta el evento apra poder modificar el input cuando le de onChange
    const hadleInputchange = (e) => {
       //aqui es para actualizar 
        setInputValue(e.target.value)
        //aqui para que me guarde nuevamente en el table
    }

//e.preventDefaul para que el navagador no se atualize 
const hadlsubmit = (e) => {
    e.preventDefault();
//CUANDO SEAA MAS DE DOS LETRA 
  if( inputvalue.trim().length > 2){
    setcategories( cats => [inputvalue,...cats ])
    //aqui es para agregar a la h3
    setInputValue('')
    //DESPUES QUE INTRODUCE LA INFORMACION ME DEJE EL INPUT  VACIO
  }
 

} 
//aqui en el input le puse value={inputvalue} para que salga hola mundo  en el inpout 7
    return (
        <form onSubmit={hadlsubmit} > 
            <h1>{inputvalue}</h1>
           <input
           type="text" value={inputvalue}
           onChange={hadleInputchange}/>
        </form>
    )
}

Addcatgory.propTypes = {
    setcategories : PropTypes.func.isRequired
}

