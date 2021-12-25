const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 7007;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("UI"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {});

app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
