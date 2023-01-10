const Manager = require('../lib/Manager');

const manager = new Manager('John Doe', 1, 'jdoe@test.com', 1234567890)

test('Checking for manager properties', () => {

    expect(manager.name).toEqual(expect.any(String));
    console.log(`Manager Name is = ${manager.name}`);

    expect(manager.id).toEqual(expect.any(Number));
    console.log(`Manager ID is = ${manager.id}` );

    expect(manager.email).toEqual(expect.any(String));
    console.log(`Manager Email is = ${manager.email}`);

    expect(manager.officeNumber).toEqual(expect.any(Number));
    console.log(`Manager Office Number is = ${manager.officeNumber}`);
})

test(`Getting The Role`, () => {

    expect(manager.getRole()).toBe('Manager');
    console.log(`Retrieved Role = ${manager.getRole()}`);
});
