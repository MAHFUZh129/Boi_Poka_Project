import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addStoredDB } from '../../utility/addToDB';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const BookDetails = () => {
const {id}=useParams()
const bookId =parseInt(id)
const data =useLoaderData()
const singleBook=data.find(book=>book.bookId===bookId)
console.log(singleBook)
const{bookName,image,totalPages,review,author,category,publisher,rating,yearOfPublishing,tags}=singleBook
    
const handleMarkAsRead=id=>{

MySwal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
})


    addStoredDB(id)

}

return (
        <div className='flex gap-10 p-22'>
            <div className='p-30 border-2 border-gray-400 rounded-lg  flex justify-center bg-[#ece5e5]'>
                <img className='h-[400px]  ' src={image} alt="" srcset="" />
            </div>
              <div className='flex-1 space-y-5'>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <h3 className='text-xl'><span>By:</span>{author}</h3>
            <div className="divider"></div>
            <p  className='font-bold'>{category}</p>
            <div className="divider"></div>
            <h4 className=''> <span className='font-bold mr-2'>Review :</span>{review}</h4>
            {/* <h4 className='font-bold'><span>Tag:</span></h4> */}
           
           <div className='flex gap-4'>
            <h1 className='font-bold'>Tag:</h1>
             {
            tags.map(tag=><h3 className='bg-gray-100 text-green-500 px-2 py-1 rounded-lg '>#{tag}</h3>) 
        }
           </div>
            <div className="divider"></div>
            <h5 className='font-bold'><span >Number of Pages:</span> {totalPages}</h5>
            <h5 className='font-bold'><span >Publisher:</span>{publisher}</h5>
            <h5 className='font-bold'><span >Year of Publishing:</span>{yearOfPublishing}</h5>
            <h5 className='font-bold'><span >Rating:</span>{rating}</h5>
            <div className='space-x-6'>
            <button onClick={()=>handleMarkAsRead(id)} className="btn">Mark as Read</button>
            <button className="btn btn-active text-white btn-accent">Add to Wishlist</button>

            </div>
        </div>
        </div>
    );
};

export default BookDetails;