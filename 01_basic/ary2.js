// reduce() : 이전 순번의 결과를 다음 순번의 매개값으로 활용가능
result = [10, 15, 20, 25, 30].reduce((accm, elem, idx) => {
  console.log(idx, "->", accm, elem);
  if (elem >= 20) {
    const li = document.createElement("li");
    li.innerText = elem;
    accm.appendChild(li);
  }
  return accm; // accm > elem ? accm : elem;
}, document.querySelector("#list"));
console.log(result);

// Male 사람의 급여 합계
result = ary.reduce((accm, elem, idx, array) => {
  console.log(idx, "->", accm, elem);
  const { salary, gender } = elem;
  if (gender == "Male") {
    accm += salary;
  }
  return accm;
}, 0);
console.log("Male급여합계: " + result);

console.clear();
// Female의 급여가 10,000 이하인 사람들의 {번호/이름(fn+ln)/이메일/급여}
// 새로운 배열로 생성
result = ary.reduce((accm, elem, idx, array) => {
  console.log(idx, "->", accm, elem);
  const { id, name, email, gender, salary } = elem;
  const obj = {
    id: elem.id,
    name: elem.first_name + "-" + elem.last_name,
    email: elem.email,
    gender: elem.gender,
    salary: elem.salary,
  };
  if (gender == "Female" && salary <= 10000) {
    accm.push(obj);
  }
  return accm;
}, []);
console.log(result);
