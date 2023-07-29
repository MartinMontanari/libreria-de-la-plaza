import express from 'express';
import ip from 'ip';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.SERVER_PORT;
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}:${PORT}`))



app.get('/', (req, res) => {  res.send({message: "UP"}) });