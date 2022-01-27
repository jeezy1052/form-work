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
    console.log(usernameRef)
  }
  return (
    <form onSubmit={handleSubmit}>
    <FormInput 
    placeholder="User Name"
    // onChange={username}

    refer={usernameRef}
    />
    <FormInput placeholder="Email"/>
    <FormInput placeholder="Full Name"/>
    <FormInput placeholder="Strain"/>
    <button>Submit</button>
    </form>
  )
}

export default Home