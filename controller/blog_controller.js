//module import
const blog = require("../model/blog_model");
const user = require("../model/user_model");

//path - api/blog/createBlog
//type - post
//requirements -
createBlog = async (req, res) => {
  //input validation checking
  const { title, category, userID, desc, blogBody, imgURL } = req.body;
  if (!(title && category && userID && desc && blogBody && imgURL)) {
    res.status(401).json({ message: "Invalid credentials" });
  } else {
    try {
      const newBlog = new blog({
        title,
        category,
        userID,
        desc,
        blogBody,
        imgURL,
      });
      await newBlog.save();
      res
        .status(201)
        .json({ message: "Blog successfully created", blog: newBlog });
    } catch (err) {
      res.status(404).json({ message: "An error has occurred, Pls refresh" });
    }
  }
};

//path - api/blog/AllBlogs
//type - get
//requirements - null
getBlogs = async (req, res) => {
  //input validation checking
  try {
    const blogData = await blog.find();
    res.json(blogData);
  } catch (err) {
    res.status(404).json({ message: "An error has occurred, Pls refresh" });
  }
};
//path - api/blog/AllBlogs
//type - post
//requirements - blogID
getBlog = async (req, res) => {
  //input validation checking
  const { blogID } = req.query;
  try {
    const blogData = await blog.findById(blogID);
    const bloggerData = await user.findById(blogData.userID);
    res.json({ blogData, bloggerData });
  } catch (err) {
    res.status(404).json({ message: "Blog Not Found" });
  }
};

//path - api/blog/category
//type - get
//requirements - category
getBlogCategory = async (req, res) => {
  //input validation checking
  const { category } = req.query;
  try {
    const blogData = await blog.find({ category: category });
    res.json(blogData);
  } catch (err) {
    res.status(404).json({ message: "Blog Not Found" });
  }
};
//path - api/blog/myblogs
//type - get
//requirements - category
getMyBlogs = async (req, res) => {
  //input validation checking
  const { userID } = req.query;
  try {
    const blogData = await blog.find({ userID: userID });
    res.json(blogData);
  } catch (err) {
    res.status(404).json({ message: "Blog Not Found" });
  }
};

//exporting route functions
exports.createBlog = createBlog;
exports.getBlogs = getBlogs;
exports.getBlog = getBlog;
exports.getBlogCategory = getBlogCategory;
exports.getMyBlogs = getMyBlogs;
