// password.js
const { rejects } = require("assert");
const crypto = require("crypto");
const { resolve } = require("dns");

const pw = crypto.createHash("sha512").update("test1234").digest("base64");
// console.log(pw);

async function createPassword() {
  // salt 생성 (그때마다 달라지는 시드값)
  const salt = await new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        console.log("error=>", err);
        reject(err);
      }
      console.log(buf.toString("base64"));
      resolve(buf.toString("base64")); // salt 변수에 저장
    });
  });

  // console.log(`salt=> ${salt}`);

  // 암호화된 비밀번호를 생성

  crypto.pbkdf2(
    "test1234", // 1번째 매개값 => 암호화된 평문
    salt, // 2번째 매개값 => slat 값
    100000, // 3번째 매개값 => 10만번 반복 해시 생성(해커 방지용)
    64, // 4번째 매개값 => 길이반환
    "sha512", // 5번째 매개값 => 해시함수(대체적인 고정값을 넣으면 됨)
    (err, data) => {
      // 6번째 매개값 => callback 함수
      if (err) {
        console.log(err);
        return;
      }
      console.log(data.toString("base64"));
    },
  );
} // end of createPassword
createPassword();
