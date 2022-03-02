require('dotenv').config();
import app from './app';

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3001');
});
