
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Newsboard from './components/Newsboard'


function App() {

  const [catogaries, setcatogaries] = useState("")
  console.log(catogaries)

  return (
    <>
      <Navbar setcatogaries={setcatogaries} />
      <Newsboard catogaries={catogaries} />


    </>
  )
}

export default App
