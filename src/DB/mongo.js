import mongoose from 'mongoose';

const connectionString =
  'mongodb+srv://juanfri2211:eyO1PQLqBMcWMTlX@test1.1wphs.mongodb.net/test1?retryWrites=true&w=majority';

// mongo connect
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

/* // schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  whatsapp: String,
  bio: String,
});

// model
const User = mongoose.model('User', userSchema);

User.find({}).then((result) => {
  console.log(result);
  mongoose.connection.close();
}); */

// User
/* const user = new User({
  name: 'Juanfri losa',
  email: 'juanfri@gmail.com',
  password: '123456',
  avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&v=4',
  whatsapp: '+55119999999',
  bio: 'I am a front-end developer',
});

user
  .save()
  .then((result) => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error saving user:', err);
  });
 */
/* const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'jonny@nose.com',
    password: '123456',
    avatar: 'avatar.png',
    whatsapp: '123456789',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jano@nose.com ',
    password: '123456',
    avatar: 'avatar.png',
    whatsapp: '123456789',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
  {
    id: 3,
    name: 'Joe Dankee',
    email: 'joe@nose.copm',
    password: '123456',
    avatar: 'avatar.png',
    whatsapp: '123456789',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
];

export default users;
 */
