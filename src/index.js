import app from './app/app';
import dotenv from 'dotenv';
import ip from'ip';

dotenv.config()

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}:${PORT}`));