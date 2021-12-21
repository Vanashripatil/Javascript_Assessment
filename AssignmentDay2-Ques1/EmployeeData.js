let Employees = new Map();


Employees.set('D1', [{EmpNo:107, EmpName: 'J', Salary: 82222}, {EmpNo:104, EmpName: 'D', Salary: 42222}]);
Employees.set('D2', [{EmpNo:102, EmpName: 'B', Salary: 22222}, {EmpNo:105, EmpName: 'E', Salary: 52222}]);
Employees.set('D3', [{EmpNo:108, EmpName: 'X', Salary: 32222}, {EmpNo:106, EmpName: 'F', Salary: 62222}]);

// Employees.forEach((v,i)=>{
//   console.log(`Key = ${i} and value= ${JSON.stringify(v)}`);
// });

console.log(Employees);

function arrangedata(departmentName){
    Employees.forEach((v, i) =>{
    if(i == departmentName)
    console.log(`Key = ${i} and value= ${JSON.stringify(v)}`);
})
}

arrangedata("D1");
arrangedata("D2");
arrangedata("D3");

console.log("-----------------------------------");

function sortBasedName(departmentName){
  Employees.forEach((v, i) =>{
  if(i == departmentName){
     console.log(...v.sort((a, b) => a.EmpName.localeCompare(b.EmpName)));
}
})
}

sortBasedName("D1");
sortBasedName("D2");
sortBasedName("D3");


