const pool = require("../01_config/db");

// 글등록(insert)
async function createMenber(login_Id, name, password, role) {
  const sql = `
   INSERT INTO tbl_member(login_id, name, password, role)
   VALUES (?, ?, ?, ?)
  `;
  return pool.query(sql, [login_Id, name, password, role]);
}

// 조회
async function findMemberById(loginId) {
  const sql = `select * from tbl_member where login_id = ?`;
  return pool.query(sql, [loginId]);
}

// 모듈 export
module.exports = { createMenber, findMemberById };
