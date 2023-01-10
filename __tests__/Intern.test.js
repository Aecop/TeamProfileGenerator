const Intern = require("../lib/Intern");

const intern = new Intern('John Doe', 1 , 'jdoe@test.com', 'University of Washington')

test('Checking for Intern properties requirements', () => {

    expect(intern.name).toEqual(expect.any(String));
    console.log(`Intern's Name is = ${intern.name}`);

    expect(intern.id).toEqual(expect.any(Number));
    console.log(`Intern's ID is = ${intern.id}`);

    expect(intern.email).toEqual(expect.any(String));
    console.log(`Intern's Email is = ${intern.email}`);

    expect(intern.school).toEqual(expect.any(String));
    console.log(`Intern's School name is = ${intern.school}`);

});

test(`Grabbing Intern's School`, () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
    console.log(`Retrieved Intern's School = ${intern.getSchool()}`);
});

test(`Grabbing Role`, () => {
    expect(intern.getRole()).toEqual(expect.any(String));
    console.log(`Retrieved Role = ${intern.getRole()}`);
});
