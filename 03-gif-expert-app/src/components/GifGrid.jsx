import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
      const imgs = await getGifs(category);
      setImages(imgs);
    } 

  useEffect(() => {
    getImages();
  }, []);

  return (
   <>
    <h2>{category}</h2>
    <div className="card-grid">
      {
        images.map((image)=> (
          <GifItem 
            key={image.id} 
            {...image}
            />
       ))
      }
    </div>
   </>
  )
}
