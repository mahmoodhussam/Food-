import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  
  const APP_ID = "fec97a92"
  const APP_KEY = "47c4591e9b614568aff5012b09d4c7b7"
  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState("")
  const [query,setQuery] = useState("")
  useEffect(()=>{
    getRecipes()
  },[query])
  const getRecipes = async ()=>{
    const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await responce.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }
  const inputChange = e=>{
    setSearch(e.target.value)    
  }
  const handelSubmit = e =>{
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
      <form onSubmit={handelSubmit} className="form">
        <input 
        type="text"
        value={search}
        onChange={inputChange}
        className="input"
        placeholder="Search for food ...."/>
        <button type="submit" className="button">Search</button>
      </form>
      <div className="container">
        {
          recipes.map(recipe=>(
            <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
