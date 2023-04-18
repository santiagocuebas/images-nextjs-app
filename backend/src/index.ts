import mongoose from 'mongoose';
import app from './app.js';
import { PORT, MONGO_URI } from './config.js';

// Connected Database
const mongoDB = await mongoose.connect(MONGO_URI);

if (mongoDB) console.log('MongoDB Database is Connected');
else console.log('An error has occurred with', mongoDB);

// Server Listener
app.listen(PORT, () => {
	console.log('Server running in port', PORT);
});
