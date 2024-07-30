import express from "express";
const app = express();
const port = 3000;
app.use((req, res, next) => {
  console.log("in the middleware");

  next();
});
app.use((req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Hello From Expressjs</h1>");
});
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
