// Making uppercase to array items
let students = ['stevens', 'Lori', 'james', 'Boris', 'david', 'Oscar', 'Prima', 'dog', 'cat'],
  lStd = [];
for (let i = 0; i < students.length; i++) {
  lStd.push(students[i].toLowerCase())
};
// accessing array strings
let str = "Do you feel lucky";
let str2 = "";

for (let val of str) {
    if (val === 'e') {
        str2 += val.toUpperCase();
    } else {
        str2 += val;
    }
};

