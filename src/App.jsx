import { useState } from 'react'
import React from 'react';
import ContactForm from './components/Contactform/Contactform';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>contact us</h1>
      <ContactForm />
    </>
  )
}

export default App



