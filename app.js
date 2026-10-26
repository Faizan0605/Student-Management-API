const express = require('express');
const db = require('./utils/db-connection')
const studentRoutes = require('./routes/studentRoutes')
const courseRoutes = require('./routes/courseRoutes')

require('./models');


const app = express();
const port = 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("HEllow")
})

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);



db.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
})

