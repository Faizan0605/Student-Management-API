const Student = require('./students');
const IdentityCard = require('./identity');

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);


module.exports = {
    Student,
    IdentityCard
}
