import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon', 'Digimon', 'Dragon Ball']);
  
     const onAddCategory = ( newCategory) => {
      // setCategories(categories => [...categories, 'Yu-Gi-Oh']);
      
      //No deja agregar categorias repetidas
      if(categories.includes(newCategory)) return;
      
      setCategories([...categories, newCategory ]);
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

