import React from "react";
import moment from "moment";

const Article = ({ data }) => (
  <a href={data.url} target="_blank" className="article">
    <div className="article-left">
      <img className="article-img" src={data.urlToImage} />
    </div>
    <div className="article-right">
      <div className="article-title">{data.title}</div>
      <div className="article-metadata">{`Author: ${
        data.author
      } | Published: ${moment(data.publishedAt).format("MMMM Do YYYY")}`}</div>
      <div className="article-content">{data.description}</div>
    </div>
  </a>
);

export default Article;
