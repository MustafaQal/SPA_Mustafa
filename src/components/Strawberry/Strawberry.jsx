import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Strawberry() {

  const [strawberry, setStrawberry] = useState([]);
  const [isloader,setisLoader] = useState(true);
  const [error,setError] = useState(null);
  const getStrawberry = async () => {
    try {
    const response = await axios.get("https://forkify-api.jonas.io/api/v2/recipes?search=strawberry");
    console.log(response);
    const recipes = response.data.data.recipes;
    setStrawberry(recipes);
  }catch(error){
  console.error("Error!");
  setError("error, try...");
} 
finally{
    setisLoader(false);

}
}


  useEffect(() => {
    getStrawberry();
  }, []);

  
  if(isloader){
return <h2>Loading...</h2>
  }

  if(error){
    return <h2>{error}</h2>
  }

  return (
    <section>
      <div className=' container'>
        <div className=' row'>
          {strawberry.map((recipe) => {
            return (
              <div className=' col-md-3 p-3'>
                <div className=' card p-3 shadow h-100 d-flex flex-column'>
                  <h5> {recipe.title} </h5>
                  <img src={recipe.image_url} alt={recipe.title} className="img-fluid mt-auto" style={{ height: "180px", objectFit: "cover" }}/>
                </div>
              </div>
            );
          })
        }
        </div>
      </div>

    </section>
  )
}
