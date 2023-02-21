// Write your solution in this file!

const employee = { Name: 'Sam', Address: '11 Broadway'};

console.log(employee);

function updateEmployeeWithKeyAndValue(object, key, value) {
let copy = {...object}
copy[key] = value
    return copy 
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
   employee[key] = value;
   return employee; 
};

function deleteFromEmployeeByKey(employee, key) {
   const newEmployee = {...employee}
   delete newEmployee[key]
   return newEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
};

