import app from './app';
import ip from'ip';
import './database';


const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}:${PORT}`));