let students = [
  "אברהם מזרחי גיא",
  "בנדרקר סטיב",
  "גל תומר",
  "דוד יובל",
  "הרשקוביץ רותם",
  "זכריה מתן",
  "יוחנוק איתי",
  "מאיקל כרם",
  "לוי אביתר",
  "לרנר אלישיב",
  "פצ׳ן מריה",
  "צ׳וגאי גלב",
  "צבטקוב מקסים",
  "קבלו אלון",
  "קזס עידו",
  "קטייב ליטל",
  "רבין שי",
  "רגב אדם ",
  "שטיינברג מאיה",
  "שיבלי יסמין",
  "שליט לארס",
  "שפירא אביב",
];

function showList() {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  for (i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = students[i];

    ul.appendChild(li);
  }
}

showList();

function random() {
  let str = [];
  let len = students.length;

  for (i = 0; i < len; i++) {
    const randomPlace = Math.floor(Math.random() * students.length);
    str.push(students[randomPlace]);
    students.splice(randomPlace , 1);
  }
  students = str;
  showList();
}

function sortASC(){
  students.sort();
  showList();
}

function sortDESC(){
  students.sort();
  students.reverse();
  showList();
}

function raffle(){
  const rand = Math.floor(Math.random() * students.length);

  alert(`:המנצח הוא ${students[rand]}`);
}

function raffleSpecial(){
  const rand = Math.floor(Math.random() * students.length);

  const elem = document.createElement('div');
  elem.classList.add('raffle');
  elem.innerHTML = students[rand];

  const frame = document.querySelector('.frame');

  frame.appendChild(elem);

}