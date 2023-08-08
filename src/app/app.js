import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "../routes/index.js";
import path from "path";


const app = express();

app.set('views',path.join(__dirname, 'views'));

app.engine(
    '.hbs',
    create({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout:'main',
        extname: '.hbs',
      }).engine
);

app.set('view engine', '.hbs');

//Routes
app.use(indexRoutes);

export default app;