
const express = require('express')
const app = express()
const userRouter = require('./src/routes/user.routes');
const port = 3000;

app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
