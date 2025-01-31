import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors({origin: "*",   methods: ['GET'],
}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/info", async(req: Request, res: Response) => {
  const response = {
    email: "abdulsalamakinsanya2@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/abdul-codes/hngstage0task",
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
