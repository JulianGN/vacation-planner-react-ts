import express from "express";
import holidaysRouter from "@/routes/holidays";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/api/holidays", holidaysRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
