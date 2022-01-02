import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ title: "hello owlrddddddd" });
});

app.listen(4000, () => console.log("server started"));
