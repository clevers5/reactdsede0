import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon', 'Digimon', 'Dragon Ball']);
    
  return (

    <>
        {/* titulo */}

        <h1>GifExpertApp</h1>

        {/* input */}

        {/* lista de gifs */}
        {/* Muestra la lista de categorias */}
        {<ol> 
            {categories.map(category => {
                return <li key={category}> {category} </li>
            })}
            
        </ol>}
            {/* gif items*/}
    </>
    
  )
}

