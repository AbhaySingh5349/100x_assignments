const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();

const { Admin, Course } = require('../db/index');

const usernameExists = async (username) => {
  const foundAdmin = await Admin.findOne({ username });
  return foundAdmin ? true : false;
};

// Admin Routes
router.post('/signup', (req, res) => {
    const {username, password} = req.body;
    if (await usernameExists(username)) {
        return res.status(403).json({ message: 'username already exists' });
    }

    await Admin.create({ username, password });
    return res.status(201).json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
  const {title, description, price, imageLink} = req.body;

  
  try {
    await Course.create({ title, description, price, imageLink });
    return res.status(201).json({
      message: 'Course created successfully',
      courseId: savedCourse._id,
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error in creating ' });
  }
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  if (!courses) {
    return res.status(404).json({ message: 'No course found' });
  }
  return res.status(200).json({ courses });
});

module.exports = router;
