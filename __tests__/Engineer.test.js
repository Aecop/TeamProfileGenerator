const Engineer = require("../lib/Engineer");

const engineer = new Engineer("John Doe", 1, "jdoe@test.com", "johndoe1");
//Testing for inherited objects and properties from Employee.js and Engineers properties
test("Checking for Engineer properties requirements", () => {


  expect(engineer.name).toEqual(expect.any(String));
  console.log(`Engineer's Name is = ${engineer.name}`);

  expect(engineer.id).toEqual(expect.any(Number));
  console.log(`Engineer's ID is = ${engineer.id}`);

  expect(engineer.email).toEqual(expect.any(String));
  console.log(`Engineer's Email is = ${engineer.email}`);

  expect(engineer.github).toEqual(expect.any(String));
  console.log(`Engineer's Github is = ${engineer.github}`);
});

//Testing for getGithub()
test(`Grabbing Engineer's Github Account`, () => {


  expect(engineer.getGithub()).toEqual(expect.any(String));
  console.log(`Retrieved Github Email = ${engineer.getGithub()}@github.com`);
});

//Testing for getRole()
test(`Grabbing Role`, () => {


  expect(engineer.getRole()).toEqual(expect.any(String));
  console.log(`Retrieved Role = ${engineer.getRole()}`);
});

