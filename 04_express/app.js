const express = require("express"); // 모듈 임포트
const fs = require("fs");
const app = express(); // 서버 모듈을 인스턴스 생성
const customerRoute = require("./routes/customer");

// 정적파일 폴더(html,css,js) 제공가능
app.use(express.static("public"));
// body parser 셋업
app.use(express.urlencoded()); // x-www-form-urlencoded
app.use(express.json()); // body -> json으로 넘어올때 씀

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

// exoress에서 에러처리하는 방식
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행...http://localhost:3000`);
});
