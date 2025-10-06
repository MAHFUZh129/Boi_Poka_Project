import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../book/Book';


const ReadList = () => {

      const [readlist,setReadlist]=useState([])
      const [sort,setSort] =useState("")
    const data =useLoaderData()

    useEffect(()=>{
        const storedBookData = getStoredBook()
        const convertedStoredBooks=storedBookData.map(id=>parseInt(id))
        const myReadList=data.filter(book=>convertedStoredBooks.includes(book.bookId))
        setReadlist(myReadList)
        

    },[])

    const handleSort=(type)=>{
        setSort(type)
        if(type==="ratings"){
            const sortedByratings=[...readlist].sort((a,b)=>a.rating-b.rating)
            setReadlist(sortedByratings)
        }

    }
    return (
        <div>
            <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort by:{sort?sort:""}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>pages</a></li>
    <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
  </ul>
</div>
            
             <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read:{readlist.length}</h2>
      {
        readlist.map(b=><Book key={b.bookId} book={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;