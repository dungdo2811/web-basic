// import module
const express  = require("express")
// đọc biến môi trường từ file .env
require("dotenv").config();

const pool = require("./db");
// route giúp chia ra nhiều file
const userRouter= require("./routes/users")
// trả về các module của express
const app = express();
const PORT= process.env.PORT || 3000;
// giúp express hiểu được dữ liệu json từ client gửi lên
app.use(express.json());
// route
//req là request từ cilent 
//res là response từ server trả về cho client
// khi trình duyệt gọi hàm get thì sẽ chạy function này
// tham số hàm get và (req,res) =>{} là hàm callback
//async là bất đồng bộ,cho phép sử dụng await bên trong function
app.get("/", async(req,res) => {
  try{
    //kiêm tra kết nối database
    await pool.query("SELECT 1");

    res.json({
        message: "Express + PostgreSQL API is running"
    });
  } catch (error){
    console.error(error);

    res.status(500).json({
        success: false,
        database: "disconnected",
    });
  }
});

//Gắn user router có nghĩa là mọi route bên trong userRouter 
// đều bắt đầu bằng "/api/users"
app.use("/api/users",userRouter);

//check lỗi 404
app.use((req,res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

//check lỗi 500
app.use((err,req,res,next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
});

// start server
async function startServer() {
    try{
        await pool.query("SELECT 1");
        console.log(    "PostgreSQL connected");
        app.listen(PORT,() => {
            console.log(`API running at http://localhost:${PORT}`);
        });
    } catch (error){
        console.error("Failed to connect to PostgreSQL:", error);
        process.exit(1);
    }   
}

startServer();
