// nodemailer.js
const nodemailer = require("nodemailer");

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

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  // port: 587,
  secure: false,
  auth: {
    user: "tjdtn7897@gmail.com",
    pass: "uvcf ltul djyw vuvc",
  },
});

module.exports = { send };
