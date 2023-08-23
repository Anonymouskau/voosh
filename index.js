import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { error, log } from 'console';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY ='@svt#4mx&5ccd81961#chu';



// Set up MongoDB connection
mongoose.connect('mongodb+srv://kaustubhpatil418:3sEvtWA8iFMqIPr9@cluster0.yb4ivsn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{"connected"}).catch(error=>{console.log(error);cd});

// Define MongoDB models
const User = mongoose.model('User', {
  username: String,
  phoneNumber: String,
  password: String,
});


const Order = mongoose.model('Order', {
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subTotal: Number,
  phoneNumber: String,
});

app.use(bodyParser.json());

app.use(cors('*'))
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log(token)
  if (token == null) return res.sendStatus(401);
    try{

     const verified= jwt.verify(token,SECRET_KEY)
      
     console.log(verified);
     req.user=verified.userId
     next();
      }catch(err){
             console.log(err);
    }
  
}

// User registration
app.post('/add-user', async (req, res) => {
  const { username, phoneNumber, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    phoneNumber,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({ message: 'User created successfully' });
});

// User login
app.post('/login-user', async (req, res) => {
  const { phoneNumber, password } = req.body;
  const user = await User.findOne({ phoneNumber });

  if (!user) return res.status(404).json({ message: 'User not found' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({userId:user._id},SECRET_KEY);
  res.json(token);
});

// Adding new order
app.post('/add-order', authenticateToken, async (req, res) => {
  const { subTotal, phoneNumber } = req.body;
  const user = req.user;

  const newOrder = new Order({
    user,
    subTotal,
    phoneNumber,
  });

  await newOrder.save();
  res.status(201).json({ message: 'Order added successfully' });
});

// Getting order details
app.get('/get-order', authenticateToken, async (req, res) => {
  const user = req.user;
  const orders = await Order.find({ user });

  res.json({ orders });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
