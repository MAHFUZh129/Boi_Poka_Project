import React, { Suspense, useEffect, useState } from 'react';
import Book from '../book/Book';

const Books = ({data}) => {
    const [allBoks, setAllBooks]=useState([])
     
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //     setAllBooks(data)
    //     })
    // })

    // const bookPromise=fetch("booksData.json").then(res=>res.json())


    return (
        <div>
            <h1>books</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {               
                   data.map((book)=><Book key={book.bookId}  book={book} ></Book>)
            }
             </div>        
            </Suspense>
        </div>
    );
};

export default Books;