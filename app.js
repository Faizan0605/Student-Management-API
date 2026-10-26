const express = require('express');
const db = require('./utils/db-connection')
const studentRoutes = require('./routes/studentRoutes')

require('./models');


const app = express();
const port = 3333;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("HEllow")
})

app.use("/students", studentRoutes);



db.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
})

