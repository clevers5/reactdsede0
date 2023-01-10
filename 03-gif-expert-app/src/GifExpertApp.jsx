import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Digimon', 'Dragon Ball', 'Yu-Gi-Oh']);
  
     const onAddCategory = ( newCategory) => {
      // setCategories(categories => [...categories, 'Yu-Gi-Oh']);
      
      //No deja agregar categorias repetidas
      if(categories.includes(newCategory)) return;
      
      setCategories([newCategory, ...categories ]);
      // categories.push(newCategory);
    };

  return (

    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          // setCategories = { setCategories }
          onNewCategory = { onAddCategory }
        />
        {categories.map(category => (
            <GifGrid 
              key={category} 
              category = {category} 
            />
          ))
        }
    </>
  )
}

