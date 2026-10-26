const express = require('express');
const courseController = require('../controller/courseController');

const router = express.Router();

router.post('/addCourse', courseController.addCourse);
router.post('/addStudentCourses', courseController.addStudentsToCourses);

module.exports = router;