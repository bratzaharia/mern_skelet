import express from "express";
import path from 'path'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "./../template";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
// import devBundle from './devBundle';


// express APP
const app = express();
// devBundle.compile(app);

// // DB Config
// const db = require('./../config/config').mongoURI;

// // Connect to MongoDB
// mongoose.connect(db,  { useNewUrlParser: true })
//   .then(() => console.log('MongoDB successfully conected!'))
//   .catch(err => console.log(err))

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cookie, compress, helmet and cors
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
// static files

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// routes
app.use("/", userRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  }
});

export default app;
