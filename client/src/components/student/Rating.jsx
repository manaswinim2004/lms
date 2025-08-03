// import React , {useEffect,useState} from 'react'

// const Rating = ({initialRating, onRate}) => {

//   const [rating, setRating]= useState(initialRating || 0)

//   const handleRating = (value) => {
//   setRating(value);
//   if (onRate) onRate(value)
// };

// useEffect(() => {
//   if (initialRating) {
//     setRating(initialRating);
//   }
// }, [initialRating]);

// return (
//   <div className="flex space-x-1">
//     {Array.from({ length: 5 }, (_, index) => {
//       const starValue = index + 1;
//       return (
//         <span
//           key={index}
//           className={`text-xl sm:text-2xl cursor-pointer transition-colors ${
//             starValue <= rating ? 'text-yellow-500' : 'text-gray-400'
//           }`}
//           onClick={() => handleRating(starValue)}
//         >
//           &#9733;
//         </span>
//       );
//     })}
//   </div>
// );


  
// }

// export default Rating

// src/components/StarRating.jsx
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = () => {
  const [rating, setRating] = useState(0); // 0–100 scale

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div style={{ width: "fit-content" }}>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={30}
        fillColor="orange"
        emptyColor="lightgray"
        transition
      />
      <p>Current Rating: {rating / 20} / 5</p>
    </div>
  );
};

export default StarRating;
