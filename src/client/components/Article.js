import React from "react";
import moment from "moment";

const Article = props => (
  <a href={props.data.url} target="_blank" className="article">
    <div className="article-left">
      <img className="article-img" src={props.data.urlToImage} />
    </div>
    <div className="article-right">
      <div className="article-title">{props.data.title}</div>
      <div className="article-metadata">{`Author: ${
        props.data.author
      } | Published: ${moment(props.data.publishedAt).format(
        "MMMM Do YYYY"
      )}`}</div>
      <div className="article-content">{props.data.description}</div>
    </div>
  </a>
);

export default Article;
