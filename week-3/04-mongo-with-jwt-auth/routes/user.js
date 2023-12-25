const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');

const usernameExists = async (username) => {
  const foundUser = await User.findOne({ username });
  return foundUser ? true : false;
};

// User Routes
router.post('/signup', (req, res) => {
  // Implement user signup logic
  const {username, password} = req.body;
    if (await usernameExists(username)) {
        return res.status(403).json({ message: 'username already exists' });
    }

    await User.create({ username, password });
    return res.status(201).json({ message: 'User created successfully' });
});

router.post('/signin', (req, res) => {
  // Implement admin signup logic
  const {username, password} = req.body;
    if (!(await usernameExists(username))) {
        return res.status(403).json({ message: 'Invalid username/password' });
    }

    const token = jwt.sign({ username }, process.env.JWT_PASSWORD);
    return res.status(200).json({ token });
});

router.get('/courses', (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
    if (!courses) {
        return res.status(404).json({ message: "No course found" });
    }
    return res.status(200).json({ courses });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
  // Implement course purchase logic
  const id = req.params.courseId;
    const course = Course.findById(id);
    if (!course) {
        return res.status(404).json({ message: "No course found with given id" });
    }
    return res.status(200).json({ course });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  const user = req.user;
    const purchasedCourses = await Course.find({
        _id: { $in: user.purchasedCourses },
    });

    if (purchasedCourses.length < 1) {
        return res.status(404).json({ message: "No course purchased" });
    }
    return res.status(200).json({ purchasedCourses });
});

module.exports = router;
