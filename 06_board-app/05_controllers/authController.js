const authService = require("../04_services/authService");

// 회원가입
const signup = async (req, res) => {
  const { login_Id, name, password, role } = req.body;
  await authService.signup(login_Id, name, password, role);

  res.json({ retCode: "OK" });
};

// 로그인
const login = async (req, res) => {
  const { loginId, password } = req.body;
  const user = await authService.login(loginId, password);

  if (user) {
    // falsy 처리[null, '', 0, undefined]
    // session 객체에 member_id, login_id, name 저장
    const { member_id, login_Id, name } = user;
    req.session.user = { member_id, login_Id, name };

    res.json({ retCode: "OK" });
    console.log("user => ", user);
  } else {
    res.json({ retCode: "NG" });
    console.log("user => ", user);
  }
};

module.exports = { signup, login };
