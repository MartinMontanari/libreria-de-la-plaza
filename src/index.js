const app = require('./app/app');
const dotenv = require('dotenv');
const ip = require('ip');

dotenv.config()

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}:${PORT}`))



app.get('/', (req, res) => {  res.send({message: "UP"}) });