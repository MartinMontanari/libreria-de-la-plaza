import express from "express";
import bodyParser from "body-parser";
import { create } from "express-handlebars";
import path from "path";
import indexRoutes from "./routes/index";
import articlesRoutes from "./routes/articles";

// Inizializations
const app = express();

// Settings
app.use(bodyParser.json());

app.set('views',path.join(__dirname, 'views'));

app.engine(
    '.hbs',
    create({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaultLayout:'main',
        extname: '.hbs',
      }).engine
);

app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);
app.use(articlesRoutes);

export default app;