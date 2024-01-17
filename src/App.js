// import ReactDOM from "react-dom/client";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import './App.css'
import FormPage from "./components/pages/FormPage";




const router = createBrowserRouter(
  createRoutesFromElements(
   
    <>
    <Route path="/" element={<Home/>} />
      <Route path = "/product" element={<Product/>}/>
      <Route path = "/formPage" element={<FormPage/>}/>
    </>
  )
)

function App(){
  return (
    <>
  <RouterProvider router={router}/>
    </>
 
  )
}

export default App
