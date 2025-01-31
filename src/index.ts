import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/info", async(req: Request, res: Response) => {
  const response = {
    email: "abdulsalamakinsanya2@gmail.com",
    github_url: "https://github.com/abdul-codes/hngstage0task",
    datetime: new Date().toISOString(),
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
