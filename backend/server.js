import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 7777;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
