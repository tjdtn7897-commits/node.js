const express = require("express"); // 모듈 임포트
const fs = require("fs");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const cors = require("cors");

const app = express(); // 서버 모듈을 인스턴스 생성
const customerRoute = require("./routes/customer");
const compression = require("compression");

// 정적파일 폴더(html,css,js) 제공가능
app.use(express.static("public"));

// body parser 셋업
app.use(express.urlencoded()); // x-www-form-urlencoded
app.use(express.json()); // body -> json으로 넘어올때 씀
app.use("/customer/downlod", compression()); //모든 라우팅에 적용됨

// session 관리
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true면 https, false면 http
      maxAge: 60000,
    },
    // store: new fileStore(), // 추가
  }),
);

//cors 셋업 추가
app.use(cors());

// 라우팅정보 => http에 요청방식+URL(end point) = 실행할 함수
app.get("/", (req, res) => {
  const json = JSON.stringify({ id: "user99", name: "홍길동" });
  // fs.readFile 메소드 / fs.readFileSync
  const indexHtml = fs.readFileSync("./index.html", "utf-8"); // (./) 붙여도 되고 안붙여도 됨
  console.log(indexHtml);
  res.status(200).send(indexHtml);
});

// 외부 라우팅정보를 임포트
app.use("/customer", customerRoute);
app.use("/product", require("./routes/product"));

app.get("/data", (req, res) => {
  res.json({ id: "1001", data: "sample" });
});

// session
app.get("/login", (req, res) => {
  req.session.user = { id: "user99", name: "홍길동" };
  res.send("session에 저장");
});
app.get("/logout", (req, res) => {
  req.session.user.distroy(); // 세션삭제
  res.send("로그아웃");
});

app.get("/my_info", (req, res) => {
  console.log(req.session.user);
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

// exoress에서 에러처리하는 방식
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행...http://localhost:3000`);
});
