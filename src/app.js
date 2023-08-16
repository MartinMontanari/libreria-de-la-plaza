import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import indexRoutes from "./routes/index";
import articlesRoutes from "./routes/articles";
import authRoutes from "./routes/auth";

// Inizializations
const app = express();

// Settings
app.use(cors());
app.use(bodyParser.json());
dotenv.config()

// Middlewares
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);
app.use(articlesRoutes);
app.use(authRoutes);

export default app;