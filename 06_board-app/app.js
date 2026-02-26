// express 서버 인스턴스 생성
const express = require("express");
const session = require("express-session");
require("dotenv").config();

// 서버 인스턴스
const app = express();
app.use(express.static("pubilc"));
// json body-parser
app.use(express.json());

// express-session setup
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true면 https, false면 http
      maxAge: 10 * 60 * 1000,
    },
    // store: new fileStore(), // 추가
  }),
);

// 라우팅
app.use("/api/board", require("./06_routes/boardRoutes"));
app.use("/api/auth", require("./06_routes/authRoutes"));

// 서버 시작
app.listen(3000, () => {
  console.log("http://localhost:3000 is running...");
});
