import express from "express";
import usersRoute from "./routes/usersRoute";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", usersRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 