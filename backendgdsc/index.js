const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
dotenv.config();
// dotenv.config({ path: "./config/config.env" });
connectDB();
const uploadUserImage=multer({
  storage:multer.diskStorage({
    destination(req,file,cb){
      cb(null,path.join(__dirname,'userImages'));
    },
    filename(req,file,cb){
      cb(null,`${new Date().getTime()}_${file.originalname}`);
    }
  })
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());


//app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
// app.use("/api/user", require("./routes/authRoute"));
app.use("/api/user",uploadUserImage.single('profilePhoto'), require("./routes/authRoute"));


// app.use("/api/search", tokenCheck, searchRouter);


// app.use("/api/upload", tokenCheck, require("./routes/uploadRoutes"));
//app.use("/api/upload", require("./routes/uploadRoutes"));
app.listen(3080, () => {
  console.log("Server is running on port");
});
