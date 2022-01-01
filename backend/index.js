import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/soccerRoutes";
import cors from "cors";

const app = express();
const PORT = 5000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors setup
app.use(cors());

routes(app);

app.get("/", (req, res) => res.send(`Our Soccer app is running at ${PORT}`));

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
