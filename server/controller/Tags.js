const Tag = require("../models/Tag");

// create Tag ka hadler function
exports.createTag = async (req, res) => {
  try {
    //fetch data
    const { name, description } = req.body;
    // validation
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // create entry in DB
    const tagDetails = await Tag.create({
      name: name,
      description: description,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
