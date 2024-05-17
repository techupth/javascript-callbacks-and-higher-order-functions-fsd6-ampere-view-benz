//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  const passedStudents = array.filter((score) => score > 70).length;
  return operation(passedStudents);
}

function checkCriteria(passedStudents) {
  if (passedStudents >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkCriteria);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkCriteria);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkCriteria);

console.log("Room 1:", scoreRoom1Result);
console.log("Room 2:", scoreRoom2Result);
console.log("Room 3:", scoreRoom3Result);
