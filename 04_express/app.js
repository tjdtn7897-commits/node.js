const express = require("express"); // 모듈 임포트
const app = express(); // 서버 모듈을 인스턴스 생성

// 라우팅정보 => http에 요청방식+URL(end point) = 실행할 함수
app.get("/", (req, res) => {
  const json = JSON.stringify({ id: "user99", name: "홍길동" });
  res.status(200).send("서버실행...");
});

// nodempn test
// http요청방식 + end point => CRUD 처리 (REST 방식)
app.get("/customer", (req, res) => {
  res.send("Get방식 요청");
});

app.post("/customer", (req, res) => {
  res.send("Post방식 요청");
});

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행...http://localhost:3000`);
});
