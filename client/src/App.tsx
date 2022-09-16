import { useState } from 'react'
import './App.css'
import Ingredients from './components/Ingredients/Ingredients.js'
import data from '../data/ingredients.json'

function App() {

    return (
    <div className="App">
       <Ingredients ingredients={data.body}/>
    </div>
  )
}

export default App
