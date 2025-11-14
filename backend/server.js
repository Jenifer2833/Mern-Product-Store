import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();
const app=express();

app.use(express.json());// allows json data in the body

app.use("/api/products",productRoutes)
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    connectDB();
    console.log("Server Started at http://localhost:"+PORT);
});
//3QVrV1Ma0XrHEdFB
//jeniferreshma33_db_user