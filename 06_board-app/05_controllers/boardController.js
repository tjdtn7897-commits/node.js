// 컨트롤(라우트 핸들러)
const boardService = require("../04_services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  console.log("현재로그인정보: ", req.session.userlogin_id);
  res.json(rows); // 화면에 출력되는 결과
};

// 상세조회
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

// 등록(create)
const create = async (req, res) => {
  const { title, content, writer_id } = req.body; // body안에 있는 값을 불러와서 title,content,writer_id에 넣겠다.
  const [rows] = await boardService.createboard(title, content, writer_id);
  console.log(rows);
  res.json(rows);
};

module.exports = { list, detail, create };
