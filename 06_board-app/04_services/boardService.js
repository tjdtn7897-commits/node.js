// 업무관련 기능
const boardModel = require("../03_models/boardModel");

// 서비스 - 모델 => 1:1 매칭작업
// 글목록 조회 업무
async function getList() {
  return boardModel.getList();
}
// 단건 조회 업무
async function getDetail(id) {
  return boardModel.getbyId(id);
}
// 등록(create)
async function createboard(title, content, writer_id) {
  return boardModel.getCreate(title, content, writer_id);
}

module.exports = { getList, getDetail, createboard };
