const db = require('../utils/db-connection');

const createStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }

        const sql = 'INSERT INTO Students (name, email, age) VALUES (?, ?, ?)';
        const [result] = await db.query(sql, [name, email, age || null]);

        res.status(201).json({ id: result.insertId, name, email, age });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: "Email already exists" });
        }
        res.status(500).json({ error: error.message });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const sql = 'SELECT * FROM Students';
        const [students] = await db.query(sql);

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const sql = 'SELECT * FROM Students WHERE id = ?';
        const [students] = await db.query(sql, [req.params.id]);

        if (students.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(students[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const sql = 'UPDATE Students SET name = COALESCE(?, name), email = COALESCE(?, email), age = COALESCE(?, age) WHERE id = ?';
        const [result] = await db.query(sql, [name || null, email || null, age || null, req.params.id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student updated successfully" });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: "Email already in use by another student" });
        }
        res.status(500).json({ error: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const sql = 'DELETE FROM Students WHERE id = ?';
        const [result] = await db.query(sql, [req.params.id]);

        if (result.affectedRows === 0) {
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