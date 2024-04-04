import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import About from './Components/About';
import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState(true);
  const toggleMode =()=>{
    if(mode) document.body.style.backgroundColor='black';
    else document.body.style.backgroundColor='white';
    setMode(!mode);
}
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar h1="Textify" toggle={toggleMode} mode={mode}/>
        <TextBox mode={mode}/>
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar h1="Textify" toggle={toggleMode} mode={mode}/>
        <About mode={mode} />
      </>
    )
  }
]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
