import { useState } from 'react'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Entry from './Entry'
import Home from './pages/home'

//react toastify
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Entry/>,
      children :[
        {
          index : true,
          element : <Home/>
        }
      ]
    }
  ])

  return (
    <div className="App font-poppins">
      <RouterProvider router = {router}/>
      <ToastContainer />
    </div>
  )
}

export default App
