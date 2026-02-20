const data = `[{"id":1,"first_name":"Kaylee","last_name":"Taffs","email":"ktaffs0@businessweek.com","gender":"Female","salary":5781},
{"id":2,"first_name":"Rosabella","last_name":"Craufurd","email":"rcraufurd1@pcworld.com","gender":"Female","salary":12285},
{"id":3,"first_name":"Agustin","last_name":"Readwing","email":"areadwing2@nationalgeographic.com","gender":"Male","salary":7276},
{"id":4,"first_name":"Danit","last_name":"Dickson","email":"ddickson3@geocities.com","gender":"Female","salary":7104},
{"id":5,"first_name":"Russ","last_name":"Jeffs","email":"rjeffs4@bloomberg.com","gender":"Male","salary":9813},
{"id":6,"first_name":"Trip","last_name":"Diboll","email":"tdiboll5@home.pl","gender":"Male","salary":10043},
{"id":7,"first_name":"Audre","last_name":"Chawkley","email":"achawkley6@arizona.edu","gender":"Female","salary":8772},
{"id":8,"first_name":"Creighton","last_name":"Derisly","email":"cderisly7@rambler.ru","gender":"Male","salary":3186},
{"id":9,"first_name":"Emilia","last_name":"Clemoes","email":"eclemoes8@seesaa.net","gender":"Female","salary":13872},
{"id":10,"first_name":"Bryana","last_name":"Pandey","email":"bpandey9@bloglovin.com","gender":"Female","salary":11638},
{"id":11,"first_name":"Finn","last_name":"MacLaverty","email":"fmaclavertya@blog.com","gender":"Male","salary":13848},
{"id":12,"first_name":"Leigh","last_name":"Tift","email":"ltiftb@cdbaby.com","gender":"Male","salary":6708},
{"id":13,"first_name":"Jobi","last_name":"Mirralls","email":"jmirrallsc@phpbb.com","gender":"Female","salary":10210},
{"id":14,"first_name":"Forrester","last_name":"Docwra","email":"fdocwrad@sbwire.com","gender":"Male","salary":14519},
{"id":15,"first_name":"Jonah","last_name":"Pendrey","email":"jpendreye@aol.com","gender":"Male","salary":6998},
{"id":16,"first_name":"Joanie","last_name":"Worstall","email":"jworstallf@themeforest.net","gender":"Female","salary":7693},
{"id":17,"first_name":"Dillon","last_name":"Groneway","email":"dgronewayg@slashdot.org","gender":"Male","salary":9047},
{"id":18,"first_name":"Maurene","last_name":"Leynham","email":"mleynhamh@moonfruit.com","gender":"Female","salary":11054},
{"id":19,"first_name":"Daren","last_name":"Sprigg","email":"dspriggi@youtu.be","gender":"Male","salary":5327},
{"id":20,"first_name":"Dulce","last_name":"Shorland","email":"dshorlandj@discuz.net","gender":"Female","salary":6452}]`;

// JSON문자열 -> object
const ary = JSON.parse(data);
// console.log(ary);

// object -> JSON문자열
const json = JSON.stringify(ary);
// console.log(json);

// console.log(["Hello", "Hi", "Good", "World"].sort()); // 문자열이라서 따로 정렬 안해도 됨
// console.log(
//   [10, 35, 21, 121, 11].sort((n1, n2) => n2 - n1),
//   // 오름차순 정렬하고 싶으면 -값을 반환, 내림차순 정렬하고 싶으면 +값을 반환
// );

// id순으로 정렬함수
const order_by_id = (obj1, obj2) => obj2.id - obj1.id;

// salary 오름차순 정렬
const order_by_salary = (n1, n2) => n1.salary - n2.salary;

// first_name 오름차순 정렬
const order_by_fn = (n1, n2) => (n1.first_name < n2.first_name ? -1 : 1);
let result = ary.sort(order_by_fn);
// console.log(result);

function getMember() {
  return ["user01", "user02", "user03"];
}

// module.exports = { ary, order_by_fn };
