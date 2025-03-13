import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider ,createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Prediction from './pages/Prediction';
import Contact from './pages/Contact';
import Result from './components/Result';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = '/about' element={<About/>}/>
      <Route path = '/blog' element={<Blog/>}/>
      <Route path = '/prediction' element={<Prediction/>}/>
      <Route path = '/contact' element={<Contact/>}/>
      <Route path = '/result' element={<Result/>}/>

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 
    selection:text-cyan-400">
      <div className="fixed top-0 -z-10 h-full w-full ">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#b91c1c]"></div>
      </div>
      <div className="container mx-auto ">
        <RouterProvider router={router}/>
      </div>  
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
