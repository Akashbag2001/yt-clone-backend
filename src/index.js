import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
dotenv.config({
  path: "./env",
});
const connectionPort = process.env.PORT || 5000;
const app = express();
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(connectionPort || 5000, () => {
      console.log(`Sever is running at Port: ${connectionPort}`);
    });
  })
  .catch((error) => {
    console.error("MONGO DB CONNECTION FAILED!!", error);
  });

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
