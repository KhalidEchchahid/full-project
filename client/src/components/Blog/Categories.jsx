import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const index = 1;
  useEffect(() => {
    console.log("get Categories");
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
        <Link key={index} to={`/category/1`} >
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            Artificial intelligence
          </span>
        </Link>
    </div>
  );
};

export default Categories;
