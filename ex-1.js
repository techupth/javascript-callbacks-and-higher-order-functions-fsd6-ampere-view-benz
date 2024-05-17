// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < employeeSalaries.length; i++) {
    operation(array[i]);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, function (employeeSalary) {
  const newEmployeeSalaries = employeeSalary + 5000;
  console.log(newEmployeeSalaries);
});
