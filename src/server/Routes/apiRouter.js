const express = require("express");
const request = require("request");
const debug = require("debug")("app:api");
const { API_KEY, API_URL, NEWS_API_KEY } = require("../config");

function Api() {
  const apiRoutes = express.Router();

  //Route for searching movies.
  apiRoutes.route("/search").post((req, res) => {
    request(
      {
        uri: API_URL,
        method: "GET",
        qs: {
          apikey: API_KEY,
          s: req.body.s,
          type: req.body.type
        }
      },
      (err, req, body) => {
        let movies = JSON.parse(body);
        res.status(200).json(movies);
      }
    );
  });

  //Route for specific movie information.
  apiRoutes.route("/title").post((req, res) => {
    request(
      {
        uri: API_URL,
        method: "GET",
        qs: {
          apikey: API_KEY,
          i: req.body.id
        }
      },
      (err, req, body) => {
        let title = JSON.parse(body);
        res.status(200).json(title);
      }
    );
  });

  //Get some articles for home page.
  apiRoutes.route("/news").get((req, res) => {
    request(
      {
        uri: "https://newsapi.org/v2/everything?",
        method: "GET",
        qs: {
          apiKey: NEWS_API_KEY,
          q: "Movies",
          sortBy: "popularity"
        }
      },
      (err, req, body) => {
        let news = JSON.parse(body);
        res.status(200).json(news);
      }
    );
  });

  return apiRoutes;
}

module.exports = Api();
