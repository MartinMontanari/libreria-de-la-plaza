import app from './app';
import dotenv from 'dotenv';
import ip from'ip';
import './database';

dotenv.config()

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}:${PORT}`));