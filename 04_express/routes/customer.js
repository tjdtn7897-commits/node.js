// customer와 관련된 라우팅 정보
const router = require("express").Router();
const compression = require("compression");
const path = require("path"); // path 모듈 임포트

// http요청방식 + end point (URL) => CRUD 처리 (REST 방식)
router.get(
  "/search",
  (req, res, next) => {
    console.log("middleware 요청");
    next();
  },
  (req, res) => {
    // res.redirect("/");
    // res.download(path.join(__dirname, "./봄.jpg"));
    console.log("응답처리중");
    res.json({ retCode: "success", retMsg: "server status 200" });
  },
);

router.post("/add", (req, res) => {
  res.send("Post방식 요청");
});

// Get요청(parameter로 처리) => req.params 처리가능
// Post요청하면 body에 데이터를 해석함 => req.body 해석
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login page");
});

// compression() 미들웨어 적용 / http://localhost:3000/customer/download
router.get("/download", compression(), (req, res) => {
  // res.send("compression() 모듈적용");
  res.download(path.join(__dirname, "..", "봄.jpg"));
});

router.get("/error", (req, res) => {
  throw new Error("에러발생");
});

module.exports = router; // 라우터 정보를 익스포트
