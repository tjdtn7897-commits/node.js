// ary.js
console.clear();

// 급여가 10,000보다 적은 사람들
const less_than_10000 = (elem, idx) => {
  console.log(elem, idx);
  if (elem.salary < 10000) {
    return true;
  }
  return false;
};

// 여자중에서 8000 이상인 사람
const more_than_8000 = (elem) => {
  if (elem.gender == "Female" && elem.salary >= 8000) {
    return true;
  }
  return false;
};

result = ary
  // filter() : 조건을 만족하는 요소만 새로운 배열에 담음
  .filter(more_than_8000)
  .map((elem, idx, array) => {
    // 모르면 콘솔에 찍어보기
    // map() : A -> A'(매핑)
    // id/first_name/last_name/email/gender/salary -> A
    // no/name/gender/salary -> A'
    // 객체 구조 분해
    const { id, first_name, last_name, gender, email, salary } = elem;
    //
    const obj = {
      no: id,
      name: first_name + "-" + last_name,
      gender,
      salary,
    };
    return obj;
  });
// 결과 출력
console.log(result);
