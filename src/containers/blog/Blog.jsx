import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Feb 7, 2024"
            title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Feb 4, 2024"
            title="Quod necessitatibus earum facilis!"
          />
          <Article
            imgUrl={blog03}
            date="Feb 2, 2024"
            title=" Asperiores, atque ab, in recusandae
            officiis vitae."
          />
          <Article
            imgUrl={blog04}
            date="Feb 5, 2024"
            title=" veritatis molestiae impedit incidunt sed sapiente
            voluptates."
          />
          <Article
            imgUrl={blog05}
            date="Feb 6, 2024"
            title=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
