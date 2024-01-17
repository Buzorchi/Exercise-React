import React, { useState } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Hero from '../Hero'

const Props = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
    console.log(count)

    const decrement = () =>{
        setCount(count - 1)
    }
    console.log(count)

  return (
    <div>
        <p style={{justifyContent: "center", alignItems: "center", display: "flex", marginTop: "70px"}}>Count: {count}</p>
      <Navbar increment = {increment} decrement = {decrement} />
      <Footer/>
      <Hero />
    </div>
  )
}

export default Props
