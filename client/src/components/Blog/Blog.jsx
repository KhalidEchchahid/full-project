import React from "react";
import {
  ArticleCard,
  ArticleDetail,
  ArticleWidget,
  Categories,
  CommentsForm,
  Header,
} from "./index";
import { FeaturedArticles } from "./sections";
import AddArticle from "./AddArticle";

const Blog = () => {
  return (

    <div className="mt-4">
      <Header/>
      <FeaturedArticles />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <ArticleDetail />
          <CommentsForm/>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <ArticleWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
