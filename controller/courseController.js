const Courses = require('../models/courses');
const Students = require('../models/students');

const addCourse = async (req, res) => {

    try {

        const { name } = req.body;

        const course = await Courses.create({ name });

        res.status(201).json(course)

    } catch (err) {
        res.status(500).json({ 'error': error.message })
    }
}


const addStudentsToCourses = async (req, res) => {
    try {
        const { studentId, courseIds } = req.body;
        const student = await Students.findByPk(studentId);
        const courses = await Courses.findAll({
            where: {
                id: courseIds
            }
        })

        await student.addCourses(courses);
        const updateStudents = await Students.findByPk(studentId, { include: Courses });
        res.status(200).json(updateStudents);
    } catch (err) {
        res.status(500).json({ 'error': error.message })
    }
}

module.exports = { addCourse, addStudentsToCourses };