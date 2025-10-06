import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';
const Book = ({book}) => {
    // const data =use(bookPromise)
    // console.log(data)
    console.log(book)

    const {bookName,bookId,image,rating,tags,author,category,publisher}=book

    return (
        <div>
     <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='bg-base-200 py-6 w-5/6 mt-5 rounded-lg mx-auto'>
    <img className='h-42'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <div className='flex justify-center gap-27'>
        {
            tags.map(tag=><h3 className='bg-gray-100 text-red-500 px-2 py-1 rounded-lg font-bold '>{tag}</h3>) 
        }
    </div>
    <h2 className="card-title ">
      {bookName}
      <div className="badge badge-secondary">{rating}<FaRegStarHalfStroke />
</div>
    </h2>
    <p className='font-bold text-xl text-gray-700'>By: {author}</p>
    <div className="flex justify-between">
      <div className="text font-semibold">{category}</div>
      <div className="font-semibold text-green-600">Publisher:  {publisher}</div>
    </div>
  </div>
            </div></Link>
        </div>
    );
};

export default Book;