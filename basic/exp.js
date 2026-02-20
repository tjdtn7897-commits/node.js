// exp.js
// 문자열 > 특정패턴 찾기
console.log("Hello, World".replace(/l/g, "L"));
console.log(/^010-?([0-9]{3,4})-?([0-9]{4})$/.test("010-2345-9872"));
let result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
  "test!emal.co.kr",
);
console.log(result);
