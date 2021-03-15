import React  from 'react'

export  const Grigritem = ({title,url}) => {
        console.log(url)
        return (
            <div className="card animate__animated animate__bounce">
               <img src={url} alt={title}></img>
                <p>{title}</p>
                </div>
        )
    }


