import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const ArticleWidget = ({ categories, slug }) => {
const ArticleWidget = () => {
  const id = 1;
  const index=1;
  const categories = [];

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (id) {
      console.log("set related post");
    } else {
      console.log("set recent post");
    }
  }, [id]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {id ? "Related Posts" : "Recent Posts"}
      </h3>
      {/* {relatedPosts.map((post, index) => ( */}
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt='post.title'
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src='https://picsum.photos/300/300'
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              09-09-2002
            </p>
            <Link to={`/post/1`} className="text-md" key={index}>
               post title
            </Link>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default ArticleWidget;
