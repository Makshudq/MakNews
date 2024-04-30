import React from "react";
import "../app.css";

import news_logo from "../assets/news_logo.jpg";

function Newscard({ title, description, imgurl, readmore }) {
  return (
    <>
      <div
        className="card d-inline-block bg-dark text-light p-1"
        style={{ width: "18rem", margin: "1rem" }}
      >
        <img
          src={imgurl ? imgurl : news_logo}
          style={{ height: "12rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "Read more for this article or news. Visit site to explore more from world news"}
          </p>
          <a href={readmore} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default Newscard;
