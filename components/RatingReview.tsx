import React from "react";
import { IoMdStarHalf } from "react-icons/io";
import { MdStarRate } from "react-icons/md";

function RatingReview({ rating }: { rating: number }) {
  return (
    <div className="flex flex-row text-xl">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
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
              <IoMdStarHalf size={21} />
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
