let Employees = [ 
  {EmpNo:101, EmpName: 'A', Salary: 12222, DeptName:'D1'}, 
  {EmpNo:102, EmpName: 'B', Salary: 22222, DeptName:'D2'}, 
  {EmpNo:108, EmpName: 'C', Salary: 32222, DeptName:'D3'}, 
  {EmpNo:104, EmpName: 'D', Salary: 42222, DeptName:'D1'}, 
  {EmpNo:105, EmpName: 'E', Salary: 52222, DeptName:'D2'}, 
  {EmpNo:106, EmpName: 'F', Salary: 62222, DeptName:'D3'} ];

// Show All Employees by Alphabetical Ascending order

function myFunction() {
return Employees.sort((a, b)=> a.EmpNo - b.EmpNo)
}

console.log(myFunction());



//Generate Separate arrays based on Different DeptName

let ed1 =  Employees.filter((e,i)=>{
return e.DeptName === 'D1';
});

let ed2 =  Employees.filter((e,i)=>{
return e.DeptName === 'D2';
});

let ed3 =  Employees.filter((e,i)=>{
return e.DeptName === 'D3';
});

console.log(`Result = ${JSON.stringify(ed1)}`);
console.log(`Result = ${JSON.stringify(ed2)}`);
console.log(`Result = ${JSON.stringify(ed3)}`);

//Print Sum of Salary of Employees per department

const result = [];
Employees.reduce(function (res, value) {
if (!res[value.DeptName]) {
res[value.DeptName] = { DeptName: value.DeptName, Salary: 0 };
result.push(res[value.DeptName]);
}
res[value.DeptName].Salary += value.Salary;
return res;
}, {});
console.log(result);
