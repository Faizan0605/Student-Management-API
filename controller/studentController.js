const Students = require('../models/students');

const createStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }

        await Students.create({ name, email, age });

        res.status(201).json("User created");
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: "Email already exists" });
        }
        res.status(500).json({ error: error.message });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await Students.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Students.findByPk(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const [updatedRows] = await Students.update(
            { name, email, age },
            { where: { id: req.params.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student updated successfully" });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: "Email already in use by another student" });
        }
        res.status(500).json({ error: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const deletedRows = await Students.destroy({
            where: { id: req.params.id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};