const express = require("express");

const app = express();

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const fileUpload = require("express-fileupload");
const { cloudnairyconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
// database connect
database.connect();
// middlewares

app.use(express.json());
app.use(cookieParser());

// app.use(cors(
//     {
//         origin: ["https://study-notion-eta.vercel.app","http://localhost:3000","www.studynotion.fun","studynotion.fun","https://studynotion.fun","https://www.studynotion.fun"],
//         credentials: true,
//     }
// ));
app.use(
  cors({
    origin: "*",

    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//cloudinary connection
cloudnairyconnect();

//routes
app.use("/api/v1/auth", userRoutes);

app.use("/api/v1/payment", paymentRoutes);

app.use("/api/v1/profile", profileRoutes);

app.use("/api/v1/course", courseRoutes);

app.use("/api/v1/contact", require("./routes/ContactUs"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Your server is up and running.....",
  });
});

let server = app.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
