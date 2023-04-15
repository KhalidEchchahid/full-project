import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";


const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("comments");
  }, []);

  return (
    <>
      {/* {comments.length > 0 && ( */}
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {/* {comments.length} */} 14 Comments
        </h3>
        {/* {comments.map((comment, index) => ( */}
        <div className="border-b border-gray-100 mb-4 pb-4">
          <p className="mb-4">
            <span className="font-semibold">comment name</span> on 09-09-2003
          </p>
          <p className="whitespace-pre-line text-gray-600 w-full">
            {parse(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci magna, hendrerit quis neque finibus, facilisis vulputate nulla."
            )}
          </p>
        </div>
        {/* ))} */}
      </div>
      {/* )} */}
    </>
  );
};

export default Comments;
