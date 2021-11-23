//importing dependencies
const express = require("express");
//
//importing modules
const {
  createBlog,
  getBlogs,
  getBlog,
  getBlogCategory,
  getMyBlogs,
} = require("../controller/blog_controller");
const routes = express.Router();

routes.post("/createBlog", createBlog);
routes.get("/AllBlogs", getBlogs);
routes.get("/blogID", getBlog);
routes.get("/category", getBlogCategory);
routes.get("/myblogs", getMyBlogs);
module.exports = routes;
