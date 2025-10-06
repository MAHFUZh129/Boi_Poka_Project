import React from 'react';
import bookimg from '../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img 
      src={bookimg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl mb-8 font-bold">Books to freshen  up  your bookshelf</h1>
      
      <button className="btn text-white bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;