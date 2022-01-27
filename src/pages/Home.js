import React from 'react'
import FormInput from '../components/Form/FormInput'
import "../components/Form/formInput.css"
import './home.css'
import { useState, useRef } from 'react'

const Home = () => {
  // const [username, setUsername] = useState('')
  const usernameRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }
  return (
    <form onSubmit={handleSubmit}>
    <FormInput 
    placeholder="User Name"
    // refer={usernameRef}
    name="username"
    />

    <FormInput placeholder="Email" name="email"/>
    <FormInput placeholder="Full Name" name="fullname"/>
    <FormInput placeholder="Strain" name="strain"/>
    <button>Submit</button>
    </form>
  )
}

export default Home
onkeydown