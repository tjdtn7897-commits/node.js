const { ary, order_by_fn } = require("./data");
// node에서는 html이 없어서 exports를 이용해서 {} 무조건 넣어서 연결하기.
console.log(ary);

// Male 인 목록
// {Male: [{},{},{},{}...{}]}
let result = ary.reduce(
  (accm, elem) => {
    const { gender } = elem;
    console.log(accm, elem);
    if (elem.gender == "Male") {
      accm.Male.push(elem);
    }
    return accm;
  },
  { Male: [] },
); //첫번째 매개값 함수
console.log(result);

const obj = { name: "Hong" };
obj.name;
obj["name"];
console.log(obj["age"]);

let group_by_gender = (accm, elem) => {
  // elem.gender = "Male"/"Female"
  // accm["Male"] == accm.Male, accm["Female"] == accm.Female
  if (accm[elem.gender] == undefined) {
    accm[elem.gender] = []; // 초기값 {Male: [], Female: []}
  }
  accm[elem.gender].push(elem.first_name);
  return accm;
};
result = ary.reduce(
  group_by_gender, // 첫번째 매개값 함수
  {},
);
console.log(result);
