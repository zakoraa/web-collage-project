const express= require ('express');
const cors= require ('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const LoginRouters =  require('./routes/login');
// const userAuth = require('./routes/auth');
const UserLogout = require('./controllers/logout');
const RegisterRouters = require('./routes/register');
const ProductRouters = require('./routes/products');
const TransactionRouters = require('./routes/transaction');
const UserRouters = require('./routes/user');
const UserHasProductRouters = require('./routes/user_has_product');

const app = express();

app.use(cors({
    credentials : true,
    methods : ["GET, POST"],
    origin : "http://localhost:3001",
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
// app.use('/auth', userAuth);
app.use('/', LoginRouters);
app.use('/user', UserRouters);
app.use('/userhasproduct', UserHasProductRouters);
app.use('/products', ProductRouters);
app.use('/register', RegisterRouters);
app.use('/logout', UserLogout);
app.use('/transaction', TransactionRouters);

app.listen(3000, ()=>{
    console.log("Server is running...");
});