// 게시글 관련 CRUD 기능
const pool = require("../01_config/db");

// 전체 글목록을 반환해주는 기능함수
async function getList() {
  const sql = `
   SELECT b.*, m.login_id, m.name
   FROM tbl_board b
   JOIN tbl_member m ON b.writer_id = m.member_id
   ORDER BY b.board_id DESC
  `;
  return pool.query(sql);
}
// 상세조회
async function getbyId(id) {
  const sql = `
   SELECT b.*, m.login_id, m.name
   FROM tbl_board b
   JOIN tbl_member m ON b.writer_id = m.member_id
   WHERE b.board_id = ?
  `;
  return pool.query(sql, [id]);
}
// 글등록(insert)
async function getCreate(title, content, writer_id) {
  const sql = `
   INSERT INTO tbl_board(title, content, writer_id)
   VALUES (?, ?, ?)
  `;
  return pool.query(sql, [title, content, writer_id]);
}
// 모듈 export
module.exports = { getList, getbyId, getCreate };
