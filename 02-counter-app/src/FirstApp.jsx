import React from "react"


const Nombre = "Clevers Arnez"
const newMessage ={
  title: "Titulo del mensaje",
  id: 1,
  nombre: "Clevers Arnez",
}
const getResult = () => {
  return 3+3;
}

const Numeros = [1,2,3,4,5,6,7,8,9];
export const FirstApp = ({title, subtitle = "Soy un subtitulo"}) => {
  // console.log(props);
  
  return (
    
    //Fragment <> </> is the same as <React.Fragment> </React.Fragment>
    <React.Fragment>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        
        {/* <h2>{newMessage.nombre}</h2>
        <h1>{getResult()}</h1> */}
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        {/* <h1>Hola mundo</h1>
        <h3>{Numeros}</h3>
        <p>My first app</p> */}
    </React.Fragment>
    
  )
}
