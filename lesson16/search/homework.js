const students = [
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
    "שפירא אביב"
];

function showStudents(){
    const elem = document.querySelector('.frame');
    const ul = document.createElement('ul');

    for (i = 0; i < students.length; i++){
            const li = document.createElement('li');
            li.innerHTML = students[i];

            ul.appendChild(li);
    }
    elem.appendChild(ul);
}

showStudents();

function search(){
    const word = document.querySelector('input').value;

    const ul = document.querySelector('ul');
    ul.innerHTML = "";

    for ( i = 0; i < students.length; i ++){
        let studentsName = students[i];

        if (studentsName.includes(word)){
            const li = document.createElement('li');
            li.innerHTML = studentsName;

            if (word) {
                studentName = studentName.split(word).join(`<mark>${word}</mark>`);
            }

            ul.appendChild(li);
        }
    }
}