const express= require ('express');
const cors= require ('cors');
const cookieParser = require('cookie-parser');
const LoginRouters =  require('./routes/login');
const userAuth = require('./routes/auth');
const UserLogout = require('./controllers/logout');
const RegisterRouters = require('./routes/register');
const ProductRouters = require('./routes/products');


const app = express();

app.use(cors({
    credentials : true,
    methods : ["GET, POST"],
    origin : "http://localhost:3001",
}));

app.use(express.json());
app.use(cookieParser());
// app.use('/auth', userAuth);
app.use('/', LoginRouters);
app.use('/products', ProductRouters);
app.use('/register', RegisterRouters);
app.use('/logout', UserLogout);




app.listen(3000, ()=>{
    console.log("Server is running...");
});