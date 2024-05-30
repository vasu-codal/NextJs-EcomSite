import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";

function RatingReview({ rating }: { rating: number }) {
  return (
    <div className="flex flex-row text-xl">
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className=""
            style={{
              color:
                rating >= star || (rating < star && Math.ceil(rating) === star)
                  ? "gold"
                  : "gray",
            }}
            // onClick={() => {}}
          >
            {rating < star && Math.ceil(rating) === star ? (
              <FaRegStarHalfStroke />
            ) : (
              <MdStarRate />
            )}
          </span>
        );
      })}
    </div>
  );
}

export default RatingReview;
