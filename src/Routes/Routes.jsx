import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from "../App.jsx"
import ErrPage from '../pages/errPage/ErrPage.jsx';
import Root from '../pages/root/Root.jsx';
import Home from '../pages/home/Home.jsx';
import About from '../pages/about/About.jsx';
import BookDetails from '../pages/bookDetails/BookDetails.jsx';
import ReadList from '../pages/readlist/ReadList.jsx';
export  const router =createBrowserRouter([
{
  path:"/",
//   element: <App/>
  Component:Root,
  errorElement: <ErrPage/>,

 children:[
      {
        index:true,
        path:'/',
        Component:Home,
        loader:()=>fetch("booksData.json")
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:'/bookDetails/:id',
        Component:BookDetails,
        loader:()=>fetch("booksData.json")

      },{
        path:'/readlist',
        Component:ReadList,
        loader:()=>fetch("booksData.json")

      }
    ]
  
  
}
]) 


