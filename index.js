const express = require('express');
const userRouter = require("./routes/user")
const createCourseRoutes = require('./routes/course');
const app = express();

app.use("api/v1/user",userRouter);
app.use("api/v1/course",courseRouter);

createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000);