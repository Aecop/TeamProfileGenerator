const Employee = require("../lib/Employee");
//Using Jest Library to test.


const employee = new Employee("John Doe", 1, "jdoe@test.com");
//Checking each obj and properties of the Employee
test("Checking for Employee Properties requirements", () => {


  //Testing for Employee Name

  expect(employee.name).toEqual(expect.any(String));
  console.log(`Name of the Employee = ${employee.name}`);

  //Testing for Employee ID

  expect(employee.id).toEqual(expect.any(Number));
  console.log(`Employee ID = ${employee.id}`);

  //Testing Employee Email

  expect(employee.email).toEqual(expect.any(String));
  console.log(`Email of the Employee = ${employee.email}`);
});

//Testing for getName()
test("Grabbing Employee Name", () => {


  expect(employee.getName()).toEqual(expect.any(String));
  console.log(`Retrieved Employee name = ${employee.getName()}`);
});

//Testing for getId()
test("Grabbing Employee ID", () => {


  expect(employee.getId()).toEqual(expect.any(Number));
  console.log(`Retrieved Employee ID = ${employee.getId()}`);
});

//Testing for getEmail()
test("Grabbing Employee Email", () => {


  expect(employee.getEmail()).toEqual(expect.any(String));
  console.log(`Retrieved Employee Email = ${employee.getEmail()}`);
});

//Testing for getRole()
test("Grabbing Role", () => {


  expect(employee.getRole()).toEqual(expect.any(String));
  console.log(`Retrieved Role = ${employee.getRole()}`);
});
