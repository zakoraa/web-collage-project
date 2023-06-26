const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const middlewareAuth = require('./middleware/auth');
const db = require('./config/database');
const loginAdminRouters = require('./routes/admin/admin_login');
const loginUserRouters = require('./routes/user/user_login');
const registerAdminRouters = require('./routes/admin/admin_register');
const registerUserRouters = require('./routes/user/user_register');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(middlewareAuth);

app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ["GET, POST, PUT, DELETE"],
    credentials : true
}));

app.use('/login/user', loginUserRouters);
app.use('/login/admin', loginAdminRouters);
app.use('/register/admin', registerAdminRouters);
app.use('/register/user', registerUserRouters);

server.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.json({
        message: "success"
    })
})

app.listen(port , ()=>{
    console.log("Server is running...");
});




