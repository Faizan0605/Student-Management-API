const express = require('express');
const studentController = require('../controller/studentController');

const router = express.Router();

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.post("/addingStudentWithCard", studentController.addingValuesToStudentAndIndetifyTable)

module.exports = router;