const Students = require('./students');
const IdentityCard = require('./identity');
const Department = require('./department');
const StudentCourses = require('./studentCourses');
const Courses = require('./courses');



//one to one
Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);


//one to many
Department.hasMany(Students);
Students.belongsTo(Department);

//many to many
Students.belongsToMany(Courses, { through: StudentCourses })
Courses.belongsToMany(Students, { through: StudentCourses })

module.exports = {
    Students,
    IdentityCard,
    Department,
    Courses,
    StudentCourses
}
