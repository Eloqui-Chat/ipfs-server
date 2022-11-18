import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import ipsfRouter from "./ipsf.api.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to the team OS Army ipsf server",
  });
});

app.use("/api", ipsfRouter.router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
