// nodemailer.js
const nodemailer = require("nodemailer");
// 환경변수
require("dotenv").config();

const gmailConfig = {
  service: process.env.DAUM_SERVICE,
  host: process.env.DAUM_HOST,
  // port: 587,
  secure: false,
  auth: {
    user: process.env.DAUM_USER,
    pass: process.env.DAUM_PASS,
  },
};

const send = async (data) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport(gmailConfig);
    // 메일발송
    transport.sendMail(data, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(data);
      resolve(result);
    });
  });
};

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   // port: 587,
//   secure: false,
//   auth: {
//     user: "tjdtn7897@gmail.com",
//     pass: "uvcf ltul djyw vuvc",
//   },
// });

// send({
//   from: "tjdtn7897@gmail.com",
//   to: "whu14777@daum.net",
//   subject: "파일첨부테스트",
//   html: "<p>파일첨부연습</p>",
//   attachments: [
//     {
//       filename: "판다.png", // 파일명
//       path: __dirname + "/uploads/" + "판다.png", // 실제 파일
//     },
//   ],
// });
// console.log("main send...");
module.exports = { send };
