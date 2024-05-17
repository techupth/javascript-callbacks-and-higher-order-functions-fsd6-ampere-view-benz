//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  if (operation(array) >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}
function countOver70(array) {
  let count = 0;
  for (let score of array) {
    if (score >= 70) {
      count = count + 1;
    }
  }
  return count;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, countOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, countOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, countOver70);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);
