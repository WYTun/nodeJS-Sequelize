const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req, res) => {
  res.json({message:"Welcome to node application"})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

const db= require("./app/models");
db.Sequelize.sync();
//for production server to force true and resync
// db.sequelize.sync({ force: true }).then(() => { 
//     console.log("Drop and re-sync db.");
//   });